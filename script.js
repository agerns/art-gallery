// Fetch all images from the 'images' folder and display them
const images = [
  { src: "images/balance_2.jpg", category: "abstract", title: "Balance 2" },
  { src: "images/mountain1.jpg", category: "mountain", title: "Mountain 1" },
  { src: "images/abstract2.jpg", category: "abstract", title: "Abstract 2" },
  { src: "images/mountain2.jpg", category: "mountain", title: "Mountain 2" },
  // Add more images here
];

// Function to filter gallery by category
function filterGallery(category) {
  const galleryGrid = document.getElementById("gallery-grid");
  galleryGrid.innerHTML = ""; // Clear the current gallery
  
  const filteredImages = category === "all" 
    ? images 
    : images.filter(img => img.category === category);

  filteredImages.forEach(image => {
    const item = document.createElement("div");
    item.classList.add("grid-item");
    item.innerHTML = `
      <img src="${image.src}" alt="${image.title}" onclick="zoomImage('${image.src}')">
    `;
    galleryGrid.appendChild(item);
  });
}

// Zoom image function
function zoomImage(src) {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
    <div class="modal-content">
      <img src="${src}" alt="Zoomed Image">
      <span class="close" onclick="closeModal()">&times;</span>
    </div>
  `;
  document.body.appendChild(modal);
}

function closeModal() {
  const modal = document.querySelector(".modal");
  modal.remove();
}

// Initialize gallery with all images
filterGallery("all");
