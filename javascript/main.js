var avatar;

var dataUser = $.ajax("https://api.github.com/users/jacksaintjack").done(function(dataOne){

  var avatarFilter = $(dataUser).map(dataOne, function(avatar){
    return dataUser;
    })

  function smallAvatar(){
    $('#smallAvatar').css('background-image', 'url(' + avatarFilter() + ')')
  }


  });

var dataRepo = $.ajax("https://api.github.com/users/jacksaintjack/repos").done(function(dataTwo){
     console.log(dataTwo);
   });
