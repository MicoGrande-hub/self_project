  document.addEventListener("DOMContentLoaded", function() {
        var audio = document.getElementById("bg-music");
        audio.volume = 0.5; // Adjust volume (0.0 to 1.0)
        audio.play().catch(error => {
            console.log("Autoplay was prevented. User interaction is needed.");
        });
    });
