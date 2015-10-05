// Generated by CoffeeScript 1.10.0
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

(function(window, $) {
  var ContextMenu, ExpandableBox;
  ExpandableBox = window.o.elements.ExpandableBox;
  ContextMenu = (function(superClass) {
    extend(ContextMenu, superClass);

    function ContextMenu(id) {
      this.id = id;
      ContextMenu.__super__.constructor.call(this, this.id);
      this.children = $('.o-context-menu-menuitem');
      this.refocusTimeout = null;
      this.children.on('focus', (function(_this) {
        return function() {
          if (_this.refocusTimeout != null) {
            clearTimeout(_this.refocusTimeout);
          }
          if (_this.collapsed) {
            _this.open();
          }
        };
      })(this));
      this.children.on('blur', (function(_this) {
        return function() {
          return _this.refocusTimeout = setTimeout(function() {
            _this.close();
          }, 100);
        };
      })(this));
      this.children.updownNav();
      this.children.on('click', function(e) {
        var elem, url;
        e.preventDefault();
        elem = $(this);
        url = elem.attr('href');
        return $.openModal(url);
      });
    }

    ContextMenu.prototype.collapsible = 'self';

    ContextMenu.prototype.activator = '.o-contextbar-menu';

    ContextMenu.prototype.onOpen = function() {};

    ContextMenu.prototype.getActivator = function() {
      return $(this.activator);
    };

    ContextMenu.prototype.updateAria = function() {
      return this.element.ariaProperty('hidden', this.collapsed);
    };

    return ContextMenu;

  })(ExpandableBox);
  return window["export"]('ContextMenu', 'widgets', ContextMenu);
})(this, this.jQuery);
