// Generated by CoffeeScript 1.10.0
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

(function(window, $) {
  var ContextMenu, ExpandableBox, loadFailure;
  ExpandableBox = window.o.elements.ExpandableBox;
  loadFailure = window.templates.modalLoadFailure;
  ContextMenu = (function(superClass) {
    extend(ContextMenu, superClass);

    function ContextMenu(id1, activator, parent) {
      var thisMenu;
      this.id = id1;
      this.activator = activator;
      this.parent = parent;
      if (this.activator == null) {
        this.activator = '.o-contextbar-menu';
      }
      ContextMenu.__super__.constructor.call(this, this.id);
      this.children = this.element.find('.o-context-menu-menuitem');
      this.submenuLinks = this.element.find('.o-context-menu-submenu-activator');
      this.element.data('context-menu', this);
      thisMenu = this;
      this.submenuLinks.each((function(_this) {
        return function(idx, item) {
          var elem, id, targetId;
          elem = $(item);
          id = elem.attr('id');
          targetId = elem.attr('href').slice(1);
          elem.data('context-menu', new ContextMenu(targetId, id, _this));
        };
      })(this));
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
          _this.refocusTimeout = setTimeout(function() {
            _this.close();
          }, 100);
        };
      })(this));
      this.children.updownNav();
      this.children.on('click', function(e) {
        var context, elem, menu, url;
        elem = $(this);
        context = elem.data('context');
        if (context === 'direct') {
          return;
        }
        e.preventDefault();
        if (context === 'back') {
          menu = elem.parents('.o-context-menu').data('context-menu');
          menu.close();
          if (menu.parent != null) {
            menu.parent.open();
          }
          return;
        }
        if (context === 'submenu') {
          menu = elem.data('context-menu');
          thisMenu.close();
          menu.open();
          return;
        }
        url = elem.attr('href');
        $.modalContent(url);
      });
    }

    ContextMenu.prototype.collapsible = 'self';

    ContextMenu.prototype.activator = '.o-contextbar-menu';

    ContextMenu.prototype.onOpen = function() {
      this.children.first().focus();
    };

    ContextMenu.prototype.getActivator = function() {
      return $(this.activator);
    };

    ContextMenu.prototype.updateAria = function() {
      this.element.ariaProperty('hidden', this.collapsed);
    };

    return ContextMenu;

  })(ExpandableBox);
  return window["export"]('ContextMenu', 'widgets', ContextMenu);
})(this, this.jQuery);
