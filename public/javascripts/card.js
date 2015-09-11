;(function (window, document, undefined) {

  'use strict';

  var card = (function () {

    var _dragElement = null
    var _cards = document.querySelectorAll('.card');

    var _handleDragStart = function (e) {
      _dragElement = this;
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.innerHTML);
    };

    var _handleDragOver = function (e) {
      if (e.preventDefault) {
        e.preventDefault();
      }
      this.classList.add('over');
      e.dataTransfer.dropEffect = 'move';
      return false;
    };

    var _handleDragEnter = function (e) {
      this.classList.add('over');
    };

    var _handleDragLeave = function (e) {
      this.classList.remove('over');
    };

    var _handleDrop = function (e) {
      if (e.stopPropagation) {
        e.stopPropagation();
      }
      if (_dragElement != this) {
        _cardDefault(_dragElement.parentNode);
        _dragElement.remove();
        var clone = this.cloneNode();
        clone.innerHTML = this.innerHTML;
        clone.classList.remove('over');
        this.innerHTML = e.dataTransfer.getData('text/html');
        this.classList.remove('over');
        if (!clone.classList.contains('default')) {
          this.parentNode.insertBefore(clone, this.nextSibling); 
        } else {
          this.classList.remove('default');
        }
        project.init()
      }
      return false;
    }

    var _handleDragEnd = function (e) {
      [].forEach.call(_cards, function (card) {
        this.classList.remove('over');
      });
    }

    var _cardDefault = function (list) {
      if (list && list.querySelectorAll('.card').length === 1) {
        var card = dom.create('div', {
          draggable: true,
          class: 'card thumbnail default'
        });
        list.innerHTML = card.outerHTML;
        _eventCard(list.querySelector('.card'));
      }
    }

    var _eventCards = function () {
      [].forEach.call(_cards, function (card) {
        _eventCard(card);
      });
    };

    var _eventCard = function (card) {
      card.addEventListener('dragstart', _handleDragStart, false);
      card.addEventListener('dragenter', _handleDragEnter, false);
      card.addEventListener('dragover', _handleDragOver, false);
      card.addEventListener('dragleave', _handleDragLeave, false);
      card.addEventListener('drop', _handleDrop, false);
      card.addEventListener('dragend', _handleDragEnd, false);
    }

    return {

      init : function () {
        _eventCards();
      }

    }

  })();

  card.init();

})(window, document);