(function() {

  var $btn    = $('button'),
      $wrap   = $('.wrap-content'),
      $db     = $('main').data('db');


  //------ load db and store it. Set button labels
  $.ajax({
      url: $db,
      context: document.body,
      contentType: 'application/json',
      dataType: 'json',
      type: 'GET'
    }).success(function(data) {
      db = data;
      setLabels(db)
    });

  function setLabels(db){
    for (var i = 0; i < $btn.length; i++) {
      $btn[i].innerText = db[i].label;
    }
  }


  //------- render proper content for each button
  $btn.on('click', function() {
    var $thisId = $(this).attr('id'),
        $tpl = "";

    for (var i = 0; i < db[$thisId].content.length; i++) {
      $tpl += '<a href="#" class="item">' + db[$thisId].content[i] + '</a>';
    }

    $wrap.html($tpl)
  });

})();
