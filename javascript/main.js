
var dataUser = $.ajax("https://api.github.com/users/jacksaintjack").done(function(data){
  var avatar = $.map( dataUser, function(value) {
      return value.avatar_url;
  })
  function smallAvatar(){
    $('#smallAvatar').css('background-image', 'url(' + avatar.toString() + ')')
    }
    smallAvatar();

  });

var dataRepo = $.ajax("https://api.github.com/users/jacksaintjack/repos").done(function(dataTwo){
     console.log(dataTwo);
   });
