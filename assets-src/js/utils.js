/*--------- UTILS ---------*/

module.exports = {

  add: function(a, b) {
  	 return a + b;
  },


	//WHICH TRANSITION EVENT http://davidwalsh.name/css-animation-callback
	whichTransitionEvent: function() {
		var t,
	  el = document.createElement("fakeelement");

		var transitions = {
			"transition"      : "transitionend",
			"OTransition"     : "oTransitionEnd",
			"MozTransition"   : "transitionend",
			"WebkitTransition": "webkitTransitionEnd"
		}

		for (t in transitions){
			if (el.style[t] !== undefined){
			console.log( 'utils module --> ', transitions[t] );
		  return transitions[t];
			}
		}
	},

	//DETECT MEDIA
 	detectMedia: function(val, size) {
    var testMedia = matchMedia('only screen and ('+val+'-width:'+size+'px)').matches;
    return(testMedia);
 	},

 	//WINDOW RESIZE
  onWindowResize: function(callbak) {
    var width = $(window).width(),
        height = $(window).height();

    $(window).resize(function() {
        var newWidth = $(window).width(),
            newHeight = $(window).height();

        if (newWidth !== width || newHeight !== height) {
            width = newWidth;
            height = newHeight;
            callbak();
        }
    });
  },

  //SCROLL TO EL
  scrollToEl: function(el) {
		$('html,body').animate({scrollTop: el.offset().top-50});
  }

}
