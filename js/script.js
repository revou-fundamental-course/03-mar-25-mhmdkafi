let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("banner-slide");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    setTimeout(showSlides, 5000);
}

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex > document.getElementsByClassName("banner-slide").length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = document.getElementsByClassName("banner-slide").length; }
    showSlides();
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}


const typedText = ["Welcome To My Portofolio", "Explore My Projects", "Let's Build Something Great!"];
let index = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetween = 2000;

function typeEffect() {
    let target = document.querySelector(".auto-type");

    if (charIndex < typedText[index].length) {
        target.innerHTML += typedText[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, typingSpeed);
    } else {
        setTimeout(eraseEffect, delayBetween);
    }
}

function eraseEffect() {
    let target = document.querySelector(".auto-type");

    if (charIndex > 0) {
        target.innerHTML = typedText[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, erasingSpeed);
    } else {
        index = (index + 1) % typedText.length;
        setTimeout(typeEffect, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);


document.addEventListener("DOMContentLoaded", showSlides);

document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let name = document.getElementById("name").value;
    let gender = document.getElementById("gender").value;
    let dob = document.getElementById("dob").value;
    let message = document.getElementById("message").value;

    if (name.trim() === "" || gender === "" || dob === "" || message.trim() === "") {
        alert("Please fill out all fields!");
        return;
    }

    let currentTime = new Date().toUTCString();

    let formattedDOB = new Date(dob).toLocaleDateString("id-ID");

    let messageDisplay = document.getElementById("messageDisplay");
    messageDisplay.innerHTML = `
        <p><strong>Current time :</strong> ${currentTime}</p>
        <p><strong>Nama :</strong> ${name}</p>
        <p><strong>Tanggal Lahir :</strong> ${formattedDOB}</p>
        <p><strong>Jenis Kelamin :</strong> ${gender}</p>
        <p><strong>Pesan :</strong> ${message}</p>
    `;

    document.getElementById("name").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("message").value = "";
});

document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});