// ====== Перевірка дати та автоматичне перенаправлення ======
function checkDateRedirect(date = new Date()) {
    const d = date.getDate();
    const m = date.getMonth();     // 0..11 (0 = січень)
    const weekday = date.getDay(); // 0..6 (0 = неділя, 5 = п’ятниця)

    // 🎃 Якщо сьогодні 31 жовтня — Геловін
    if (m === 9 && d === 31) {
        window.location.href = "https://4spurkee.github.io/Halloween.html/";
        // 🔹 Заміни посилання на свій сайт для Геловіну
        return;
    }

    // ⚠️ Якщо сьогодні П’ятниця 13
    if (weekday === 5 && d === 13) {
        window.location.href = "https://4spurkee.github.io/Friday.html/";
        // 🔹 Заміни посилання на свій сайт для П’ятниці 13
        return;
    }

    // 🔹 В інших випадках — нічого не робимо
}

// Виклик при завантаженні сторінки
checkDateRedirect();

// Перевірка опівночі — якщо сайт відкритий довго, він оновиться після зміни дати
function scheduleMidnightCheck() {
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const ms = tomorrow - now;
    setTimeout(() => {
        checkDateRedirect(new Date());
        scheduleMidnightCheck();
    }, ms + 100);
}
scheduleMidnightCheck();
const ghost = document.querySelector(".ghost-emoji");

function playGhost() {
    ghost.style.transition = "2s ease-out";
    ghost.style.transform = "scale(1) translateY(-160px)";
    ghost.style.opacity = "1";

    setTimeout(() => {
        ghost.style.transition = "2s ease-in";
        ghost.style.transform = "scale(0) translateY(0)";
        ghost.style.opacity = "0";
    }, 2200);
}

setInterval(playGhost, 4500);
playGhost();

