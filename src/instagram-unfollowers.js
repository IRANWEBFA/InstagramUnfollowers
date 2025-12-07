"use strict";

/*
|--------------------------------------------------------------------------
| Instagram Unfollowers – Clean Source (Full Version)
| Created by IRANHACKERS Security Team
|--------------------------------------------------------------------------
|
| This version is completely clean, readable, structured, and ready
| for development, modification, or debugging.
|
| The minified version (in /dist) should be used for execution inside
| the Instagram DevTools Console.
|
|--------------------------------------------------------------------------
*/

const INSTAGRAM_HOSTNAME = "www.instagram.com";

let nonFollowersList = [];
let userIdsToUnfollow = [];
let isActiveProcess = false;

/* -------------------------------------------------------
| Utility Functions
-------------------------------------------------------- */

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getCookie(name) {
  const parsed = `; ${document.cookie}`.split(`; ${name}=`);
  if (parsed.length === 2) {
    return parsed.pop().split(";").shift();
  }
}

/* -------------------------------------------------------
| URL Builders
-------------------------------------------------------- */

function afterUrl(cursor) {
  return (
    `https://www.instagram.com/graphql/query/?query_hash=3dec7e2c57367ef3da3d987d89f9dbc8` +
    `&variables={"id":"${getCookie("ds_user_id")}","include_reel":"true","fetch_mutual":"false","first":"24","after":"${cursor}"}`
  );
}

function unfollowUrl(userId) {
  return `https://www.instagram.com/web/friendships/${userId}/unfollow/`;
}

/* -------------------------------------------------------
| DOM Helpers
-------------------------------------------------------- */

function $(selector) {
  const el = document.querySelector(selector);
  if (!el) throw new Error(`Element not found: ${selector}`);
  return el;
}

/* -------------------------------------------------------
| Core Logic
-------------------------------------------------------- */

async function scanNonFollowers(includeVerified = true) {
  if (isActiveProcess) return;

  isActiveProcess = true;

  const bar = $(".progressbar-bar");
  const text = $(".progressbar-text");
  const count = $(".nonfollower-count");
  const sleepText = $(".sleeping-text");

  let list = [];
  let url =
    `https://www.instagram.com/graphql/query/?query_hash=3dec7e2c57367ef3da3d987d89f9dbc8` +
    `&variables={"id":"${getCookie("ds_user_id")}","include_reel":"true","fetch_mutual":"false","first":"24"}`;

  let total = -1;
  let processed = 0;
  let pageCounter = 0;
  let hasNext = true;

  while (hasNext) {
    let data;

    try {
      data = await fetch(url).then((res) => res.json());
    } catch (e) {
      console.error(e);
      continue;
    }

    if (total === -1) total = data.data.user.edge_follow.count;

    const edges = data.data.user.edge_follow.edges;
    hasNext = data.data.user.edge_follow.page_info.has_next_page;
    url = afterUrl(data.data.user.edge_follow.page_info.end_cursor);

    processed += edges.length;

    edges.forEach((edge) => {
      const user = edge.node;
      if (!includeVerified && user.is_verified) return;
      if (!user.follows_viewer) list.push(user);
    });

    const percent = `${Math.ceil((processed / total) * 100)}%`;
    bar.style.width = percent;
    text.textContent = percent;
    count.textContent = list.length;

    renderResults(list);

    await sleep(Math.random() * 400 + 1000);

    pageCounter++;
    if (pageCounter > 6) {
      sleepText.style.display = "block";
      sleepText.textContent = "Sleeping 10 seconds to avoid temporary block...";
      await sleep(10_000);
      sleepText.style.display = "none";
      pageCounter = 0;
    }
  }

  bar.style.backgroundColor = "#59A942";
  text.textContent = "DONE";
  isActiveProcess = false;

  return list;
}

/* -------------------------------------------------------
| Rendering
-------------------------------------------------------- */

function renderResults(list) {
  list = [...list].sort((a, b) => (a.username > b.username ? 1 : -1));

  const container = $(".results-container");
  container.innerHTML = "";
  $(".toggle-all-checkbox").disabled = false;

  let lastLetter = "";

  list.forEach((user) => {
    const letter = user.username[0].toUpperCase();

    if (letter !== lastLetter) {
      lastLetter = letter;
      container.innerHTML += `<div class="alphabet-character">${letter}</div>`;
    }

    container.innerHTML += `
      <label class="result-item">
        <div class="flex grow align-center">
          <img class="avatar" src="${user.profile_pic_url}">
          <div class="flex column">
            <a class="fs-xlarge" href="/${user.username}" target="_blank">${user.username}</a>
            <span class="fs-medium">${user.full_name}</span>
          </div>
          ${user.is_verified ? '<div class="verified-badge">✓</div>' : ""}
          ${user.is_private ? '<span class="private-indicator">Private</span>' : ""}
        </div>
        <input type="checkbox" class="account-checkbox"
          onchange="toggleUser(${user.id})"
          ${userIdsToUnfollow.includes(parseInt(user.id)) ? "checked" : ""}
        />
      </label>
    `;
  });
}

