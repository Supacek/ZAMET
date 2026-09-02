// Slideshow a timer

const slides = CONFIG.slides;
/* ============================================= */
/* PŘEDNAČTENÍ OBRÁZKŮ */
/* ============================================= */

const preloadImages = [];

slides.forEach(slide => {

    if (slide.type === "image") {

        const img = new Image();

        img.src = slide.url;

        preloadImages.push(img);
    }
});

let timer = null;
let slideTimeout = null;
let currentSlide = 0;
const frame =
    document.getElementById("contentFrame");

const image =
    document.getElementById("slideImage");

const timerText =
    document.getElementById("timerText");

const timerCircle =
    document.getElementById("timerCircle");

const circumference = 163;

function showSlide() {

    const slide = slides[currentSlide];

    console.log(
        currentSlide,
        slide.type,
        slide.url,
        slide.duration
    );
    /* ============================================= */
    /* OBRÁZEK */
    /* ============================================= */

    if (slide.type === "image") {

    frame.style.display = "none";

    image.style.display = "block";

    image.src = slide.url;
    }

    /* ============================================= */
    /* IFRAME */
    /* ============================================= */

    else {

        image.style.display = "none";

        frame.style.display = "block";

        frame.src = slide.url;
    }

    /* ============================================= */
    /* ODPOČET */
    /* ============================================= */

    let countdown = slide.duration;

    timerText.textContent = countdown;

    timerCircle.style.strokeDashoffset = 0;

    if (timer) {

        clearInterval(timer);
    }

    timer = setInterval(() => {

        countdown--;

        timerText.textContent = countdown;

        const progress =
            countdown / slide.duration;

        timerCircle.style.strokeDashoffset =
            circumference * (1 - progress);

        if (countdown <= 0) {

            clearInterval(timer);
        }

    }, 1000);

    /* ============================================= */
    /* DALŠÍ SLIDE */
    /* ============================================= */

    if (slideTimeout) {
    clearTimeout(slideTimeout);
}

slideTimeout = setTimeout(() => {

    clearInterval(timer);

    currentSlide++;

    if (currentSlide >= slides.length) {

        currentSlide = 0;
    }

    showSlide();

}, slide.duration * 1000);

}   // <- ukončení funkce showSlide()

/* START */

showSlide();
