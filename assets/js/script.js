$(document).ready(function() {
  $(".header-bot").hover(
    function() {
      $(this).fadeOut(100, function() {
        $(this)
          .css({
            background: "#2C3E50"
          })
          .fadeIn(100);
        $(this)
          .children()
          .children()
          .css({
            color: "#fff"
          })
          .fadeIn(100);
      });
    },
    function() {
      $(this).fadeOut(100, function() {
        $(this)
          .css({
            background: "none"
          })
          .fadeIn(100);
        $(this)
          .children()
          .children()
          .css({
            color: "#444"
          })
          .fadeIn(100);
      });
    }
  );
});
