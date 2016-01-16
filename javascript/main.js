$(document).ready(function(){
    alert('This page is best view at the resolution 1680 x 1050');
  });

$.ajax("https://api.github.com/users/jacksaintjack").done(function(data){

    $('#smallAvatar').css('background-image', 'url(' + data.avatar_url.toString() + ')');
    $('#largeAvatar').css('background-image', 'url(' + data.avatar_url.toString() + ')');
    $('#usersFullName').text(data.name);
    $('#userName').text(data.login);
    $('#company').text(data.company);
    $('#location').text(data.location);
    $('#dateJoined').text(moment(data.created_at).format('ll'));
    $('#followers').text(data.followers);
    $('#following').text(data.following);
    $("#followers").append('<br><a href ='+ data.followers_url +'>' + 'Follower </a>');
    $("#following").append('<br><a href ='+ data.following_url +'>' + 'Following </a>');
  });

var dataRepo = $.ajax("https://api.github.com/users/jacksaintjack/repos").done(function(data){
    $.each(data, function(repos, add){
     $("#projectArea").append('<div id="projectBox"><li>'+'<a href ='+ add.html_url +'>' + add.name + '</a>' +
     '<li id="stats">'+ add.language + '<span class="octicon octicon-star starIcon"></span>' + '<span class=>'+ add.stargazers_count +
     '</span>' + '<span class="octicon octicon-git-branch branchIcon"></span>' + '<span class=>' + add.forks_count + '</span>' + '</li>' +
     '<span class="updatedTime"> updated '+ moment(add.updated_at).fromNow() +'</span>'  + '</li></div>');

})



});
