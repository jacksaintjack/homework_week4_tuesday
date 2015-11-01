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
     '<li id="stats">'+ add.language + '<span class="octicon octicon-star starIcon"></span>' + '<span class=>'+ add.stargazers_count +
     '</span>' + '<span class="octicon octicon-git-branch branchIcon"></span>' + '<span class=>' + add.forks_count + '</span>' + '</li>' + '</li></div>');

})



});
