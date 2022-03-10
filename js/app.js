$(".pricing-slide").slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
wow = new WOW({
  boxClass: "wow", // default
  animateClass: "animate__animated", // default
  offset: 0, // default
  mobile: true, // default
  live: true, // default
});
wow.init();
let screenHeight = $(window).height();
console.log(screenHeight);
$(window).scroll(function () {
  let currentPosition = $(this).scrollTop();
  if (currentPosition >= screenHeight - 40) {
    $(".site-nav").addClass("site-nav-scroll");
    $(".top").removeClass("invisible");
  } else {
    $(".site-nav").removeClass("site-nav-scroll");
    (".site-nav-scroll");
    $(".top").addClass("invisible");
  }
});
$(".nav-item").click(function (e) {
  $(".nav-item").removeClass("active");

  var $this = $(this);
  if (!$this.hasClass("active")) {
    $this.addClass("active");
  }
  //e.preventDefault();
});
$(".navbar-toggler").click(function () {
  if ($(".navbar-toggler").attr("aria-expanded") === "true") {
    $(".menu-icon i").addClass("feather-x");
  } else {
    $(".menu-icon i").removeClass("feather-x");
  }
});
// var waypoints = $("#home").waypoint(
//   function (direction) {
//     $(".nav-link[href='#home']")
//       .parent()
//       .addClass("active")
//       .siblings()
//       .removeClass("active");
//   },
//   {
//     offset: "25%",
//   }
// );
// var waypoints = $("#about").waypoint(
//   function (direction) {
//     $(".nav-link[href='#about']")
//       .parent()
//       .addClass("active")
//       .siblings()
//       .removeClass("active");
//   },
//   {
//     offset: "25%",
//   }
// );
// var waypoints = $("#services").waypoint(
//   function (direction) {
//     $(".nav-link[href='#services']")
//       .parent()
//       .addClass("active")
//       .siblings()
//       .removeClass("active");
//   },
//   {
//     offset: "25%",
//   }
// );
// var waypoints = $("#contact").waypoint(
//   function (direction) {
//     $(".nav-link[href='#contact']")
//       .parent()
//       .addClass("active")
//       .siblings()
//       .removeClass("active");
//   },
//   {
//     offset: "25%",
//   }
// );
// var waypoints = $("#pricing").waypoint(
//   function (direction) {
//     $(".nav-link[href='#pricing']")
//       .parent()
//       .addClass("active")
//       .siblings()
//       .removeClass("active");
//   },
//   {
//     offset: "25%",
//   }
// );

function setActive(current) {
  $(`.nav-link[href="#${current}"]`)
    .parent()
    .addClass("active")
    .siblings()
    .removeClass("active");
}

function navScroll() {
  let currentSection = $("section[id]");
  currentSection.waypoint(
    function (direction) {
      if (direction == "down") {
        console.log($(this.element).attr("id"));
        setActive($(this.element).attr("id"));
      }
    },
    { offset: "150px" }
  );
  currentSection.waypoint(
    function (direction) {
      if (direction == "up") {
        console.log($(this.element).attr("id"));
        setActive($(this.element).attr("id"));
      }
    },
    { offset: "-50px" }
  );
}
navScroll();

$(window).on("load", function () {
  $(".loader").fadeOut(500);
  $(this).remove();
});
