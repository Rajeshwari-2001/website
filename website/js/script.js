const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
const hiddenElements1 = document.querySelectorAll('.hidden-1');
const hiddenElements2 = document.querySelectorAll('.hidden-l');
const hiddenElements3 = document.querySelectorAll('.hidden-r');
const hiddenElements4 = document.querySelectorAll('.hidden-t');
const hiddenElements5 = document.querySelectorAll('.hidden-b');
const hiddenElements6 = document.querySelectorAll('.hidden-ba');
const hiddenElements7 = document.querySelectorAll('.hidden-bb');
const hiddenElements8 = document.querySelectorAll('.hidden-img');

hiddenElements.forEach((el) => observer.observe(el));
hiddenElements1.forEach((el) => observer.observe(el));
hiddenElements2.forEach((el) => observer.observe(el));
hiddenElements3.forEach((el) => observer.observe(el));
hiddenElements4.forEach((el) => observer.observe(el));
hiddenElements5.forEach((el) => observer.observe(el));
hiddenElements6.forEach((el) => observer.observe(el));
hiddenElements.forEach((el) => observer.observe(el));
hiddenElements.forEach((el) => observer.observe(el));


// icon copy -clients
var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.slide-in-from-top, .slide-in-from-bottom').forEach(element => {
        observer.observe(element);
    });
});