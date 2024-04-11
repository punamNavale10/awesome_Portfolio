const sentences = [" Tech enthusiast", " Web developer", " Professional coder"];

const sentenceElement = document.querySelector(".sentence");
let currentIndex = 0;

function updateSentence() {
  sentenceElement.textContent = sentences[currentIndex];
  currentIndex = (currentIndex + 1) % sentences.length;
}

setInterval(updateSentence, 4000);
updateSentence();



// JavaScript to toggle between education and skills sections
document.addEventListener("DOMContentLoaded", function () {
  const educationButton = document.getElementById("education-btn");
  const skillsButton = document.getElementById("skills-btn");
  const educationSection = document.querySelector(".education-section");
  const skillsSection = document.querySelector(".skills-section");

  educationSection.style.display = "block"; 
  skillsSection.style.display = "none"; 

  educationButton.addEventListener("click", function () {
    educationSection.style.display = "block";
    skillsSection.style.display = "none";
    educationButton.classList.add("btn-active");
    skillsButton.classList.remove("btn-active");
    educationButton.style.borderColor = "red";
    skillsButton.style.borderColor = "transparent";
  });

  skillsButton.addEventListener("click", function () {
    educationSection.style.display = "none";
    skillsSection.style.display = "block";
    skillsButton.classList.add("btn-active");
    educationButton.classList.remove("btn-active");
    skillsButton.style.borderColor = "red";
    educationButton.style.borderColor = "transparent";
  });
});

function changeColor() {
    var outerCircle = document.getElementById('outerCircle');
    var colors = ['rgb(18, 182, 236)', 'red']; 
    var randomColor = colors[Math.floor(Math.random() * colors.length)]; 
    outerCircle.style.backgroundColor = randomColor;
}

setInterval(changeColor, 2000); 
