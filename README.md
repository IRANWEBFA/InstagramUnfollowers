<div align="center">
██████╗ ██╗███╗   ██╗███████╗████████╗ █████╗ ██████╗  ██████╗ ███╗   ██╗
██╔══██╗██║████╗  ██║██╔════╝╚══██╔══╝██╔══██╗██╔══██╗██╔═══██╗████╗  ██║
██████╔╝██║██╔██╗ ██║███████╗   ██║   ███████║██████╔╝██║   ██║██╔██╗ ██║
██╔══██╗██║██║╚██╗██║╚════██║   ██║   ██╔══██║██╔══██╗██║   ██║██║╚██╗██║
██████╔╝██║██║ ╚████║███████║   ██║   ██║  ██║██║  ██║╚██████╔╝██║ ╚████║
╚═════╝ ╚═╝╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝
             Instagram Unfollowers Console Tool
<img src="./assets/banner-gradient.svg" width="100%">
  <svg width="100%" height="170" viewBox="0 0 1500 300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%">
      <stop offset="0%" stop-color="#ff9a00"/>
      <stop offset="25%" stop-color="#ff3d77"/>
      <stop offset="50%" stop-color="#8134af"/>
      <stop offset="75%" stop-color="#515bd4"/>
      <stop offset="100%" stop-color="#2f7afc"/>
    </linearGradient>
  </defs>

  <rect width="1500" height="300" fill="url(#gradient)" rx="18"/>

  <text x="50%" y="52%" font-size="64" font-family="Segoe UI, sans-serif"
        font-weight="900" fill="white" text-anchor="middle">
    INSTAGRAM UNFOLLOWERS
  </text>

  <text x="50%" y="78%" font-size="28" font-family="Segoe UI, sans-serif"
        fill="#f8f8f8" text-anchor="middle">
    A powerful JavaScript Console Tool for scanning & unfollowing safely
  </text>
</svg>

<img src="./assets/logo.svg" width="250" />

# 🚀 Instagram Unfollowers  
### ⚡ Console Tool • Safe Unfollow • Full Scanner • UI Overlay

