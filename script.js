function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
}
loco()

gsap.to(".text1",{
    opacity:0,
    scrollTrigger:{
        scroller:"#main",
        trigger:".text1",
        scrub:true,
        start:"top 10%",
        end:"top -80%",
        pin:true
    }
    
})
gsap.from(".navbar",{
    y:-200,
    duration:0.5
})
gsap.from(".text1 .text6,.text2,.text3",{
    y:200,
    stagger:0.5,
   
    opacity:0
})
gsap.from("#page2 video",{
    y:200,
    stagger:0.5,
   
    opacity:0
})


function page2(){
    var mouse=document.querySelector(".mousemover")
    var page2=document.querySelector("#page2")
    page2.addEventListener("mouseenter",function(){
        mouse.style.opacity="1"
        mouse.style.scale="1"
    })
    page2.addEventListener("mousemove",function(dets){
      gsap.to(mouse,{
        x:dets.x,
        y:dets.y
      })
    })
    page2.addEventListener("mouseleave",function(){
        mouse.style.opacity="0"
        mouse.style.scale="0"
    })
    
    
}

page2()

function page3(){
    gsap.from("#page3>h1",{
        opacity:0,
        y:200,
        scrollTrigger:{
            scroller:"#main",
            trigger:"#page3",
            scrub:2,
            end:"top 40%"
        }
    })
    gsap.to(".line3",{
        width:'170%',
        scrollTrigger:{
            scroller:"#main",
            trigger:"#page3",
            scrub:2,
            end:"top -20%",
            start:"top 40%"
        }
    })
}
page3()
function page4(){
    gsap.from("#page4>h1",{
        y:200,
        scrollTrigger:{
            scroller:"#main",
            trigger:"#page4",
            start:"top 60%",
            end:"top 40%",

        }
    })
    gsap.from(".lower4>h1",{
        y:200,
        scrollTrigger:{
            scroller:"#main",
            trigger:"#page4",
            start:"top 40%",
            end:"top 30%",

        }
    })
}
page4()
function page5(){
    var circle=document.querySelector(".midtext5")
    var point=document.querySelector(".point5")
    circle.addEventListener("mousemove",function(det){
        gsap.to(point,{
            x:det.x+"",
            y:det.y+"",
        })
    })
}
page5()

function page6(){
    var cursor=document.querySelector(".cursor6")
    var drag=document.querySelector(".lower6")
    drag.addEventListener("mouseenter",function(){
        cursor.style.opacity=1
        cursor.style.scale=1
    })
    drag.addEventListener("mouseleave",function(){
        cursor.style.opacity=0
        cursor.style.scale=0
    })
    drag.addEventListener("mousemove",function(dets){
        gsap.to(cursor,{
            x:dets.x,
            y:dets.y,
        })
    })
}
page6()

function page7(){
    gsap.to("#page7",{
        scrollTrigger:{
            scroller:"#main",
            trigger:"#page7 h1",
            pin:true,
            scrub:true,
            start:"top 5%",
            end:"top -300%",
            // markers:true
        }
    })
}

page7()

function page8(){
    var tl=gsap.timeline({
        scrollTrigger:{
            scroller:"#main",
            trigger:"#page8",
            pin:true,
            scrub:true,
            start:"top 0",
            end:"top -100%",
            // markers:true
        }
    })
    tl.to(".circle8",{
        top:'28%',
        

    })
    .to(".circle8",{
        backgroundColor:"#DBFF00",
        duration:0.1
    },"anime")
    .to("#page8",{
        backgroundColor:"#000",
        duration:0.1
    },"anime")
    .to(".circle8>h1",{
        color:"#000",
        duration:0.1
    },"anime")
    .to(".text8",{
        color:"#fff",
        duration:0.1
    },"anime")
}
page8();