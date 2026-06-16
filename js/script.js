// ===================================
// DARK MODE TOGGLE
// ===================================

const darkToggle = document.querySelector(".dark-toggle");

darkToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const icon = darkToggle.querySelector("i");

    if(document.body.classList.contains("dark")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});

// ===================================
// ACTIVE NAVIGATION LINK
// ===================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href") ===
            `#${current}`
        ){

            link.classList.add("active");

        }

    });

});

// ===================================
// SCROLL REVEAL ANIMATION
// ===================================

const revealElements =
document.querySelectorAll(
    ".section-heading, .about-card, .impact-card, .role-btn, .program-btn, .generated-content, .contact-form"
);

revealElements.forEach(element => {

    element.classList.add("reveal");

});

function revealOnScroll(){

    const windowHeight =
    window.innerHeight;

    revealElements.forEach(element => {

        const elementTop =
        element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){

            element.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

// ===================================
// SMOOTH SCROLL FOR NAV LINKS
// ===================================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ===================================
// HEADER SHADOW ON SCROLL
// ===================================

const header =
document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.15)";

    }else{

        header.style.boxShadow = "none";

    }

});

// ===================================
// HERO IMAGE FLOAT EFFECT
// ===================================

const heroImage =
document.querySelector(".hero-image img");

window.addEventListener("mousemove", (e) => {

    if(!heroImage) return;

    const x =
    (window.innerWidth / 2 - e.pageX) / 50;

    const y =
    (window.innerHeight / 2 - e.pageY) / 50;

    heroImage.style.transform =
    `translate(${x}px, ${y}px)`;

});

// ===================================
// COUNTER ANIMATION
// ===================================

const counters =
document.querySelectorAll(".impact-card h3");

let counterStarted = false;

function animateCounters(){

    if(counterStarted) return;

    const impactSection =
    document.querySelector("#impact");

    const sectionTop =
    impactSection.getBoundingClientRect().top;

    if(sectionTop < window.innerHeight - 100){

        counterStarted = true;

        counters.forEach(counter => {

            const text =
            counter.innerText;

            const target =
            parseInt(
                text.replace(/[^0-9]/g,"")
            );

            let count = 0;

            const speed =
            target / 100;

            const update = () => {

                if(count < target){

                    count += speed;

                    counter.innerText =
                    Math.floor(count) + "+";

                    requestAnimationFrame(update);

                }else{

                    counter.innerText =
                    target.toLocaleString() + "+";

                }

            };

            update();

        });

    }

}

window.addEventListener(
    "scroll",
    animateCounters
);

animateCounters();