function loaderAnime(){
    let tl = gsap.timeline();
tl.from("#ld-first h1",{
    y: 200,
    duration: .5,
});

tl.from("#ld-sec h1",{
    y: 200,
    duration: .5,
    stagger: .2,
});

let count = 0;
setInterval(() => {
    if(count <= 100){
        document.getElementById("countDown").innerHTML = count++;
    }
}, 35);

gsap.to(".loader",{
    opacity: 0,
    display: "none",
    duration: 1,
    delay: 3.5,
    ease: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
})

gsap.from("#page1", {
    y: "100%",
    duration: 1,
    delay: 4,
    ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
});



}
loaderAnime() ;