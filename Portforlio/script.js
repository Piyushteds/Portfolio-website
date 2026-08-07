/*=========================================
        BACK TO TOP BUTTON
=========================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        right: 25,
        behavior: "smooth"

    });

});

/*=========================================
        SMOOTH NAVIGATION
=========================================*/

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/*=========================================
        ACTIVE NAVBAR
=========================================*/

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link=>{

    link.addEventListener("click",function(){

        navLinks.forEach(item=>item.classList.remove("active"));

        this.classList.add("active");

    });

});

/*=========================================
        HERO FADE ANIMATION
=========================================*/

window.addEventListener("load",()=>{

    document.querySelector(".left").classList.add("show");

    document.querySelector(".right").classList.add("show");

});
/*=========================================
        SCROLL REVEAL ANIMATION
=========================================*/

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(
".nav-item,.footer,.left,.right,.image-box"
).forEach((el)=>{

    observer.observe(el);

});


/*=========================================
        PROFILE PARALLAX
=========================================*/

const profile = document.querySelector(".image-box");

document.addEventListener("mousemove",(e)=>{

    let x=(window.innerWidth/2-e.pageX)/35;

    let y=(window.innerHeight/2-e.pageY)/35;

    profile.style.transform=
    `rotateY(${x}deg) rotateX(${-y}deg)`;

});


/*=========================================
        GLOW EFFECT
=========================================*/

document.querySelectorAll(".circle").forEach(circle=>{

    circle.addEventListener("mouseenter",()=>{

        circle.style.transform="scale(1.15)";

    });

    circle.addEventListener("mouseleave",()=>{

        circle.style.transform="scale(1)";

    });

});


/*=========================================
        BUTTON RIPPLE EFFECT
=========================================*/

document.querySelectorAll(".buttons a").forEach(btn=>{

    btn.addEventListener("click",(e)=>{

        let ripple=document.createElement("span");

        ripple.classList.add("ripple");

        let x=e.clientX-e.target.offsetLeft;

        let y=e.clientY-e.target.offsetTop;

        ripple.style.left=x+"px";
        ripple.style.top=y+"px";

        btn.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});


/*=========================================
        FLOATING GLOW
=========================================*/

document.querySelectorAll(".blur").forEach((blur,index)=>{

    let position=0;

    setInterval(()=>{

        position+=0.5;

        blur.style.transform=
        `translateY(${Math.sin(position)*20}px)`;

    },30);

});


/*=========================================
        ACTIVE NAV ON SCROLL
=========================================*/

const sections=document.querySelectorAll("section");
const links=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-120;

        const height=section.clientHeight;

        if(scrollY>=top){

            current=section.getAttribute("id");

        }

    });

    links.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


/*=========================================
        PRELOADER
=========================================*/

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

// connect file
// About
document.getElementById("connectBtn1").addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "aboutpage/about.html";
});

// Contact
document.getElementById("connectBtn2").addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "contact/contact.html";
});

// Projects
document.getElementById("connectBtn3").addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "projects/projects.html";
});

// Skills
document.getElementById("connectBtn4").addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "skills/skills.html";
});