[🌐 English](#english) | [🇮🇷 فارسی](#فارسی)

<br/>

<img src="https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript&logoColor=000" />
<img src="https://img.shields.io/badge/Runs%20In-DevTools%20Console-blue?style=for-the-badge&logo=google-chrome" />
<img src="https://img.shields.io/badge/Platform-Instagram-ff0069?style=for-the-badge&logo=instagram" />
<img src="https://img.shields.io/badge/Status-Stable-brightgreen?style=for-the-badge" />
<img src="https://img.shields.io/badge/License-MIT-purple?style=for-the-badge" />

<br><br>

</div>

---

# ✨ Features At a Glance

| Feature | Description |
|--------|-------------|
| 🔍 **Full Scan** | Fetches *all your followings* from Instagram GraphQL |
| 🚫 **Detect Non-Followers** | Shows who does **not** follow you back |
| ✔️ **Safe Unfollow Tool** | Random delays, cooldown cycles, anti-block behavior |
| 🧩 **Overlay UI** | Buttons, checkboxes, progress bar, live logs |
| 🖼️ **Profile Info** | Username, Full Name, Avatar, Verified, Private |
| 🔤 **Alphabetical Groups** | Groups users by A–Z |
| 📋 **Copy Usernames** | Export non-followers list |
| 🔧 **Developer-Friendly** | Clean source + minified version available |

---

# English

## 📌 Overview

**Instagram Unfollowers** is a JavaScript-based tool that runs entirely inside your **browser DevTools Console**.  
It scans your followings and identifies accounts that do *not* follow you back, with optional one-click unfollowing.

> ⚠️ *Note:* This tool is not affiliated with Instagram.  
> Use responsibly. Too many actions can cause temporary blocks.

---

## 📁 Project Structure

```
InstagramUnfollowers/
├── src/
│   └── instagram-unfollowers.js        (Editable full source code)
├── dist/
│   └── instagram-unfollowers.min.js    (Minified for console usage)
├── assets/
│   └── logo.svg                        (Project logo)
├── LICENSE
└── README.md
```

---

# 🚀 How to Use

## **Step 1 – Open Instagram**

Go to:

```
https://www.instagram.com/
```

Open **your profile page**.

---

## **Step 2 – Open Developer Console**

| System | Shortcut |
|--------|----------|
| 🪟 Windows / Linux | `F12` or `Ctrl + Shift + I` |
| 🍏 macOS | `Cmd + Option + I` |

Then open the **Console** tab.

---

## **Step 3 – Run the Tool**

1. Open the file:

```
dist/instagram-unfollowers.min.js
```

2. Copy the script  
3. Paste into the browser **Console**  
4. Press **Enter**

A custom UI will appear.

---

## **Step 4 – Scan Followings**

Click the **RUN** button.

The scanner will:

- Fetch your followings via GraphQL API  
- Filter users who don’t follow back  
- Display data live while scanning  
- Show progress percentage  
- Organize accounts alphabetically  

---

## **Step 5 – Unfollow Non-Followers**

- Use checkboxes to select users  
- Use **Select All** to bulk-select  
- Click **UNFOLLOW**

The tool performs:

- Random delays per unfollow  
- Cooldown after every few requests  
- Live log messages  
- Scroll-to-bottom auto updates  
- Progress bar for unfollowing  

---

# 🛠 Development

Want to edit or extend the tool?

### ✔ Edit the clean source:
```
src/instagram-unfollowers.js
```

### ✔ Minify it again  
(using any JS minifier)

### ✔ Replace console version:
```
dist/instagram-unfollowers.min.js
```

---

# 📄 License

This project is licensed under the **MIT License**.  
See the `LICENSE` file for details.

---

<br><br>

# 🇮🇷 فارسی

## 📌 معرفی

**Instagram Unfollowers** یک ابزار جاوااسکریپتی است که داخل **کنسول مرورگر (DevTools Console)** اجرا می‌شود.

این ابزار:

- فالوئینگ‌های شما را کامل اسکن می‌کند  
- کسانی که شما را فالو ندارند پیدا می‌کند  
- امکان انتخاب تکی یا گروهی دارد  
- آنفالو را با تأخیرهای ایمن انجام می‌دهد  
- لیست یوزرنیم‌ها را برای‌تان کپی می‌کند  
- Avatar / Username / Verified / Private را نمایش می‌دهد  
- لیست را بر اساس حروف مرتب می‌کند  

> ⚠️ توجه  
> این ابزار هیچ وابستگی به اینستاگرام ندارد.  
> استفاده زیاد می‌تواند باعث بلاک موقت شود.

---

# 📁 ساختار پروژه

```
InstagramUnfollowers/
├── src/
│   └── instagram-unfollowers.js
├── dist/
│   └── instagram-unfollowers.min.js
├── assets/
│   └── logo.svg
├── LICENSE
└── README.md
```

---

# 🚀 آموزش استفاده

## **مرحله ۱ – ورود به اینستاگرام**

به آدرس زیر بروید:

```
https://www.instagram.com/
```

وارد اکانت شوید → وارد **پروفایل خود** شوید.

---

## **مرحله ۲ – باز کردن کنسول**

| سیستم | میانبر |
|--------|---------|
| ویندوز / لینوکس | `F12` یا `Ctrl + Shift + I` |
| مک | `Cmd + Option + I` |

به تب **Console** بروید.

---

## **مرحله ۳ – اجرای اسکریپت**

1. فایل زیر را باز کنید:

```
dist/instagram-unfollowers.min.js
```

2. کل کد را کپی کنید  
3. داخل Console پیست کنید  
4. Enter بزنید  

یک UI روی صفحه ظاهر می‌شود.

---

## **مرحله ۴ – اسکن**

روی **RUN** کلیک کنید.

اسکریپت:

- فالوئینگ‌ها را از API می‌گیرد  
- Non-followerها را جدا می‌کند  
- مرتب‌سازی الفبایی انجام می‌دهد  
- درصد پیشرفت را نمایش می‌دهد  

---

## **مرحله ۵ – آنفالو**

- هر کاربر را تیک بزنید  
- یا Select All  
- روی **UNFOLLOW** کلیک کنید  

اسکریپت:

- با تأخیر امن آنفالو می‌کند  
- هر چند آنفالو یکبار بیشتر صبر می‌کند  
- Log زنده می‌نویسد  
- Auto-Scroll دارد  

---

# 🛠 توسعه

اگر قصد افزودن قابلیت دارید:

- سورس را ویرایش کنید:

```
src/instagram-unfollowers.js
```

- سپس نسخه مینیفای را جایگزین کنید:

```
dist/instagram-unfollowers.min.js
```

---

# ⚖️ مجوز

این پروژه تحت مجوز **MIT** منتشر شده است.

با احترام ❤️  
تیم IRANHACKERS
