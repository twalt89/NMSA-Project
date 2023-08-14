//JS
//Glitch Text 
function glitchFlicker(element) 
{
	let originalText = element.textContent;
	let glitchText = originalText.split('').map(char => `<span style="opacity: ${Math.random()}; transform: translateX(${Math.random() * 20 - 10}px)">${char}</span>`).join('');
	element.innerHTML = glitchText;
	setTimeout(() => {
	element.textContent = originalText;
	}, 100);
}

let elements = document.querySelectorAll('.glitch');
elements.forEach(element => {
	setTimeout(() => {
		setInterval(() => {
			glitchFlicker(element);
		}, 500);
		},4000);
});

let element = document.querySelector('#glitch');
setTimeout(() => {
setInterval(() => {
	glitchFlicker(element);
}, 500);
},4000);

//Progress bar animation
let progressBar = document.getElementById("progress-bar");
let timeElapsedText = document.getElementById("time-elapsed");
let timeRemainingText = document.getElementById("time-remaining");
let averageWatchText = document.getElementById("average-watch");
let width = 0;
let duration = 60; // duration of the video in seconds
let interval;

// Create a new IntersectionObserver instance
let observer = new IntersectionObserver((entries) => {
  // Check if the progress bar is visible in the viewport
  if (entries[0].isIntersecting) {
    // Start the progress bar animation
    interval = setInterval(() => {
      if (width >= 100 || width >= 6) {
        clearInterval(interval);
        progressBar.style.backgroundColor = "rgba(255, 200, 200, 0.78)";
		averageWatchText.style.opacity = 1;

      } else {
        width++;
		
        let timeElapsed = (width / 100) * duration;
        let timeRemaining = duration - timeElapsed;
        progressBar.style.width = width + "%";
        timeElapsedText.textContent = timeElapsed.toFixed(0) + "s";
        timeRemainingText.textContent = timeRemaining.toFixed(0) + "s";
      }
    }, 600);
    // Stop observing the progress bar
    observer.disconnect();
  }
});

// Start observing the progress bar
observer.observe(progressBar);
