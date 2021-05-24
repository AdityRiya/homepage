$(function () {
    $(document).scroll(function () {
        var $nav = $(".nav-design");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
  });