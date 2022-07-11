let flag = document.getElementById("flag");
flag.src = "/lang/sk.png";

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
let title_cinema = document.getElementById("title_cinema");

title_clubs.innerHTML = "Student clubs<img class=\"dropdown__image\" id=\"clubs__image\" src=\"/images/home__web__page/dropdown__image.png\" alt=\"\">";
title_council.innerHTML = "Student council<img class=\"dropdown__image\" id=\"council__image\" src=\"/images/home__web__page/dropdown__right.png\" alt=\"\">";
title_council_info.innerHTML = "Info";
title_council_event.innerHTML = "Events";
title_pcklub.innerHTML = "PCKlub<img id=\"klub__image\" class=\"dropdown__image\" src=\"/images/home__web__page/dropdown__right.png\" alt=\"\">";
title_pcklub_info.innerHTML = "Info";
title_rules.innerHTML = "Operating rules of the network";
title_registration.innerHTML = "Registrations in the local network";
title_police.innerHTML = "Student police";
title_info.innerHTML = "Info<img id=\"info__image\" class=\"dropdown__image\" src=\"/images/home__web__page/dropdown__image.png\" alt=\"\">";
title_about.innerHTML = "About hostel";
title_payments.innerHTML = "Payments";
title_contacts.innerHTML = "Contacts";
title_faq.innerHTML = "FAQ";
title_news.innerHTML = "News";
title_reservations.innerHTML = "Reservations";
title_cinema.innerHTML = "Cinema";

function openHome() {
    window.location.assign("/en/home/");
}

function openCouncil() {
    window.location.assign("/en/council/");
}

function openEvents() {
    window.location.assign("/en/event/");
}

function openPC() {
    window.location.assign("/en/pcklub/");
}

function openRules() {
    window.location.assign("/en/rules/");
}

function openRegistration() {
    window.location.assign("/en/registration/");
}

function openPolice() {
    window.location.assign("/en/police/");
}

function openAbout() {
    window.location.assign("/en/about/");
}
function openPayments() {
    window.location.assign("/en/payments/");
}
function openContacts() {
    window.location.assign("/en/contact/");
}
function openFAQ() {
    window.location.assign("/en/faq/");
}
function openNews() {
    window.location.assign("/en/news/");
}
function openErasmus() {
    window.location.assign("/en/erasmus/");
}

function openCinema() {
    window.location.assign("/en/cinema/");
}

var path = window.location.pathname;
var page = path.slice(3);
console.log( page );

function switchLanguage() {
    window.location.assign("/sk" + page);
}