'use strict';

let currentSidebarBackground;
let availableBackgrounds = [
  'sidebar-background-1',
  'sidebar-background-2',
  'sidebar-background-3',
  'sidebar-background-4',
  'sidebar-background-5',
  'sidebar-background-6',
  'sidebar-background-7',
  'sidebar-background-8',
  'sidebar-background-9',
  'sidebar-background-10',
  'sidebar-background-11',
  'sidebar-background-12',
  'sidebar-background-13',
  'sidebar-background-14',
  'sidebar-background-15',
  'sidebar-background-16',
  'sidebar-background-17',
  'sidebar-background-18',
  'sidebar-background-19'
]

function changeBackground() {
  var newBackground = availableBackgrounds[Math.floor(Math.random() * availableBackgrounds.length)];
  if (currentSidebarBackground) {
    document.getElementById('sidebar-wrapper').classList.remove(currentSidebarBackground);
  }
  document.getElementById('sidebar-wrapper').classList.add(newBackground);
  currentSidebarBackground = newBackground;
}

// changeBackground();
// setInterval(changeBackground, 30000);
