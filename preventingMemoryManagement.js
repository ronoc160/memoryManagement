//limting use of adventListeners

id.addEventlistener('click' , someFunction);

// adding a clean function on a close of a page 

for ( var i=0; i < 50; i++ ) {
  var aLabel = Ti.UI.createLabel({});
  $.parentView.add(aLabel);
}

$.mainWindow.addEventListener('close', function() {
  clean();
});
    
   var clean = function (){
    id.removeEventlistener('click' , someFunction);
    
     // setting the mainParent to a null and removing all children
     
    $.parentView.removeAllChildren();
    $.parentView = null;  // it's never any harm to null it out as well
  }
