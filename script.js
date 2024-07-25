(function () {
  "use strict";

  var isDrawing, lastPoint;
  var container = document.getElementById("js-container"),
    canvas = document.getElementById("js-canvas"),
    ctx = canvas.getContext("2d"),
    image = new Image(),
    brush = new Image();

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  image.src =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA7AAAAKaCAYAAAAH/bUmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAACyUSURBVHhe7d19jGVlneDxw+LwJvgKLm8KNIqNGJFmtgMJBTMLwtjMbKaZKERGTFZQs5rQyz+gwexuYB39Yw1E3cwMugmdNcHZrJhM6Kw78gc2G2cZwWGybBPUdnzhZWnUHZoXm9Fl7+/UfYrTt845t27VrZdf1eeT3PStqnvPfTtVfb73Oee5h3zhvA++XAEAAMAa90+G/wIAAMCaJmABAABIQcACAACQgoAFAAAgBQELAABACgIWAACAFAQsAAAAKQhYAAAAUhCwAAAApCBgAQAASEHAAgAAkIKABQAAIAUBCwAAQAoCFgAAgBQELAAAACkIWAAAAFIQsAAAAKQgYAEAAEhBwAIAAJCCgAUAACAFAQsAAEAKAhYAAIAUBCwAAAApCFgAAABSELAAAACkIGABAABIQcACAACQgoAFAAAgBQELAABACgIWAACAFAQsAAAAKQhYAAAAUhCwAAAApCBgAQAASEHAAgAAkIKABQAAIAUBCwAAQAoCFgAAgBQELAAAACkIWAAAAFIQsAAAAKQgYAEAAEhBwAIAAJCCgAUAACAFAQsAAEAKAhYAAIAUBCwAAAApCFgAAABSELAAAACkIGABAABIQcACAACQgoAFAAAgBQELAABACgIWAACAFAQsAAAAKQhYAAAAUhCwAAAApCBgAQAASEHAAgAAkIKABQAAIAUBCwAAQAoCFgAAgBQELAAAACkIWAAAAFIQsAAAAKQgYAEAAEhBwAIAAJCCgAUAACAFAQsAAEAKAhYAAIAUBCwAAAApCFgAAABSELAAAACkIGABAABIQcACAACQgoAFAAAgBQELAABACgIWAACAFAQsAAAAKQhYAAAAUhCwAAAApCBgAQAASEHAAgAAkIKABQAAIAUBCwAAQAoCFgAAgBQELAAAACkIWAAAAFIQsAAAAKQgYAEAAEhBwAIAAJCCgAUAACAFAQsAAEAKAhYAAIAUBCwAAAApCFgAAABSELAAAACkIGABAABIQcACAACQgoAFAAAgBQELAABACgIWAACAFAQsAAAAKQhYAAAAUhCwAAAApCBgAQAASEHAAgAAkIKABQAAIAUBCwAAQAoCFgAAgBQELAAAACkIWAAAAFIQsAAAAKQgYAEAAEhBwAIAAJCCgAUAACAFAQsAAEAKAhYAAIAUBCwAAAApCFgAAABSELAAAACkIGABAABIQcACAACQgoAFAAAgBQELAABACgIWAACAFAQsAAAAKQhYAAAAUhCwAAAApCBgAQAASEHAAgAAkIKABQAAIAUBCwAAQAoCFgAAgBQELAAAACkIWAAAAFIQsAAAAKQgYAEAAEhBwAIAAJCCgAUAACAFAQsAAEAKAhYAAIAUBCwAAAApCFgAAABSELAAAACkIGABAABIQcACAACQgoAFAAAgBQELAABACgIWAACAFAQsAAAAKQhYAAAAUhCwAAAApCBgAQAASEHAAgAAkIKABQAAIAUBCwAAQAoCFgAAgBQELAAAACkIWAAAAFIQsAAAAKQgYAEAAEhBwAIAAJCCgAUAACAFAQsAAEAKAhYAAIAUBCwAAAApCFgAAABSELAAAACkIGABAABIQcACAACQgoAFAAAgBQELAABACgIWAACAFAQsAAAAKQhYAAAAUhCwAAAApCBgAQAASEHAAgAAkIKABQAAIAUBCwAAQAoCFgAAgBQELAAAACkIWAAAAFIQsAAAAKQgYAEAAEhBwAIAAJCCgAUAACAFAQsAAEAKAhYAAIAUBCwAAAApCFgAAABSELAAAACkIGABAABIQcACAACQgoAFAAAgBQELAABACgIWAACAFAQsAAAAKQhYAAAAUhCwAAAApCBgAQAASEHAAgAAkIKABQAAIAUBCwAAQAoCFgAAgBQELAAAACkIWAAAAFIQsAAAAKQgYAEAAEhBwAIAAJCCgAUAACAFAQsAAEAKAhYAAIAUBCwAAAApCFgAAABSELAAAACkIGABAABIQcACAACQgoAFAAAgBQELAABACgIWAACAFAQsAAAAKQhYAAAAUhCwAAAApCBgAQAASEHAAgAAkIKABQAAIAUBCwAAQAoCFgAAgBQELAAAACkIWAAAAFIQsAAAAKQgYAEAAEhBwAIAAJCCgAUAACAFAQsAAEAKAhYAAIAUBCwAAAApCFgAAABSELAAAACkIGABAABIQcACAACQgoAFAAAgBQELAABACgIWAACAFAQsAAAAKQhYAAAAUhCwAAAApCBgAQAASEHAAgAAkIKABQAAIAUBCwAAQAoCFgAAgBQELAAAACkI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ACAFAQsAAEAKAhYAAIAUBCwAAAApCFgAAABSELAAAACkIGABAABIQcACAACQgoAFAAAgBQELAABACgIWAACAFAQsAAAAKQhYAAAAUhCwAAAApCBgAQAASEHAAgAAkIKABQAAIAUBCwAAQAoCFgAAgBQELAAAACkIWAAAAFIQsAAAAKQgYAEAAEhBwAIAAJCCgAUAACAFAQsAAEAKAhYAAIAUBCwAAAApCFgAAABSELAAAACkIGABAABIQcACAACQgoAFAAAgBQELAABACgIWAACAFAQsAAAAKQhYAAAAUhCwAAAApCBgAQAASEHAAgAAkIKABQAAIAUBCwAAQAoCFgAAgBQELAAAACkIWAAAAFIQsAAAAKQgYAEAAEhBwAIAAJCCgAUAACAFAQsAAEAKAhYAAIAUBCwAAAApCFgAAABSELAAAACkIGABAABIQcACAACQgoAFAAAgBQELAABACgIWAACAFAQsAAAAKQhYAAAAUhCwAAAApCBgAQAASEHAAgAAkIKABQAAIAUBCwAAQAoCFgAAgBQELAAAACkIWAAAAFIQsAAAAKQgYAEAAEhBwAIAAJCCgAUAACAFAQsAAEAKAhYAAIAUBCwAAAApCFgAAABSELAAAACkIGABAABIQcACAACQgoAFAAAgBQELAABACgIWAACAFAQsAAAAKQhYAAAAUhCwAAAApCBgAQAASEHAAgAAkIKABQAAIAUBCwAAQAoCFgAAgBQELAAAACkIWAAAAFIQsAAAAKQgYAEAAEhBwAIAAJCCgAUAACAFAQsAAEAKAhYAAIAUBCwAAAApCFgAAABSELAAAACkIGABAABIQcACAACQgoAFAAAgBQELAABACgIWAACAFAQsAAAAKQhYAAAAUhCwAAAApCBgAQAASEHAAgAAkIKABQAAIAUBCwAAQAoCFgAAgBQELAAAACkIWAAAAFIQsAAAAKQgYAEAAEhBwAIAAJCCgAUAACAFAQsAAEAKAhYAAIAUBCwAAAApCFgAAABSELAAAACkIGABAABIQcACAACQgoAFAAAgBQELAABACgIWAACAFAQsAAAAKQhYAAAAUhCwAAAApCBgAQAASEHAAgAAkIKABQAAIAUBCwAAQAoCFgAAgBQELAAAACkIWAAAAFIQsAAAAKQgYAEAAEhBwAIAAJCCgAUAACAFAQsAAEAKAhYAAIAUBCwAAAApCFgAAABSELAAAACkIGABAABIQcACAACQgoAFAAAgBQELAABACgIWAACAFAQsAAAAKQhYAAAAUhCwAAAApCBgAQAASEHAAgAAkIKABQAAIAUBCwAAQAoCFgAAgBQELAAAACkIWAAAAFIQsAAAAKQgYAEAAEhBwAIAAJCCgAUAACAFAQsAAEAKAhYAAIAUBCwAAAApCFgAAABSELAAAACkIGABAABIQcACAACQgoAFAAAgBQELAABACgIWAACAFAQsAAAAKQhYAAAAUhCwAAAApCBgAQAASEHAAgAAkIKABQAAIAUBCwAAQAoCFgAAgBQELAAAACkIWAAAAFIQsAAAAKQgYAEAAEhBwAIAAJCCgAUAACAFAQsAAEAKAhYAAIAUBCwAAAApCFgAAABSELAAAACkIGABAABIQcACAACQgoAFAAAgBQELAABACgIWAACAFAQsAAAAKQhYAAAAUhCwAAAApCBgAQAASEHAAgAAkIKABQAAIAUBCwAAQAoCFgAAgBQELAAAACkIWAAAAFIQsAAAAKQgYAEAAEhBwAIAAJCCgAUAACAFAQsAAEAKAhYAAIAUBCwAAAApCFgAAABSELAAAACkIGABAABIQcACAACQgoAFAAAgBQELAABACgIWAACAFAQsAAAAKQhYAAAAUhCwAAAApCBgAQAASEHAAgAAkIKABQAAIAUBCwAAQAoCFgAAgBQELAAAACkIWAAAAFIQsAAAAKQgYAEAAEhBwAIAAJCCgAUAACAFAQsAAEAKAhYAAIAUBCwAAAApCFgAAABSELAAAACkIGABAABIQcACAACQgoAFAAAgBQELAABACgIWAACAFAQsAAAAKQhYAAAAUhCwAAAApCBgAQAASEHAAgAAkIKABQAAIAUBCwAAQAoCFgAAgBQELAAAACkIWAAAABKoqv8PbzkRuBgNAR4AAAAASUVORK5CYII=";
  image.onload = function () {
    var imgWidth = canvas.width;
    var imgHeight = canvas.height;
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;
    var ratio = Math.min(canvasWidth / imgWidth, canvasHeight / imgHeight);
    var newWidth = imgWidth * ratio;
    var newHeight = imgHeight * ratio;
    var xOffset = (canvasWidth - newWidth) / 2;
    var yOffset = (canvasHeight - newHeight) / 2;
    ctx.drawImage(image, xOffset, yOffset, newWidth, newHeight);

    document.querySelectorAll(".form")[0].style.visibility = "visible";
  };
  var brushSize = 160;

  brush.src =
    "data:image/png;base64,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";

  canvas.addEventListener("mousedown", handleMouseDown, false);
  canvas.addEventListener("touchstart", handleMouseDown, false);
  canvas.addEventListener("mousemove", handleMouseMove, false);
  canvas.addEventListener("touchmove", handleMouseMove, false);
  canvas.addEventListener("mouseup", handleMouseUp, false);
  canvas.addEventListener("touchend", handleMouseUp, false);

  function distanceBetween(point1, point2) {
    return Math.sqrt(
      Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2)
    );
  }

  function angleBetween(point1, point2) {
    return Math.atan2(point2.x - point1.x, point2.y - point1.y);
  }

  function getFilledInPixels(stride) {
    if (!stride || stride < 1) {
      stride = 1;
    }

    var pixels = ctx.getImageData(0, 0, canvas.width, canvas.height),
      pdata = pixels.data,
      l = pdata.length,
      total = l / stride,
      count = 0;

    for (var i = (count = 0); i < l; i += stride) {
      if (parseInt(pdata[i]) === 0) {
        count++;
      }
    }

    return Math.round((count / total) * 100);
  }

  function getMouse(e, canvas) {
    var rect = canvas.getBoundingClientRect();
    var scaleX = canvas.width / rect.width;
    var scaleY = canvas.height / rect.height;

    var mx = (e.clientX - rect.left) * scaleX;
    var my = (e.clientY - rect.top) * scaleY;

    return { x: mx, y: my };
  }

  function handlePercentage(filledInPixels) {
    filledInPixels = filledInPixels || 0;
    console.log(filledInPixels + "%");
    if (filledInPixels > 50) {
      canvas.parentNode.removeChild(canvas);
    }
  }

  function handleMouseDown(e) {
    isDrawing = true;
    lastPoint = getMouse(e, canvas);
  }

  function handleMouseMove(e) {
    if (!isDrawing) {
      return;
    }

    e.preventDefault();

    var currentPoint = getMouse(e, canvas),
      dist = distanceBetween(lastPoint, currentPoint),
      angle = angleBetween(lastPoint, currentPoint),
      x,
      y;

    for (var i = 0; i < dist; i++) {
      x = lastPoint.x + Math.sin(angle) * i - brushSize / 2;
      y = lastPoint.y + Math.cos(angle) * i - brushSize / 2;
      ctx.globalCompositeOperation = "destination-out";
      ctx.drawImage(brush, x, y, brushSize, brushSize);
    }

    lastPoint = currentPoint;
    handlePercentage(getFilledInPixels(32));
  }

  function handleMouseUp(e) {
    isDrawing = false;
  }
})();

