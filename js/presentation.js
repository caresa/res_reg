(function(){

  $('#claim').on('click', function (e) {
    e.preventDefault();
    var name = $(".form-control.left").val();
    var response = bl.checkRes(name);
    console.log("What is the response from the run method?", response);
    if(response == "resClaimed" || response == "resWasClaimed"){
      $(".put-name-left").append('<li class="add-name-left">'+$(".form-control.left").val()+'</li>');
    }
  });

  $('#reserve').on('click', function (e) {
    e.preventDefault();
    var name = $(".form-control.right").val();
    var response = bl.makeRes(name);
    console.log("What is the response from the run method?", response);
    if(response == "newRes" || response == "createRes"){
      $(".put-name-right").append('<li class="add-name-right">'+$(".form-control.right").val()+'</li>');
    }
  });

})();
