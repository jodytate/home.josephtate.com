
      if (!localStorage.getItem(repoName)) {
        localStorage.setItem(repoName, latestTag);
      } else if (localStorage.getItem(repoName) !== latestTag) {
        console.log('something is not the same');
        document.getElementById(repoName).classList.add('changed');
      }

var clearTracking = function () {
  localStorage.clear();
};

var clearButton = document.getElementById('clear-tracking');
clearButton.addEventListener('click', clearTracking, false);