function swiper() {
  var swiper = new Swiper("#page1 .mySwiper", {
    slidesPerView: 5,
    spaceBetween: 24,
    loop: true,
    freeMode: true,
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
  
  gsap.from(".swiper-slide", {
    y: 500,
    stagger: 0.1,
  });
  
  var img = document.querySelector("#featured");
  img.addEventListener("mouseenter", function () {
    crsr.style.opacity = "1";
  });
  img.addEventListener("mouseleave", function () {
    crsr.style.opacity = "0";
  });
  
}
swiper()
 


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

function page1Animation() {
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
page1Animation();
var heroPage = document.querySelector("#hero");
var swiperani = document.querySelector("#featuredswiper")
document.querySelector("#hamburgerMenu").addEventListener("click", function () {
  heroPage.style.display = "none";
  swiperani.style.display = "none";
});
document
  .querySelector("#closeMenuButton")
  .addEventListener("click", function () {
    heroPage.style.display = "block";
    swiperani.style.display = "block";
  });

function page7Animation() {
  cardSpreadPosition.run({
    element: ".card",
    rangeAngle: 20,
    rangeX: 15,
    rangeY: 10,
    randomOrder: true,
  });
}

document.addEventListener("DOMContentLoaded", function () {
  page7Animation();
});

function page9Animation() {
  $(".option").click(function () {
    $(".option").removeClass("active");
    $(this).addClass("active");
  });
}
page9Animation();

document.addEventListener("DOMContentLoaded", function () {
  const menuPage = document.querySelector("#menuPage");
  const hamburgerMenu = document.querySelector("#hamburgerMenu");
  const closeButton = document.querySelector("#closeMenuButton");
  const mainPage = document.querySelector(".open");

  hamburgerMenu.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior
    //   menuPage.classList.toggle("open");
    menuAnimation();
    menuPage.style.display =
      menuPage.style.display === "none" || menuPage.style.display === ""
        ? "block"
        : "none";
  });

  closeButton.addEventListener("click", function (event) {
    menuPage.style.display = "none";
  });
});

function menuAnimation() {
  var tl = gsap.timeline({
    ScrollTrigger: {
      trigger: "#menuPage",
    },
  });
  tl.from("#animatePage", {
    y: 2000,
    duration: 1.5,
  });
  tl.from("#menuPage nav", {
    y: 40,
    opacity: 0,
  });
  tl.from(".mainLinks h1", {
    y: 50,
    opacity: 0,
    stagger: 0.2,
  });
}
