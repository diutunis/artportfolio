let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("carousel-images");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}




/////////////


let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px"; /* Adjust as needed */
    }
    prevScrollpos = currentScrollPos;
}

function createFallingText() {
    const text = document.createElement('div');
    text.className = 'falling-text';
    text.innerText = generateRandomText();
    text.style.left = `${Math.random() * window.innerWidth}px`; // Random horizontal position
    text.style.animationDuration = `${Math.random() * 5 + 2}s`; // Random animation duration
    document.getElementById('container').appendChild(text);

    setTimeout(() => {
        text.remove(); // Remove the text after animation completes
    }, 7000); // Adjust the time based on animation duration
}

function generateRandomText() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomText = '';
    const length = Math.floor(Math.random() * 10) + 5; // Random length between 5 and 14 characters
    for (let i = 0; i < length; i++) {
        randomText += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomText;
}

setInterval(createFallingText, 500); // Generate falling text every 500 milliseconds
