(function(){
  'use strict';

  var githubReposUrl = 'https://api.github.com/repos/';

  var repos = [{
      name: 'angular/angular.js',
      verInUse: '1.5'
    }, {
      name: 'twbs/bootstrap',
      verInUse: '3.3.6'
    }, {
      name: 'FortAwesome/Font-Awesome',
      verInUse: '4.5'
    }, {
      name: 'desandro/masonry',
      verInUse: '4'
    }, {
      name: 'passy/angular-masonry',
      verInUse: '0.14.1'
    }];

  var getTags = function (repo) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {

        var tags = JSON.parse(xhr.response);

        var latestTag = tags[0].name;
        var repoName = repo.name.split('/')[1];
        var verInUse = repo.verInUse;

        var html = ['<li><a id="', repoName, '" href="https://github.com/', repoName, '">',
          repoName, ': ', latestTag,
          '</a> using ', verInUse,
          '</li>'].join('');
        document
          .getElementById('tags')
          .insertAdjacentHTML('beforeend', html);

      }
    };
    var requestUrl = githubReposUrl + repo.name + '/tags';
    xhr.open('GET', requestUrl, true, 2);
    xhr.send(null);
  };

  repos.forEach(function(repo){
    getTags(repo);
  });

}());
