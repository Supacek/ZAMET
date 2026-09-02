// Datum, svátky a dovolená

/* ===================================================== */

const today = new Date();

document.getElementById("date").innerHTML =

    today.toLocaleDateString('cs-CZ', {

        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

/* ===================================================== */
/* KLÍČ DATA */
/* ===================================================== */

const key =

    today.getDate() + "-" + (today.getMonth() + 1);

/* ===================================================== */
/* ČESKÝ SVÁTEK */
/* ===================================================== */

document.getElementById("nameday").innerHTML =

    namedays[key] || "—";

/* ===================================================== */
/* UKRAJINSKÝ SVÁTEK */
/* ===================================================== */

document.getElementById("ua-nameday").innerHTML =

    uaNamedays[key] || "—";

/* ===================================================== */
/* STÁTNÍ SVÁTKY */
/* ===================================================== */

if(holidays[key]) {

    document.getElementById("holiday-title").innerHTML =

        "Dnes je státní svátek";

    document.getElementById("holiday").innerHTML =

        holidays[key];

} else {

    let nearestDate = "";
    let nearestHoliday = "";

    for(const date in holidays) {

        const parts = date.split("-");

        const holidayDate = new Date(

            today.getFullYear(),

            parts[1] - 1,

            parts[0]
        );

        if(holidayDate >= today) {

            nearestDate =

                holidayDate.toLocaleDateString('cs-CZ', {

                    day: 'numeric',
                    month: 'long'
                });

            nearestHoliday = holidays[date];

            break;
        }
    }

    document.getElementById("holiday-title").innerHTML =

        "Nejbližší státní svátek";

    document.getElementById("holiday").innerHTML =

        nearestDate + "<br>" + nearestHoliday;
}

/* ===================================================== */
/* ODPOČET DO VÁNOC */
/* ===================================================== */

const christmas = new Date(

    today.getFullYear(),

    11,

    24
);

const christmasDiff = christmas - today;

const christmasDays = Math.ceil(

    christmasDiff / (1000 * 60 * 60 * 24)
);

document.getElementById("countdown").innerHTML =

    christmasDays + " dní";

/* ===================================================== */
/* CELOZÁVODNÍ DOVOLENÁ */
/* ===================================================== */

const vacationStart = new Date(

    2026,
    11,
    28
);

const vacationEnd = new Date(

    2026,
    11,
    31
);

const vacationDiff =

    vacationStart - today;

const vacationDays = Math.ceil(

    vacationDiff / (1000 * 60 * 60 * 24)
);

document.getElementById("vacation").innerHTML =

    "28.12.2026 → 31.12.2026" +

    "<br>za " +

    vacationDays +

    " dní";