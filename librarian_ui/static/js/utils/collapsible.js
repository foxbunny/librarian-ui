// Generated by CoffeeScript 1.10.0
(function(window, $) {
  var CLICKABLE_TARGET, ESC, RETURN, SPACE;
  CLICKABLE_TARGET = 42;
  RETURN = 13;
  SPACE = 32;
  ESC = 27;
  return $.fn.collapsible = function(options) {
    var button, collapseClass, collapsibleArea, collapsibleSection, elem, onclick;
    elem = $(this);
    if (options == null) {
      options = {
        button: '.o-collapsible-section-title',
        collapsibleArea: '.o-collapsible-section-panel',
        collapsibleSection: '.o-collapsible-section',
        collapseClass: 'o-collapsed'
      };
    }
    button = options.button, collapsibleArea = options.collapsibleArea, collapsibleSection = options.collapsibleSection, collapseClass = options.collapseClass;
    elem.find(collapsibleSection).each(function() {
      var panel, section, totalHeight;
      section = $(this);
      panel = section.find(collapsibleArea);
      totalHeight = panel.outerHeight();
      return section.css('max-height', totalHeight + CLICKABLE_TARGET);
    });
    onclick = function(e) {
      var clicked, collapsed, panel, section;
      clicked = $(e.target);
      section = clicked.parents(collapsibleSection);
      panel = section.find(collapsibleArea);
      section.toggleClass(collapseClass);
      collapsed = section.hasClass(collapseClass);
      panel.ariaProperty('hidden', collapsed ? 'true' : 'false');
      return panel.focus();
    };
    elem.on('click', button, onclick);
    elem.on('keydown', button, function(e) {
      var ref;
      if ((ref = e.which) === RETURN || ref === SPACE) {
        e.preventDefault();
        onclick.call(this, e);
      }
    });
    return elem.on('keydown', collapsibleSection, function(e) {
      var panel, section;
      if (e.which !== ESC) {
        return;
      }
      panel = $(e.target);
      section = panel.parents(collapsibleSection);
      button = section.find(button);
      section.addClass(collapseClass);
      panel.ariaProperty('hidden', 'true');
      return button.focus();
    });
  };
})(this, this.jQuery);
