// =====================================================
// ZAMET NASTENKA- KONFIGURACE
// =====================================================

const CONFIG = {

    // =========================
    // Slideshow
    // =========================
    slides: [
        { url: "losovani1.jpg", type: "image", duration: 35 },
        { url: "DK.jpg", type: "image", duration: 15 },
        { url: "huslesvarec.jpg", type: "image", duration: 15 },
        { url: "kolegwide4.jpg", type: "image", duration: 10 },
        { url: "hotelwide.jpg", type: "image", duration: 10 }
    ],

    // =========================
    // Počasí
    // =========================
    weather: {
        location: "Halenkov 756 03",
        lat: 49.317,
        lon: 18.147,
        apiKey: "097e577eac9403ee6dc032311afb6fe4",
        refresh: 30 * 60 * 1000 // 30 minut
    },

    // =========================
    // Celozávodní dovolená
    // =========================
    vacation: {
        start: "2026-12-28",
        end: "2026-12-31"
    },

    // =========================
    // Spodní lišta
    // =========================
    ticker: {
        phone: "+420 605 524 530",
        website: "karierazamet.cz"
    }

};
