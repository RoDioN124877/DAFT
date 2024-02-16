jQuery(function ($) {
    var $cache = $("#up");
    
    function fixDiv() {
      if ($(window).scrollTop() > 637) {
        $cache.fadeIn(); // Анимация появления
      } else {
        $cache.fadeOut(); // Анимация исчезновения
      }
    }
  
    $(window).scroll(fixDiv);
    fixDiv(); // Вызываем функцию при загрузке страницы
  });
  