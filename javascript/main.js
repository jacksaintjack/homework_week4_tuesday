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
    $("#followers").append('<br><a href ='+ data.followers_url +'>' + 'Follower </a>');
    $("#following").append('<br><a href ='+ data.following_url +'>' + 'Following </a>');
  });

var dataRepo = $.ajax("https://api.github.com/users/jacksaintjack/repos").done(function(data){

  $.each(data, function(repos, add){
     $("#projectArea").append('<div id="projectBox"><li>'+'<a href ='+ add.html_url +'>' + add.name + '</a>' +
     '<li id=stats></li>' + '</li></div>');

    //  if(projectName === projectCode){
    //    $('#stats').append(add.language);
    //  }
})

function getColumnIndex(id, key) {
    return columns.indexOf(key)
}

var nameIndex = getColumnIndex(jsonSource.COLUMNS, 'NAME');

$.each(jsonSource.DATA, function( indexInArray, value ) {
    console.log( value[nameIndex] );
});


});
