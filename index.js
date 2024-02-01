// new kursor({
//     type: 5,
//     color: '#000'
// });

var tl = gsap.timeline();

tl.from(".clip-top, .clip-bottom", {
    // delay: 1,
    height: "50vh",
    ease: "power2.inOut"
});

tl.to(".marquee", {
    // delay: 0.75,
    top: "50%",
    ease: "power2.inOut",
});

tl.from(".clip-top .marquee, .clip-bottom .marquee", {
    // delay: 1,
    left: "100%",
    ease: "power1.inOut",
});

tl.from(".clip-center .marquee", {
    // delay: 1,
    left: "-50%",
    ease: "power1.inOut",
});

tl.to(".clip-top", {
    // delay: 6,
    clipPath: "inset(0 0 100% 0)",
    ease: "power2.inOut",
});

tl.to(".clip-bottom", {
    // delay: 6,
    clipPath: "inset(100% 0 0 0)",
    ease: "power2.inOut",
});

tl.to(".clip-top .marquee, .clip-bottom .marquee, .clip-center .marquee span", {
    // delay: 6,
    opacity: 0,
    ease: "power2.inOut",
});

tl.from(".bg-img img", {
    z: 300,
    scale: 0,
    // ease: "power1.inOut"
    // delay: 3,
    // duration:2,
});

tl.from(".nav-items", {
    x: 0,
    duration: 1
});



const blob = document.querySelector("#blob");
const body = document.querySelector("body");

body.addEventListener("mousemove", function (dets) {
  let half = blob.offsetWidth / 2;
  blob.style.left = `${dets.x - half}px`;
  blob.style.top = `${dets.y - half}px`;
});

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
