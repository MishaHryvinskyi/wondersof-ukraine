 new Swiper(".gallery__slider", {
    navigation: {
      nextEl: ".gallery__button-next",
      prevEl: ".gallery__button-prev",
    },
    centeredSlides: false,
    initialSlide: 0,
    loop: true,
    loopedSlides: 3,
    spaceBetween: 16,

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      375: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      835: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      1440: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },

    autoplay: {
      delay: 5000,
    },

    speed: 1000,

  });