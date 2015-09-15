;(function (window, document, $, undefined) {

  'use strict';

  window.project = (function () {

    var _setMaxHeight = function () {
      var height = $(window).height();
      var wrapper = document.querySelector('.wrapper');
      var listWrapper = wrapper.querySelector('.list-wrapper');
      var articles = listWrapper.querySelectorAll('.list article');

      wrapper.style.width = $(window).width() + 'px';

      height = height - listWrapper.getBoundingClientRect().top;

      articles = [].slice.call(articles);
      articles.forEach(function (article) {
        var cardHeight = 10;
        [].forEach.call(article.querySelectorAll('.card'), function (card) {
          cardHeight += card.getBoundingClientRect().height;
        });

        article.style.height = (height < cardHeight ? height : cardHeight) + 'px';
      });
    };

    return {
      setMaxHeight: _setMaxHeight
    };

  })();

})(window, document, jQuery);