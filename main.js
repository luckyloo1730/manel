// Social Media
const instagram = document.querySelector(".instagram");
const twitter = document.querySelector(".twitter");
const dribble = document.querySelector(".dribble");
const telegram = document.querySelector(".telegram");
const codepen = document.querySelector(".codepen");
const discord = document.querySelector(".discord");
const github = document.querySelector(".github");
const uiverse = document.querySelector(".uiverse")
const reddit = document.querySelector(".reddit")

// Check if elements exist before adding event listeners
if (twitter) {
  twitter.addEventListener("click", () => {
    window.open("https://x.com/maneltop1k", "_blank");
  });
}

if (instagram) {
  instagram.addEventListener("click", () => {
    alert("I don't have Instagram");
  });
}

if (dribble) {
  dribble.addEventListener("click", () => {
    window.open("https://dribbble.com/Maneltop1k", "_blank");
  });
}

if (telegram) {
  telegram.addEventListener("click", () => {
    window.open("https://t.me/manel4ik", "_blank");
  });
}

if (codepen) {
  codepen.addEventListener("click", () => {
    window.open("https://codepen.io/manel4ik", "_blank");
  });
}

if (discord) {
  discord.addEventListener("click", () => {
    window.open("https://discord.com/invite/smilenodes-c-khosting-igrovykh-serverov-i-saitov-1163201292395618355", "_blank");
  });
}

if (github) {
  github.addEventListener("click", () => {
    window.open("https://github.com/Manel4ik", "_blank");
  });
}

if (uiverse) {
  uiverse.addEventListener("click", () => {
    window.open("https://uiverse.io/profile/Manel4ik", "_blank");
  })
}

if (reddit) {
  reddit.addEventListener("click", () => {
    window.open("https://www.reddit.com/user/Maneltop1k/", "_blank")
  })
}

// Protection

        // Disable right-click context menu
        document.addEventListener('contextmenu', function(e) {
          e.preventDefault();
          alert('Right-click is disabled on this site.');
      });

      // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      document.addEventListener('keydown', function(e) {
          if (e.key === 'F12' || 
              (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) || 
              (e.ctrlKey && e.key === 'U')) {
              e.preventDefault();
              alert('Developer tools are disabled on this site.');
          }
      });

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && (e.key === 'c' || e.key === 'x' || e.key === 'v')) {
      e.preventDefault();
  }
});

(function() {
  const threshold = 160; // Threshold for detecting developer tools
  const checkInterval = 1000; // Check every second

  function detectDevTools() {
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      if (widthThreshold || heightThreshold) {
          alert('Developer tools are open. This action is not allowed.');
          // You can take additional actions like redirecting or logging out the user
      }
  }

  setInterval(detectDevTools, checkInterval);
})();
