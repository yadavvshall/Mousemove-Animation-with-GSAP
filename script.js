window.addEventListener("mousemove", function(dets){
    var rect = document.querySelector(".rect")
    
    var xval = gsap.utils.mapRange(0,window.innerWidth,200+rect.getBoundingClientRect().width/2, window.innerWidth - (200+rect.getBoundingClientRect().width/2), dets.clientX );
    gsap.to(".rect", {
        left: xval,
        ease: "power3",
    });
});