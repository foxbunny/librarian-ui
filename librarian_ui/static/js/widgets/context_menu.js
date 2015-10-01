// Generated by CoffeeScript 1.10.0
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

(function(window, $) {
  var ContextMenu, ExpandableBox;
  ExpandableBox = window.o.elements.ExpandableBox;
  ContextMenu = (function(superClass) {
    extend(ContextMenu, superClass);

    function ContextMenu() {
      return ContextMenu.__super__.constructor.apply(this, arguments);
    }

    ContextMenu.prototype.collapsible = 'self';

    ContextMenu.prototype.activator = '.o-contextbar-menu';

    ContextMenu.prototype.getActivator = function() {
      return $(this.activator);
    };

    return ContextMenu;

  })(ExpandableBox);
  return window["export"]('ContextMenu', 'widgets', ContextMenu);
})(this, this.jQuery);