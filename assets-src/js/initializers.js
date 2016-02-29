// INITIALIZERS


// init functions searching data attributes in dom nodes

module.exports = function() {


  // ---------- Controls --------------------------
  var controls = require('./controls/');



  var initiliazers= $.extend({}, controls);

  $('[data-control]').each(function (index, elem) {
     var $elem=$(elem),
       data = $elem.data(),
       control = data.control;

     if( data.initialized ) return;
     data.initialized=true;

     $elem.addClass("initiliazers_done");


     if(!initiliazers[control]) return;

     if(typeof initiliazers[control] === 'function') {
       var obj = new initiliazers[control](elem, data);
       $elem.data("control", obj);
     } else if(typeof initiliazers[control] === 'object') {
       initiliazers[control].init(elem, data);
       $elem.data("control", initiliazers[control]);
     }
  });

};
