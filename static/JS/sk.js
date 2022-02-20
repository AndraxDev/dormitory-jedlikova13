let flag = document.getElementById("flag");
flag.src = "/lang/en.png";

let title_clubs = document.getElementById("title_clubs");
let title_council = document.getElementById("title_council");
let title_council_info = document.getElementById("title_council_info");
let title_council_event = document.getElementById("title_council_event");
let title_pcklub = document.getElementById("title_pcklub");
let title_pcklub_info = document.getElementById("title_pcklub_info");
let title_rules = document.getElementById("title_rules");
let title_registration = document.getElementById("title_registration");
let title_police = document.getElementById("title_police");
let title_info = document.getElementById("title_info");
let title_about = document.getElementById("title_about");
let title_payments = document.getElementById("title_payments");
let title_contacts = document.getElementById("title_contacts");
let title_faq = document.getElementById("title_faq");
let title_news = document.getElementById("title_news");
let title_reservations = document.getElementById("title_reservations");

title_clubs.innerHTML = "Studentske kluby<img class=\"dropdown__image\" id=\"clubs__image\" src=\"/images/home__web__page/dropdown__image.png\" alt=\"\">";
title_council.innerHTML = "Studentska rada<img class=\"dropdown__image\" id=\"council__image\" src=\"/images/home__web__page/dropdown__right.png\" alt=\"\">";
title_council_info.innerHTML = "info";
title_council_event.innerHTML = "events";
title_pcklub.innerHTML = "PCKlub<img id=\"klub__image\" class=\"dropdown__image\" src=\"/images/home__web__page/dropdown__right.png\" alt=\"\">";
title_pcklub_info.innerHTML = "info";
title_rules.innerHTML = "Podmienky pouzitia internatovej siete";
title_registration.innerHTML = "Registracia v lokalnej siete";
title_police.innerHTML = "Studentska policia";
title_info.innerHTML = "info<img id=\"info__image\" class=\"dropdown__image\" src=\"/images/home__web__page/dropdown__image.png\" alt=\"\">";
title_about.innerHTML = "O intraku";
title_payments.innerHTML = "Platby";
title_contacts.innerHTML = "Kontakty";
title_faq.innerHTML = "FAQ";
title_news.innerHTML = "Noviny";
title_reservations.innerHTML = "Rezervacie";

function openHome() {
    window.location.assign("/sk/home/");
}

function openCouncil() {
    window.location.assign("/sk/council/");
}

function openEvents() {
    window.location.assign("/sk/event/");
}

function openPC() {
    window.location.assign("/sk/pcklub/");
}

function openRules() {
    window.location.assign("/sk/rules/");
}

function openRegistration() {
    window.location.assign("/sk/registration/");
}

function openPolice() {
    window.location.assign("/sk/police/");
}

function openAbout() {
    window.location.assign("/sk/about/");
}
function openPayments() {
    window.location.assign("/sk/payments/");
}
function openContacts() {
    window.location.assign("/sk/contact/");
}
function openFAQ() {
    window.location.assign("/sk/faq/");
}
function openNews() {
    window.location.assign("/sk/news/");
}
function openErasmus() {
    window.location.assign("/sk/erasmus/");
}

var path = window.location.pathname;
var page = path.slice(3);
console.log( page );

function switchLanguage() {
    window.location.assign("/en" + page);
}