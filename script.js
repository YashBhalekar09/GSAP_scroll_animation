// $(".cntr-p").scramble(4000, 20, "alphabet", true);
// $(".cntr2-p").scramble(4000, 20, "alphabet", true);

var tl = gsap.timeline();

tl.to(".text-loader", {
  opacity: 1,
  duration: 0.07,
  stagger: {
    each: 0.14, //0.07 to show + 0.07 to show = 0.14
    repeat: 1,
    yoyo: true,
  },
});

tl.to(".loader", {
  display: "none",
});


tl.to(".cntr-p",{
    onStart: function(){
        $(".cntr-p").scramble(2000, 50, "alphabet", true);
    },
},'sameworktoghether')

tl.to(".cntr2-p",{
    onStart: function(){
        $(".cntr2-p").scramble(2000, 50, "alphabet", true);
    },
},'sameworktoghether')

tl.to(".contact",{
    onStart: function(){
        $(".contact").scramble(2000, 50, "alphabet", true);
    },
},'sameworktoghether')

tl.to(".info",{
    onStart: function(){
        $(".info").scramble(2000, 50, "alphabet", true);
    },
},'sameworktoghether')


tl.to(".cntrp",{
    onStart: function(){
        $(".cntrp").scramble(200, 10, "alphabet", true);
    },
},'sameworktoghether')


var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:"#one",
        // markers:true,
        pin:true,
        start:"50% 50%",
        end:"150% 50%",
        scrub:true
    }
});

tl2.to(".flex-p-content",{
    scale:"0.8"
})

.to("#one-text",{
    top:"60%"
})



gsap.timeline({
    scrollTrigger:{
        trigger:"#img-one",
        start:"0% 90%",
        end:"200% 90%",
        scrub:true,
        // markers:true
    }
})

.to("#img-one",{
    backgroundSize:"35%"
})


gsap.timeline({
    scrollTrigger:{
        trigger:".cntrp",
        start:"0% 80%",
        end:"200% 90%",
        scrub:false,
        // markers:true
    }
})

// .to("#img-one",{
//     backgroundSize:"35%"
// })

gsap.timeline({
    scrollTrigger:{
        trigger:"#img-two",
        start:"0% 90%",
        end:"200% 90%",
        scrub:true,
        // markers:true
    }
})

.to("#img-two",{
    backgroundSize:"35%"
})

gsap.timeline({
    scrollTrigger:{
        trigger:"#img-three",
        start:"0% 90%",
        end:"200% 90%",
        scrub:true,
        // markers:true
    }
})

.to("#img-three",{
    backgroundSize:"35%"
})


gsap.timeline({
    scrollTrigger:{
        trigger:"#img-four",
        start:"0% 90%",
        end:"200% 90%",
        scrub:true,
        // markers:true
    }
})

.to("#img-four",{
    backgroundSize:"35%"
})


gsap.timeline({
    scrollTrigger:{
        trigger:"#img-five",
        start:"0% 90%",
        end:"200% 90%",
        scrub:true,
        // markers:true
    }
})

.to("#img-five",{
    backgroundSize:"35%"
})


gsap.timeline({
    scrollTrigger:{
        trigger:"#img-six",
        start:"0% 90%",
        end:"200% 90%",
        scrub:true,
        // markers:true
    }
})

.to("#img-six",{
    backgroundSize:"35%"
})


gsap.timeline({
    scrollTrigger:{
        trigger:"#img-seven",
        start:"0% 90%",
        end:"200% 90%",
        scrub:true,
        // markers:true
    }
})

.to("#img-seven",{
    backgroundSize:"30%"
})


gsap.timeline({
    scrollTrigger:{
        trigger:"#last",
        start:"0% 90%",
        end:"200% 90%",
        scrub:true,
        // markers:true
    }
})

.to(".flex-p-content",{
    scale:"1.2",
})

