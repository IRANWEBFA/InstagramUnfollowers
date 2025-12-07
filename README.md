<div align="center">

# Instagram Unfollowers – Console Tool  
### Scan your followings & unfollow non-followers directly from the browser console

**English | [فارسی](#فارسی)**

<br>

<img src="./assets/logo.svg" width="360" alt="Instagram Unfollowers Logo">

<br><br>

![Made with JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-f7df1e?logo=javascript&logoColor=000&labelColor=f7df1e)
![Console Tool](https://img.shields.io/badge/Target-DevTools%20Console-orange)
![Status](https://img.shields.io/badge/Status-Experimental-critical)
![License](https://img.shields.io/badge/License-MIT-blue)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)

</div>

---

# English

## 📌 Overview

This project is a fully client-side JavaScript tool that runs **inside the browser DevTools Console** on Instagram.

It helps you:

- Scan your **followings** list
- Detect users who **do not follow you back**
- Select and **unfollow** them with delays
- Copy the list of usernames to clipboard
- Filter out **verified** accounts
- Reduce the chance of **temporary blocks** with smart sleeps

> ⚠️ Disclaimer  
> This project is for **educational purposes** only and is not affiliated with Instagram.  
> Excessive use may cause temporary action blocks or restrictions. Use at your own risk.

---

## 📂 Project Structure

```text
instagram-unfollowers-console/
├─ src/
│  └─ instagram-unfollowers.js        # Clean readable source version
├─ dist/
│  └─ instagram-unfollowers.min.js    # Minified version for console (recommended)
├─ assets/
│  ├─ logo.svg                        # Project logo
│  └─ screenshot-ui.png               # Screenshot of the overlay UI (optional)
├─ CONTRIBUTING.md
├─ LICENSE
└─ README.md

src/instagram-unfollowers.js → main source file (well-formatted, commented)

dist/instagram-unfollowers.min.js → minified version for copy–paste into console

🚀 How to Use (Step-by-Step)
1️⃣ Login to Instagram

Open:

https://www.instagram.com/


Log into your account and go to your own profile page.

2️⃣ Open DevTools Console

Windows / Linux: F12 or Ctrl + Shift + I

macOS: Cmd + Option + I

Then open the Console tab.

3️⃣ Run the Script

Open the file:

dist/instagram-unfollowers.min.js


Copy its full content

Paste into the Console

Press Enter

Now a custom overlay UI will appear on top of Instagram.

If you want to tweak or improve the logic, you can instead run the source version from:

src/instagram-unfollowers.js

4️⃣ Scan Your Followings

In the overlay UI:

Click the RUN button

The tool will start fetching your followings using Instagram’s web GraphQL API

Wait until the progress bar reaches 100% and the status shows DONE

During this process you will see:

Current progress in %

Number of detected non-followers

Grouped alphabetical list of accounts

5️⃣ Unfollow Non-Followers

After the scan is complete:

Use the checkboxes to select accounts

You can use Select All (top-right checkbox)

Or manually pick accounts you want to unfollow

Click the UNFOLLOW button

The tool will:

Send unfollow requests one by one

Show a live log: Unfollowed username [x/total]

Insert random delays between requests

Pause longer every few unfollows to reduce risk of temporary blocks

🧠 Features

🔹 Runs fully in your browser (no server, no login sharing)

🔹 Overlay UI with:

Avatar, username, full name

Verified badge

Private account indicator

Alphabetical grouping (A, B, C, …)

🔹 Include verified toggle

🔹 COPY LIST button to copy usernames of non-followers

🔹 Smart random delays to avoid spam-like behavior

🔹 Progress bars for both scanning and unfollowing

🔹 Basic error handling + console logs for debugging

⚠️ Notes & Limitations

Works only on:

www.instagram.com


Avoid:

Unfollowing too many users in a single session

Running the script repeatedly in a very short time

This project might break if Instagram changes:

Its GraphQL endpoints

Its HTML structure

Or security / anti-bot rules

🛠 Development

If you want to contribute or customize:

Edit the main source file:

src/instagram-unfollowers.js


Optionally re-minify it using your preferred JavaScript minifier

Replace:

dist/instagram-unfollowers.min.js


Pull requests are welcome – improvements to:

UI/UX

Error handling

Rate-limiting strategy

Internationalization (more languages)

are highly appreciated.

📜 License

This project is licensed under the MIT License.
See the LICENSE
 file for details.

فارسی
<div dir="rtl">
📌 معرفی

این پروژه یک اسکریپت جاوااسکریپت است که داخل کنسول مرورگر (DevTools Console) روی سایت اینستاگرام اجرا می‌شود و به شما کمک می‌کند:

فالوئینگ‌های خودتان را اسکن کنید

کسانی که شما را فالو ندارند پیدا کنید (Non-followers)

آن‌ها را به صورت انتخابی یا گروهی آنفالو کنید

لیست یوزرنیم‌ها را در کلیپ‌بورد کپی کنید

اکانت‌های وریفای‌شده (تیک آبی) را فیلتر کنید

با تأخیرهای هوشمند، احتمال بلاک موقت را کمتر کنید

⚠️ هشدار
این پروژه فقط برای مقاصد آموزشی ارائه شده است و هیچ وابستگی رسمی با اینستاگرام ندارد.
استفاده زیاد و افراطی می‌تواند باعث اکشن بلاک یا محدودیت روی اکانت شما شود.
مسئولیت استفاده کاملًا با خود شماست.

📂 ساختار پروژه
instagram-unfollowers-console/
├─ src/
│  └─ instagram-unfollowers.js        # نسخه تمیز و قابل توسعه
├─ dist/
│  └─ instagram-unfollowers.min.js    # نسخه مینیفای مخصوص اجرای سریع در کنسول
├─ assets/
│  ├─ logo.svg                        # لوگوی پروژه
│  └─ screenshot-ui.png               # اسکرین‌شات از UI (در صورت تمایل)
├─ CONTRIBUTING.md
├─ LICENSE
└─ README.md


فایل src/instagram-unfollowers.js برای برنامه‌نویسی، تغییر و افزودن قابلیت‌هاست.

فایل dist/instagram-unfollowers.min.js برای کپی‌کردن و اجرای مستقیم در کنسول پیشنهاد می‌شود.

🚀 آموزش استفاده (گام به گام)
۱️⃣ ورود به اینستاگرام

با مرورگر (ترجیحاً دسکتاپ / لپ‌تاپ) وارد سایت زیر شوید:

https://www.instagram.com/


وارد اکانت شوید و به صفحه پروفایل خودتان بروید.

۲️⃣ باز کردن کنسول (DevTools Console)

ویندوز / لینوکس: دکمه F12 یا ترکیب Ctrl + Shift + I

مک: ترکیب Cmd + Option + I

بعد از باز شدن DevTools، روی تب Console کلیک کنید.

۳️⃣ اجرای اسکریپت

۱. از داخل ریپو، فایل زیر را باز کنید:

dist/instagram-unfollowers.min.js


۲. کل محتوا را کپی کنید
۳. داخل تب Console پیست کنید
۴. کلید Enter را بزنید

حالا یک UI (پنل) روی صفحه اینستاگرام ظاهر می‌شود.

در صورت نیاز به توسعه و فهم بهتر کد، می‌توانید به جای نسخه مینیفای، نسخه‌ی تمیز را از این مسیر اجرا/مطالعه کنید:

src/instagram-unfollowers.js

۴️⃣ شروع اسکن

داخل UI نمایش داده‌شده:

روی دکمه RUN کلیک کنید.

اسکریپت شروع می‌کند به گرفتن لیست فالوئینگ‌ها از API وب اینستاگرام.

تا وقتی که درصد پیشرفت به ۱۰۰٪ برسد و وضعیت DONE نمایش داده شود صبر کنید.

در حین اسکن:

تعداد Non-followerها آپدیت می‌شود

لیست بر اساس حروف الفبا گروه‌بندی می‌شود (A, B, C, …)

می‌توانید به صورت زنده نتیجه را ببینید

۵️⃣ انتخاب و آنفالو کردن

بعد از تکمیل اسکن:

می‌توانید با تیک‌ زدن کنار هر اکانت، آن را انتخاب کنید

می‌توانید از چک‌باکس بالای صفحه برای انتخاب همه استفاده کنید

سپس روی دکمه UNFOLLOW کلیک کنید

اسکریپت:

یوزرهای انتخاب‌شده را یکی‌یکی آنفالو می‌کند

بعد از هر درخواست، پیام وضعیت مانند
Unfollowed username [3/20]
نشان می‌دهد

بین درخواست‌ها به صورت رندوم Sleep می‌کند

هر چند درخواست، چند دقیقه مکث می‌کند تا ریسک بلاک شدن کمتر شود

🧠 امکانات

اجرای کامل در مرورگر شما (بدون نیاز به سرور یا لاگین خارجی)

نمایش:

عکس پروفایل

یوزرنیم و نام کامل

نشان Verified

وضعیت Private بودن پیج

گروه‌بندی لیست بر اساس اولین حرف یوزرنیم

گزینه Include verified برای حذف/شامل کردن اکانت‌های وریفای‌شده

دکمه COPY LIST برای کپی یوزرنیم‌ها در کلیپ‌بورد

نمایش درصد پیشرفت اسکن و آنفالو

پیام‌های هشدار برای جلوگیری از اشتباه و بسته شدن ناگهانی تب

⚠️ نکات و محدودیت‌ها

این ابزار فقط روی دامنه زیر کار می‌کند:

www.instagram.com


توصیه می‌شود:

در هر نوبت، تعداد خیلی زیادی اکانت را آنفالو نکنید

بین هر سری آنفالو چند دقیقه فاصله بگذارید

این ابزار ممکن است در آینده، در صورت تغییر ساختار یا API اینستاگرام، نیاز به آپدیت داشته باشد.

🛠 توسعه و مشارکت

برای تغییر منطق یا ظاهر، فایل زیر را ویرایش کنید:

src/instagram-unfollowers.js


سپس، در صورت نیاز، خروجی را مینیفای کرده و جایگزین فایل زیر کنید:

dist/instagram-unfollowers.min.js


اگر قصد مشارکت دارید:

Pull Request بفرستید

می‌توانید:

UI را بهتر کنید

هندل ارورها را قوی‌تر کنید

تنظیمات Delay را قابل شخصی‌سازی کنید

ترجمه زبان‌های دیگر اضافه کنید

دیسکلیمر

این پروژه فقط برای اهداف آموزشی ارائه می‌شود.
هرگونه استفاده عملی از آن، با مسئولیت خود کاربر است.
این پروژه هیچ ارتباط رسمی، تأیید یا اسپانسری از طرف Instagram ندارد.

</div> ```

