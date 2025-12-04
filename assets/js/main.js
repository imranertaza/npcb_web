var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".custom-swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".custom-swiper-button-next",
    prevEl: ".custom-swiper-button-prev",
  },
  speed: 400,              // transition duration in ms (default 300)
  effect: "slide",          // can also try "fade" for smoother crossfade
});

var swiperBg = new Swiper(".mySwiperBg", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".custom-swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".custom-swiper-button-next",
    prevEl: ".custom-swiper-button-prev",
  },
  speed: 600,              // slower transition
  effect: "fade",           // fade looks smoother for background images
  fadeEffect: {
    crossFade: true,
  },
});

var gamingSwiper = new Swiper(".myGamingSwiper", {
  loop: true,
  spaceBetween: 24,
  navigation: {
    nextEl: ".custom-swiper-button-next",
    prevEl: ".custom-swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1, // mobile
    },
    480: {
      slidesPerView: 2, // small tablets
    },
    768: {
      slidesPerView: 3, // tablets
    },
    992: {
      slidesPerView: 4, // desktops
    }
  }
});

var runningEventSwiper = new Swiper(".myRunningEventSwiper", {
  loop: true,
  spaceBetween: 24,
  navigation: {
    nextEl: ".custom-swiper-button-next",
    prevEl: ".custom-swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    }
  }
});

var upcomingEventSwiper = new Swiper(".myUpcomingEventSwiper", {
  loop: true,
  spaceBetween: 24,
  navigation: {
    nextEl: ".custom-swiper-button-next",
    prevEl: ".custom-swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 3,
    },1200: {
      slidesPerView: 4,
    }
  }
});

var latestBlogSwiper = new Swiper(".myLatestBlogSwiper", {
  loop: true,
  spaceBetween: 24,
  navigation: {
    nextEl: ".custom-swiper-button-next",
    prevEl: ".custom-swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 3,
    }
  }
});
