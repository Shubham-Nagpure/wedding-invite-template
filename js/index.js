(function ($) {
  "use strict";
  $(".sakura-falling").sakura("start", {
    blowAnimations: ["blow-soft-right"], // Horizontal movement animation names
    className: "sakura", // Class name to use
    fallSpeed: 2.5, // Factor for petal fall speed
    maxSize: 12, // Maximum petal size
    minSize: 9, // Minimum petal size
    newOn: 250, // Interval after which a new petal is added
  });
})(jQuery);
