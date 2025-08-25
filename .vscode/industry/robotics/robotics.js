let text = document.getElementById("text");
let subtext = document.getElementById("subtext");
let background = document.getElementById("parallax-1");
let earth = document.getElementById("parallax-2");
let robot = document.getElementById("parallax-3");
let parallax4 = document.getElementById("parallax-4");
let parallax5 = document.getElementById("parallax-5");
let parallax6 = document.getElementById("parallax-6");

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    text.style.marginTop = value * 0.5 + "px";
    subtext.style.marginTop = value * -1.2 + "px";
    earth.style.top = value * -0.05 + "px";
    robot.style.top = value * -0.5 + "px";
    parallax4.style.left = value * -0.3 + "px";
    parallax5.style.left = value * -0.3 + "px";
});

window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;

    // Parallax background
    const bg = document.getElementById('parallax-1');
    if (bg) bg.style.transform = `translateY(${scrollY * 0.2}px)`;

    // Main text
    const text = document.getElementById('text');
    if (text) text.style.transform = `translateY(calc(-50% + ${scrollY * 0.12}px))`;

    // Subtext
    const subtext = document.getElementById('subtext');
    if (subtext) subtext.style.transform = `translateY(calc(-50% + ${scrollY * 0.18}px))`;

    // Profile images
    const viraj = document.getElementById('parallax-4');
    if (viraj) viraj.style.transform = `translateY(${scrollY * 0.5}px)`;

    const aman = document.getElementById('parallax-5');
    if (aman) aman.style.transform = `translateY(${scrollY * 0.5}px)`;

    const rover = document.getElementById('parallax-6');
    if (rover) rover.style.transform = `translateY(${scrollY * 0.4}px)`;
});