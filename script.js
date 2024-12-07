function togglemenu() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
      x.className += " nav--open";
    } else {
      x.className = "nav";
    }
    var element = document.getElementById("menu-toggle");
    element.classList.toggle("menu-toggle--open");
  }
  
  window.onload = function () {
    setTimeout(function () {
      document.getElementById("fadein").remove();
    }, 1000);
  };
  
  gsap.registerPlugin(ScrollTrigger);
  const lenis = new Lenis({
    duration: 1.5, // Adjust the duration for the smoothness of the scroll
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Default easing function
    smooth: true,
  });
  
  // Function to synchronize Lenis with ScrollTrigger
  function raf(time) {
    lenis.raf(time); // Update Lenis scroll position
    ScrollTrigger.update(); // Refresh ScrollTrigger
    requestAnimationFrame(raf); // Continue the animation frame loop
  }
  
  requestAnimationFrame(raf); // Start the loop
  
  
  let tl = gsap.timeline();
  
  tl.from("h1 span>span", {
    duration: 1,
    y: 150,
    autoAlpha: 0,
    ease: Power3.out,
    stagger: 0.5,
    delay: 1
  }).from(".accordeon-card", {
    y: 400,
    duration: 1.5,
    opacity: 0,
    ease: Power3.out,
    stagger: 0.2
  }, "-=1");
  
  
  gsap.from("#bloc1 h3", {
    scrollTrigger: {
      trigger: "#bloc1 h3",
      toggleActions: "play none none none",
    },
    y: 100,
    ease: Power2.out,
    stagger: 0.2,
    duration: 0.5,
    opacity: 0,
    delay: 0.5
  })
  
  gsap.to("nav", {
    scrollTrigger: {
      trigger: "nav",
      start: "bot top",
      // toggleActions: "restart none reverse none",
      scrub: true,
      markers: true,
    },
    left: 40,
    right: 40,
    top: 40,
    ease: Power3.out,
  })
  
  gsap.utils.toArray(".color-background").forEach((colorBg, i) => {
    ScrollTrigger.create({
      trigger: colorBg,
      start: "top top",
      pin: true,
      scrub: true,
    });
  })
  
  gsap.utils.toArray(".slide-up").forEach((text, i) => {
    gsap.to(text, {
      scrollTrigger: {
        trigger: text,
        start: "bottom 40%",
        scrub: 1,
      },
      y: -80,
    });
  });
  
  
  
  const section_1 = document.getElementById("vertical");
  const col_left = document.querySelector(".col-left");
  const timeln = gsap.timeline({ paused: true });
  
  timeln.fromTo(col_left, {y: 0}, {y: '170vh', duration: 1, ease: 'none'}, 0);
  
  const scroll_1 = ScrollTrigger.create({
      animation: timeln,
      trigger: section_1,
      start: 'top top',
      end: 'bottom center',
      scrub: true
  });
  
  
  
  