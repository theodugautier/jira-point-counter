"use strict";

calculatePoint()

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // listen for messages sent from background.js
  if (request.message === 'urlChange') {
    calculatePoint()
  }
});

function getColumns() {
  return document.getElementsByClassName('gHkYcP');
}

function calculatePoint() {
  Array.from(getColumns()).forEach(function (item) {
    const points = Array.from(item.getElementsByClassName('cfRSwd')).map(function (point) {
      return point.textContent
    })

    let sum = 0

    if (points.length > 0) {
      sum = points.reduce(function (acc, value) {
        return Number(acc) + Number(value);
      });
    }

    if (item.querySelector('.jira-counter--span')) {
      item.querySelector('.jira-counter--span').remove()
    }

    item.querySelector('.gpheoh').insertAdjacentHTML('beforeend', `<span class="jira-counter--span" style="position: absolute; right: 20px;">${sum}</span>`)
  });
}