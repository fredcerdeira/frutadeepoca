(function() {

  var $btn    = $('button'),
      $wrap   = $('.wrap-content'),
      $dbUrl  = $('main').data('db'),
      $db,
      id,
      $d = new Date(),
      $month = $d.getMonth();



  //------ load $db and store it. Set button labels
  $.ajax({
      url: $dbUrl,
      context: document.body,
      contentType: 'application/json',
      dataType: 'json',
      type: 'GET'
    }).success(function(data) {
      $db = data;
      setLabels($db);
    });

  function setLabels($db){
    for (var i = 0; i < $btn.length; i++) {
      $btn[i].innerText = $db[i].label;
    }
  }


  //------- button actions
  $btn.on('click', function() {
    var $thisId = $(this).attr('id');
    render($thisId);
  });


  //------- render content
  function render(id) {
    var $tpl = "";

    for (var i = 0; i < $db[id].content.length; i++) {
      $tpl += '<a href="#" class="item">' + $db[id].content[i] + '</a>';
    }

    $wrap.html($tpl);
  }


})();
