(function ($) {
  "use strict";
  $(".sakura-falling").sakura("start", {
    blowAnimations: ["blow-soft-left"], // Horizontal movement animation names
    className: "sakura", // Class name to use
    fallSpeed: 2.5, // Factor for petal fall speed
    maxSize: 12, // Maximum petal size
    minSize: 9, // Minimum petal size
    newOn: 250, // Interval after which a new petal is added
  });
})(jQuery);

var countDownDate = new Date("Apr 13, 2023 12:36:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("timer").innerHTML =
    days +
    (days == 1 ? " day, " : " days, ") +
    hours +
    "h, " +
    minutes +
    "m, " +
    seconds +
    "s";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);
