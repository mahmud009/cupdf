

(function ($) {
  "use strict";
  $(document).ready(function () {
    


    // Navigation menu toggle function
    function navToggle(){
      let toggler = $("#cu-nav-toggle");
      let nav = $("#main-nav");
      let close_btn = $("#nav-close");
      let nav_item = $("#main-nav .nav-item");
      toggler.on('click', function(e){
        e.preventDefault();
        nav.toggleClass("open");
      })
      close_btn.on("click", function(e){
        e.preventDefault();
        nav.removeClass("open");
      });
      nav_item.on("click", function(e){
        e.preventDefault();
        nav.removeClass("open");
      });
    }
    navToggle();
    //----------------------------------------



  });
})(jQuery);
