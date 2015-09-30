((window, $) ->

  ExpandableBox = window.o.elements.ExpandableBox

  class Statusbar extends ExpandableBox
    constructor: (@id) ->
      super(@id)

      # Stash references to inner
      @activatorButton = @findChild 'hbar-activator'

      # Suppress normal behavior of the activator because the entire hbar is
      # the activator
      @activatorButton.on 'click', (e) ->
        e.preventDefault()

  window.export 'Statusbar', 'widgets', Statusbar

) this, this.jQuery