/* -------------------------------------------------------
| Select Logic
-------------------------------------------------------- */

function toggleUser(userId) {
  if (userIdsToUnfollow.includes(userId)) {
    userIdsToUnfollow = userIdsToUnfollow.filter((id) => id !== userId);
  } else {
    userIdsToUnfollow.push(userId);
  }
  updateSelectedCount();
}

function toggleAll(state = false) {
  document.querySelectorAll(".account-checkbox").forEach((cb) => {
    cb.checked = state;
  });

  userIdsToUnfollow = state ? nonFollowersList.map((u) => u.id) : [];
  updateSelectedCount();
}

function updateSelectedCount() {
  $(".selected-user-count").textContent = `[${userIdsToUnfollow.length}]`;
}

/* -------------------------------------------------------
| Clipboard
-------------------------------------------------------- */

async function copyList() {
  const list = [...nonFollowersList]
    .sort((a, b) => (a.username > b.username ? 1 : -1))
    .map((u) => u.username)
    .join("\n");

  await navigator.clipboard.writeText(list);
  alert("Usernames copied!");
}

/* -------------------------------------------------------
| Unfollow Logic
-------------------------------------------------------- */

async function unfollow() {
  if (isActiveProcess) return;
  if (userIdsToUnfollow.length === 0) return alert("Select at least one user.");

  const token = getCookie("csrftoken");
  if (!token) throw new Error("csrftoken not found");

  isActiveProcess = true;

  const sleepText = $(".sleeping-text");
  const bar = $(".progressbar-bar");
  const text = $(".progressbar-text");
  const listEl = $(".results-container");

  listEl.innerHTML = "";
  bar.style.width = "0%";
  text.textContent = "0%";

  let counter = 0;

  for (const id of userIdsToUnfollow) {
    const user = nonFollowersList.find((u) => u.id === id);

    try {
      await fetch(unfollowUrl(id), {
        method: "POST",
        credentials: "include",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "x-csrftoken": token,
        },
      });

      listEl.innerHTML += `
        <div class="p-medium">
          Unfollowed <b>${user.username}</b>
          <span class="clr-cyan">[${counter + 1}/${userIdsToUnfollow.length}]</span>
        </div>
      `;
    } catch (e) {
      console.error(e);
      listEl.innerHTML += `
        <div class="p-medium clr-red">
          Failed: <b>${user.username}</b>
        </div>
      `;
    }

    counter++;

    const percent = `${Math.ceil((counter / userIdsToUnfollow.length) * 100)}%`;
    bar.style.width = percent;
    text.textContent = percent;

    await sleep(Math.random() * 2000 + 3000);

    if (counter % 5 === 0) {
      sleepText.style.display = "block";
      sleepText.textContent = "Cooling down 5 minutes...";
      await sleep(300_000);
      sleepText.style.display = "none";
    }
  }

  bar.style.backgroundColor = "#59A942";
  text.textContent = "DONE";

  listEl.innerHTML += `<hr><div class="p-medium clr-green">All Done!</div>`;

  isActiveProcess = false;
}

/* -------------------------------------------------------
| Overlay UI Loader
-------------------------------------------------------- */

function initOverlay() {
  document.body.innerHTML = `
    <main class="iu">
      <div class="overlay">
        <header class="top-bar">
          <div class="logo" onclick="location.reload()">
            InstagramUnfollowers – IRANHACKERS
          </div>

          <label>
            <input type="checkbox" class="include-verified-checkbox" checked />
            Include verified
          </label>

          <button class="copy-list" onclick="copyList()" disabled>COPY LIST</button>
          <button class="fs-large clr-red" onclick="unfollow()">UNFOLLOW <span class="selected-user-count">[0]</span></button>

          <input type="checkbox" class="toggle-all-checkbox" onclick="toggleAll(this.checked)" disabled />
        </header>

        <button class="run-scan">RUN</button>
        <div class="results-container"></div>

        <footer class="bottom-bar">
          <div>Non-followers: <span class="nonfollower-count"></span></div>
          <div class="sleeping-text"></div>
          <div class="progressbar-container">
            <div class="progressbar-bar"></div>
            <span class="progressbar-text">0%</span>
          </div>
        </footer>
      </div>
    </main>
  `;

  $(".run-scan").addEventListener("click", async () => {
    $(".run-scan").remove();
    $(".include-verified-checkbox").disabled = true;

    nonFollowersList = await scanNonFollowers(true);

    $(".copy-list").disabled = false;
  });
}

/* -------------------------------------------------------
| Init
-------------------------------------------------------- */

function init() {
  if (location.hostname !== INSTAGRAM_HOSTNAME) {
    alert("This tool works ONLY on https://www.instagram.com/");
    return;
  }

  initOverlay();
}

window.addEventListener("beforeunload", (e) => {
  if (isActiveProcess) {
    e.returnValue = "A process is running. Exit?";
  }
});

init();
