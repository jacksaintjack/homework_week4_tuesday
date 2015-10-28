$.ajax("https://api.github.com/users/jacksaintjack").done(function(data){

    $('#smallAvatar').css('background-image', 'url(' + data.avatar_url.toString() + ')');
    $('#largeAvatar').css('background-image', 'url(' + data.avatar_url.toString() + ')');
    $('#usersFullName').text(data.name);
    $('#userName').text(data.login);
    $('#company').text(data.company);
    $('#location').text(data.location);
    $('#dateJoined').text(data.created_at);
    $('#followers').text(data.followers);
    $('#following').text(data.following);

  });

var dataRepo = $.ajax("https://api.github.com/users/jacksaintjack/repos").done(function(data){

  $.each(data, function(i, add){
     $("#projectArea").append('<li>'+'<a href ='+ add.html_url +'>' + add.name + '</a>' + '</li>');
})


});
