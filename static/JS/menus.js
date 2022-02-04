function clubsFunction() {
    document.getElementById("clubs__dropdown").classList.toggle("dropdown__active");
    document.getElementById("info__dropdown").classList.remove("dropdown__active");
    document.getElementById("klub__dropdown").classList.remove("sub-dropdown__active");
    document.getElementById("council__dropdown").classList.remove("sub-dropdown__active");
    document.getElementById("clubs__image").classList.toggle("rotateY");
    document.getElementById("info__image").classList.remove("rotateY");
};

function infoFunction() {
    document.getElementById("info__dropdown").classList.toggle("dropdown__active");
    document.getElementById("clubs__dropdown").classList.remove("dropdown__active");
    document.getElementById("klub__dropdown").classList.remove("sub-dropdown__active");
    document.getElementById("council__dropdown").classList.remove("sub-dropdown__active");
    document.getElementById("info__image").classList.toggle("rotateY");
    document.getElementById("clubs__image").classList.remove("rotateY");
}
function councilFunction() {
    document.getElementById("council__dropdown").classList.toggle("sub-dropdown__active");
    document.getElementById("klub__dropdown").classList.remove("sub-dropdown__active");
    document.getElementById("council__image").classList.toggle("rotateX");
    document.getElementById("klub__image").classList.remove("rotateX");

}
function klubFunction() {
    document.getElementById("klub__dropdown").classList.toggle("sub-dropdown__active");
    document.getElementById("council__dropdown").classList.remove("sub-dropdown__active");
    document.getElementById("klub__image").classList.toggle("rotateX");
    document.getElementById("council__image").classList.remove("rotateX");
};

let faq_panel_1 = document.getElementById("faq1");
let faq_panel_2 = document.getElementById("faq2");

let news_panel_1 = document.getElementById("news_block_1");
let news_panel_2 = document.getElementById("news_block_2");

let rules_panel_1 = document.getElementById("rules1");


/*let acc = document.getElementsByClassName("content__header");
let i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        let panel = this.nextElementSibling;
        if (panel.style.display === "none") {
            panel.style.display = "flex";
        } else {
            panel.style.display = "none";
        }
    })
};
*/

// Council
let inner_council = document.getElementsByClassName("card__inner");
let j;
for (j = 0; j < inner_council.length; j++) {
    inner_council[j].addEventListener("click", function () {
        if (this.style.transform === "") {
            this.style.transform = "rotateY(180deg)";
        } else {
            this.style.transform = "";
        }
    })
};

// burger menu // Не работает на половине устройств
/*const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const header = document.querySelector('.header');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        header.classList.toggle('_active');
    });
}*/

// Burger menu new
function toggleMobile() {
    const iconMenu = document.querySelector('.menu__icon');
    const header = document.querySelector('.header');
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    header.classList.toggle('_active');
}

// close dropdown
window.onclick = function (event) {
    if (!event.target.matches('.nav__click')) {

        let dropdowns = document.getElementsByClassName("dropdown");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('dropdown__active')) {
                openDropdown.classList.remove('dropdown__active');
            }
        }
    }
    if (!event.target.matches('.nav__click')) {

        let dropdowns = document.getElementsByClassName("dropdown__image");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('rotateY')) {
                openDropdown.classList.remove('rotateY');
            }
            if (openDropdown.classList.contains('rotateX')) {
                openDropdown.classList.remove('rotateX');
            }
        }
    }
}

function openfaq1() {
    if (faq_panel_1.style.display === "none") {
        faq_panel_1.style.display = "flex";
    } else {
        faq_panel_1.style.display = "none";
    }
}

function openfaq2() {
    if (faq_panel_2.style.display === "none") {
        faq_panel_2.style.display = "flex";
    } else {
        faq_panel_2.style.display = "none";
    }
}

function news1() {
    if (news_panel_1.style.display === "none") {
        news_panel_1.style.display = "flex";
    } else {
        news_panel_1.style.display = "none";
    }
}

function news2() {
    if (news_panel_2.style.display === "none") {
        news_panel_2.style.display = "flex";
    } else {
        news_panel_2.style.display = "none";
    }
}

function openrules1() {
    if (rules_panel_1.style.display === "none") {
        rules_panel_1.style.display = "flex";
    } else {
        rules_panel_1.style.display = "none";
    }
}

/*
// Kokotina pojebana
let acca = document.getElementsByClassName("content__header");
let k;

for (k = 0; k < acca.length; k++) {
    acc[k].addEventListener("click", function () {
        let panel = this.document.getElementsByClassName("content__body");
        if (panel.style.display === "none") {
            panel.style.display = "flex";
        } else {
            panel.style.display = "none";
        }
    })
};*/