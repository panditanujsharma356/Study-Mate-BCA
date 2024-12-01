// JavaScript for Slider (Automatic Image Sliding)
let sliderIndex = 0;
const sliderImages = document.querySelectorAll(".slider img");

function showSlides() {
  sliderImages.forEach((img, index) => {
    img.style.display = index === sliderIndex ? "block" : "none";
  });

  sliderIndex++;
  if (sliderIndex >= sliderImages.length) {
    sliderIndex = 0;
  }

  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Start the slider
if (sliderImages.length > 0) {
  showSlides();
}

// JavaScript for Notes Password Protection
// Function to View Notes
function viewFile(filePath) {
    window.open(filePath, "_blank");
  }
  
  
  // Function to Download Notes with Password Protection
  function downloadFile(filePath) {
    const password = prompt("Enter the password to download this file:");
    if (password === "12345") { // Replace with your desired password
      alert("Password correct. Downloading the file...");
      window.location.href = filePath; // Initiate the download
    } else {
      alert("Incorrect password. Please try again.");
    }
  }
  function viewFile(filePath) {
    const password = prompt("Enter the password to view this file:");
    if (password === "12345") { // Replace with your desired password
      window.open(filePath, "_blank"); // Open the file in a new tab
    } else {
      alert("Incorrect password. Please try again.");
    }
  }

  function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
  }
      