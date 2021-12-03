import "../css/style.css";


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.config({ force3D: true });






/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
					 Constructor 🥼
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/



import { GScroll } from "../../index";

const scroll = new GScroll({
    el: "#GScroll",
    speed: 0.5,
    onUpdate: () => {
        ScrollTrigger.update();
    }
});








/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
					With Gsap Scroll Trigger
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/



const scroller = document.getElementById("GScroll");
ScrollTrigger.defaults({
    scroller: scroller,
});

ScrollTrigger.scrollerProxy(scroller, {
    scrollTop(value) {
        if (arguments.length) {
            scroll.current = -value; // setter
        }
        return -scroll.current; // getter
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
        };
    },
});

window.addEventListener("resize", () => {
    scroll.resize();
});

/* and then, some animations using ScrollTrigger */

let incr = 0;
document.querySelectorAll("h1 span").forEach((lettre) => {
    gsap.to(lettre, {
        y: "-40%",
        opacity: 0,
        ease: "none",
        scrollTrigger: {
            trigger: ".trigger",
            start: "top top-=" + incr,
            end: "+=" + 100,
            scrub: true,
        },
    });

    incr += 16;
});

ScrollTrigger.create({
    trigger: ".trigger",
    start: "top top",
    end: "+=" + 500,
    pin: true,
});

gsap.to("img", {
    x: "0%",
    rotation: 0,
    opacity: 1,
    ease: "none",
    scrollTrigger: {
        trigger: "img",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 0.5,
    },
});

// recalculate the height of the smooth scroll section after the "pin" animation
scroll.resize();

