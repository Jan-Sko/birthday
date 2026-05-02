function showScreen(screenId) {
    let screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    setTimeout(() => {
        document.getElementById(screenId).classList.add("active");
    }, 100);
}

// ❤️ srdíčka
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (2 + Math.random() * 3) + "s";

    document.getElementById("hearts-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

// 👉 otevření prvního popupu
function openNextScreen(element) {
    document.getElementById("modal").classList.remove("hidden");

    let terms = document.querySelectorAll(".term");
    terms[0].classList.remove("hidden");
}

// 👉 checkbox logika
function nextStep(index) {
    let terms = document.querySelectorAll(".term");

    if (index + 1 < terms.length) {
        terms[index + 1].classList.remove("hidden");
    } else {
        document.getElementById("confirmBtn").disabled = false;
    }
}

// 👉 modal1 → modal2
function confirmTerms() {
    document.getElementById("modal").classList.add("hidden");
    document.getElementById("modal2").classList.remove("hidden");
}

// 👉 modal2 → modal3
function goToModal3() {
    document.getElementById("modal2").classList.add("hidden");
    document.getElementById("modal3").classList.remove("hidden");
}

// 👉 modal3 → modal4 (TOTO TI CHYBĚLO)
function goToModal4() {
    document.getElementById("modal3").classList.add("hidden");
    document.getElementById("modal4").classList.remove("hidden");
}

// 👉 konec → program
function finishAll() {
    document.getElementById("modal4").classList.add("hidden");
    showScreen('screen2');
}