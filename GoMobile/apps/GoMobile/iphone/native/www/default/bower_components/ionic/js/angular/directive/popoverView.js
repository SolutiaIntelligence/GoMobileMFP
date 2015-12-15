
/* JavaScript content from bower_components/ionic/js/angular/directive/popoverView.js in folder common */
IonicModule
.directive('ionPopoverView', function() {
  return {
    restrict: 'E',
    compile: function(element) {
      element.append(jqLite('<div class="popover-arrow">'));
      element.addClass('popover');
    }
  };
});