document.querySelector("#img-one").addEventListener("mouseenter",function(){
    document.querySelector("html").style.backgroundColor="#dfd2be"
})

document.querySelector("#img-one").addEventListener("mouseleave",function(){
    document.querySelector("html").style.backgroundColor="#000"
})





document.querySelector("#img-two").addEventListener("mouseenter",function(){
    document.querySelector("html").style.backgroundColor="#1a354e"
})

document.querySelector("#img-two").addEventListener("mouseleave",function(){
    document.querySelector("html").style.backgroundColor="#000"
})



document.querySelector("#img-three").addEventListener("mouseenter",function(){
    document.querySelector("html").style.backgroundColor="#b14"
})

document.querySelector("#img-three").addEventListener("mouseleave",function(){
    document.querySelector("html").style.backgroundColor="#000"
})




document.querySelector("#img-four").addEventListener("mouseenter",function(){
    document.querySelector("html").style.backgroundColor="#202825"
})

document.querySelector("#img-four").addEventListener("mouseleave",function(){
    document.querySelector("html").style.backgroundColor="#000"
})



document.querySelector("#img-five").addEventListener("mouseenter",function(){
    document.querySelector("html").style.backgroundColor="#973F2B"
})

document.querySelector("#img-five").addEventListener("mouseleave",function(){
    document.querySelector("html").style.backgroundColor="#000"
})




document.querySelector("#img-six").addEventListener("mouseenter",function(){
    document.querySelector("html").style.backgroundColor="#1C1D3E"
})

document.querySelector("#img-six").addEventListener("mouseleave",function(){
    document.querySelector("html").style.backgroundColor="#000"
})



document.querySelector("#img-seven").addEventListener("mouseenter",function(){
    document.querySelector("html").style.backgroundColor="#1A1E22"
})

document.querySelector("#img-seven").addEventListener("mouseleave",function(){
    document.querySelector("html").style.backgroundColor="#000"
})


























//same for above animation

// tl.to(".text-1",{
//     opacity:1,
//     duration:0.07
// });

// tl.to(".text-2",{
//     opacity:1,
//     duration:0.07
// },'a');

// tl.to(".text-1",{
//     opacity:0,
//     duration:0.07
// },'a');

// tl.to(".text-3",{
//     opacity:1,
//     duration:0.07
// },'b');

// tl.to(".text-2",{
//     opacity:0,
//     duration:0.07
// },'b');

// tl.to(".text-4",{
//     opacity:1,
//     duration:0.07
// },'c');

// tl.to(".text-3",{
//     opacity:0,
//     duration:0.07
// },'c');

// tl.to(".text-5",{
//     opacity:1,
//     duration:0.07
// },'d');

// tl.to(".text-4",{
//     opacity:0,
//     duration:0.07
// },'d');

// tl.to(".text-6",{
//     opacity:1,
//     duration:0.07
// },'e');

// tl.to(".text-5",{
//     opacity:0,
//     duration:0.07
// },'e');

// tl.to(".text-45",{
//     opacity:1,
//     duration:0.07
// },'f');

// tl.to(".text-6",{
//     opacity:0,
//     duration:0.07
// },'f');

// tl.to(".text-57",{
//     opacity:1,
//     duration:0.07
// },'g');

// tl.to(".text-45",{
//     opacity:0,
//     duration:0.07
// },'g');

// tl.to(".text-75",{
//     opacity:1,
//     duration:0.07
// },'h');

// tl.to(".text-57",{
//     opacity:0,
//     duration:0.07
// },'h');

// tl.to(".text-98",{
//     opacity:1,
//     duration:0.07
// },'ii');

// tl.to(".text-75",{
//     opacity:0,
//     duration:0.07
// },'i');

// tl.to(".text-100",{
//     opacity:1,
//     duration:0.07
// },'j');

// tl.to(".text-98",{
//     opacity:0,
//     duration:0.07
// },'j');

// tl.to(".loader",{
//     display:"none",
// });


