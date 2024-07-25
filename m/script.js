
var swiper = new Swiper("#page1 .mySwiper", {
  slidesPerView: 5,
  spaceBetween: 24,
  loop: true,
 
  mousewheel: true,
      keyboard: true,
      grabCursor: true,
  pagination: {
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

gsap.from(".swiper-slide",{
  y:500,
  stagger: 0.1,
})



var img = document.querySelector("#featured")
img.addEventListener("mouseenter", function(){
  crsr.style.opacity= "1"
})
img.addEventListener("mouseleave", function(){
  crsr.style.opacity= "0"
})


function loaderanimation() {
  var tl = gsap.timeline();

  tl.from("#loader h3", {
    x: 120,
    opacity: 0,
    stagger: 0.1,
  });
  tl.to("#loader h3", {
    x: -50,
    opacity: 0,
    stagger: 0.1,
    delay: 0.5,
  });
  tl.to("#loader", {
    opacity: 0,
    display: "none",
  });
  tl.from("#page1-content h1 span", {
    y: 200,
    opacity: 0,
    stagger: 0.1,
    delay: -0.8,
  });
}
loaderanimation();


Shery.makeMagnet("#page1 h1, #page1 i, a" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.textAnimate("#page1 h1 ,#page1 h3 , #page1 p" /* Element to target.*/, {
  //Parameters are optional.
  style: 1,
  y: 10,
  delay: 0.01,
  duration: 0.01,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});


function page1Animation(){
  gsap.to(".image_container", {
    width: "100%",
    ease: "Expo.easeInOut",
    stagger: 2,
    // repeat: -1,  
    
});

gsap.to("#text h1", {
    ease: "Expo.easeInOut",
    stagger: 2,
    top: 0,
    // repeat: -1,  
    
});

gsap.to("#text h1", {
    delay: 2,
    ease: "Expo.easeInOut",
    stagger: 2,
    top: "-100%",
    // repeat: -1,      
});

}
page1Animation()

  var heroPage = document.querySelector("#hero")
  document.querySelector("#hamburgerMenu").addEventListener("click",function(){
    heroPage.style.display= "none"
  })
 document.querySelector("#closeMenuButton").addEventListener("click",function(){
   heroPage.style.display= "block"
 })


function page7Animation() {
  cardSpreadPosition.run({
    element: ".card",
    rangeAngle: 20,
    rangeX: 15,
    rangeY: 10,
    randomOrder: true
  });
}

document.addEventListener("DOMContentLoaded", function() {
  page7Animation();
});



function page9Animation(){
  $(".option").click(function(){
    $(".option").removeClass("active");
    $(this).addClass("active");
    
  });
}
page9Animation()







document.addEventListener("DOMContentLoaded", function () {
  const menuPage = document.querySelector("#menuPage");
  const hamburgerMenu = document.querySelector("#hamburgerMenu");
  const closeButton = document.querySelector("#closeMenuButton");
  const mainPage = document.querySelector(".open");
  
  hamburgerMenu.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default link behavior
      //   menuPage.classList.toggle("open");
      menuAnimation()
      menuPage.style.display =
      menuPage.style.display === "none" || menuPage.style.display === ""
      ? "block"
      : "none";
    });
    
    closeButton.addEventListener("click", function (event) {
      menuPage.style.display= "none"
    });
  });
  
  
function menuAnimation(){
  var tl = gsap.timeline({
    ScrollTrigger:{
      trigger:"#menuPage",
    },
  })
  tl.from("#animatePage",{
    y:2000,
    duration:1.5
    
  })
  tl.from("#menuPage nav",{
    y:40,
    opacity:0,
   })
   tl.from(".mainLinks h1",{
    y:50,
    opacity:0,
    stagger:0.2
   })
}

