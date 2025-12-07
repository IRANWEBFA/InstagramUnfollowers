# Instagram Unfollowers (Console Tool)

[English](#english) | [فارسی](#فارسی)

---

# English

## Overview

**Instagram Unfollowers** is a JavaScript tool that runs inside your **browser DevTools Console** on the Instagram website.

It allows you to:

- Scan your **followings list**
- Detect users who **do not follow you back**
- Select accounts to unfollow (or select all)
- Unfollow them safely with delays
- Copy non-followers usernames to clipboard

>⚠️ **Disclaimer:**  
>This tool is for educational purposes only and is not affiliated with Instagram.  
>Excessive usage may cause temporary blocks. Use at your own risk.

---

## Project Structure

```
InstagramUnfollowers/
├── src/
│   └── instagram-unfollowers.js        (Clean readable source)
├── dist/
│   └── instagram-unfollowers.min.js    (Minified script for console)
├── assets/
│   └── logo.svg                         (Project logo)
├── LICENSE
└── README.md
```

- `src/instagram-unfollowers.js` → The editable, clean source code  
- `dist/instagram-unfollowers.min.js` → The version you copy into Instagram Console  

---

## How to Use

### 1. Open Instagram

1. Go to the site:

   ```
   https://www.instagram.com/
   ```

2. Login and open **your profile page**.

---

### 2. Open DevTools Console

- **Windows/Linux:** `F12` or `Ctrl + Shift + I`  
- **Mac:** `Cmd + Option + I`

Then open the **Console** tab.

---

### 3. Run the Script

1. Open the file:

   ```
   dist/instagram-unfollowers.min.js
   ```

2. Copy **all** of its content  
3. Paste it in the Instagram **Console**  
4. Press **Enter**

A UI overlay will appear on the page.

---

### 4. Scan Followings

Inside the overlay:

- Click **RUN**
- Wait until:
  - Progress reaches **100%**
  - Status shows **DONE**

You will see:

- Number of non-followers
- Accounts sorted alphabetically (A, B, C…)
- Avatar, username, full name
- Verified/Private indicators

---

### 5. Unfollow Users

- Select accounts via checkboxes  
- OR use **Select All**
- Click **UNFOLLOW**

The tool will:

- Unfollow accounts one by one
- Show logs like:

  ```
  Unfollowed username [3/20]
  ```

- Add random delays between actions  
- Occasionally sleep longer to prevent blocks  

---

## Features

- Fully client-side (no server, no login sharing)
- Overlay UI on top of Instagram
- Verified filter
- Private account indicator
- Alphabetical grouping
- Copy usernames to clipboard
- Progress bars for scanning + unfollowing
- Error handling and console logs

---

## Development

To modify the tool:

1. Edit the source:

   ```
   src/instagram-unfollowers.js
   ```

2. Minify the file (using any online JS minifier)
3. Replace:

   ```
   dist/instagram-unfollowers.min.js
   ```

---

## License

This project is under the **MIT License**.  
See the `LICENSE` file for more details.

---

# فارسی

## معرفی

**Instagram Unfollowers** یک اسکریپت جاوااسکریپت است که داخل **کنسول مرورگر (DevTools Console)** روی سایت اینستاگرام اجرا می‌شود.

قابلیت‌های ابزار:

- اسکن لیست فالوئینگ‌ها  
- پیدا کردن کسانی که شما را فالو ندارند  
- انتخاب تکی یا گروهی برای آنفالو  
- انجام آنفالو با تأخیرهای امن  
- کپی‌کردن لیست یوزرنیم‌ها  
- نمایش Verified و Private  

>⚠️ **هشدار:**  
>این ابزار هیچ وابستگی رسمی به اینستاگرام ندارد.  
>استفاده‌ی زیاد می‌تواند باعث بلاک موقت شود. مسئولیت استفاده با کاربر است.

---

## ساختار پروژه

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

## آموزش استفاده

### ۱. ورود به اینستاگرام

1. وارد سایت شوید:

   ```
   https://www.instagram.com/
   ```

2. لاگین کرده و وارد **پروفایل خود شوید**

---

### ۲. باز کردن کنسول

- ویندوز/لینوکس: `F12` یا `Ctrl + Shift + I`  
- مک: `Cmd + Option + I`

سپس وارد تب **Console** شوید.

---

### ۳. اجرای اسکریپت

1. فایل زیر را باز کنید:

   ```
   dist/instagram-unfollowers.min.js
   ```

2. کل کد را کپی کنید  
3. در **Console** پیست کنید  
4. Enter بزنید

یک پنل (UI) روی سایت ظاهر می‌شود.

---

### ۴. اسکن فالوئینگ‌ها

- روی **RUN** کلیک کنید  
- صبر کنید تا درصد به **۱۰۰٪** برسد  
- وضعیت **DONE** شود  

در حین اسکن:

- تعداد Non-follower  
- لیست مرتب‌شده بر اساس حروف  
- عکس پروفایل + یوزرنیم  
- Private / Verified  

نشان داده می‌شود.

---

### ۵. آنفالو کردن

- هر اکانت را تیک بزنید  
- یا از **Select All** استفاده کنید  
- دکمه **UNFOLLOW** را بزنید  

اسکریپت:

- تک‌تک آنفالو می‌کند  
- وضعیت را نمایش می‌دهد  
- بین درخواست‌ها تأخیر می‌گذارد  
- هر چند درخواست یک‌بار بیشتر صبر می‌کند  

---

## امکانات

- اجرا فقط در مرورگر شما  
- بدون نیاز به هیچ افزونه یا سرور  
- کاملاً امن از نظر login  
- مرتب‌سازی الفبایی  
- کپی لیست یوزرنیم‌ها  
- نمایش پیشرفت  
- نمایش ارورها  

---

## توسعه

برای تغییر ابزار:

```
src/instagram-unfollowers.js
```

برای نسخه کنسولی (مینیفای):

```
dist/instagram-unfollowers.min.js
```

---

## مجوز

این پروژه تحت مجوز **MIT** منتشر شده است.  
فایل `LICENSE` را ببینید.
