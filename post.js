// gpt with arrow key
const images = [
    "bhaskar_images/images/Marathi/Poster_A3  Orignal File - new logo - 10.jpg",
    "bhaskar_images/images/Marathi/Poster_A3  Orignal File - new logo - 11.jpg",
    "bhaskar_images/images/Marathi/Poster_A3  Orignal File - new logo - 12.jpg",
    "bhaskar_images/images/Marathi/Poster_A3  Orignal File - new logo - 13.jpg",
    "bhaskar_images/images/Marathi/Poster_A3  Orignal File - new logo - 14.jpg",
    "bhaskar_images/images/Marathi/Poster_A3  Orignal File - new logo - 15.jpg",
    "bhaskar_images/images/Marathi/Poster_A3  Orignal File - new logo - 16.jpg",
    "bhaskar_images/images/Marathi/Poster_A3  Orignal File - new logo - 17.jpg",
    "bhaskar_images/images/Marathi/Poster_A3  Orignal File - new logo - 18.jpg",
    "bhaskar_images/images/Marathi/Poster_A3  Orignal File - new logo - 19.jpg",
    "bhaskar_images/images/Marathi/Poster_A3  Orignal File - new logo - 20.jpg",
    "bhaskar_images/images/Marathi/Poster_A3  Orignal File - new logo - 21.jpg",
    "bhaskar_images/images/Marathi/Poster_A3  Orignal File - new logo - 22.jpg",
    "bhaskar_images/images/Marathi/Poster_A3  Orignal File - new logo - 23.jpg",
    "bhaskar_images/images/Marathi/Poster Panchsutri _ Marathi _ Vidhayak Bharti.png",
    "bhaskar_images/images/Marathi/Poster_I can protect myself_Marathi_Vidhayak Bharti 2018.png",
];

let loadedCount = 0;
let currentIndex = 0;
let currentGallery = null;

function openPopup(index, galleryId) {
    document.querySelector('.navbar-custom-z').style.zIndex = '0';
    currentIndex = index;
    currentGallery = document.getElementById(galleryId);
    document.getElementById("popup").style.display = "flex";
    updatePopupImage();
}

function updatePopupImage() {
    if (currentGallery) {
        const imgs = currentGallery.querySelectorAll("img");
        document.getElementById("popup-img").src = imgs[currentIndex].src;
    }
}

function prevImage() {
    if (currentGallery) {
        const imgs = currentGallery.querySelectorAll("img");
        currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
        updatePopupImage();
    }
}

function nextImage() {
    if (currentGallery) {
        const imgs = currentGallery.querySelectorAll("img");
        currentIndex = (currentIndex + 1) % imgs.length;
        updatePopupImage();
    }
}

function closePopup() {
    document.querySelector('.navbar-custom-z').style.zIndex = '3';
    document.getElementById("popup").style.display = "none";
}

function loadMoreImages() {
    let gallery = document.getElementById("gallery-marathi");
    let imagesToLoad = images.slice(loadedCount, loadedCount + 4);
    imagesToLoad.forEach((src, index) => {
        let img = document.createElement("img");
        img.src = src;
        img.alt = `Image ${loadedCount + index + 9}`;
        img.onclick = function() {
            openPopup(loadedCount + index + 8, "gallery-marathi");
        };
        gallery.appendChild(img);
    });
    loadedCount += imagesToLoad.length;
    if (loadedCount >= images.length) {
        document.querySelector(".load-more").style.display = "none";
    }
}

// Handle keyboard arrow keys for image navigation
window.addEventListener("keydown", function(event) {
    if (document.getElementById("popup").style.display === "flex") {
        if (event.key === "ArrowLeft") {
            prevImage();
        } else if (event.key === "ArrowRight") {
            nextImage();
        } else if (event.key === "Escape") {
            closePopup();
        }
    }
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let content of tabcontents) {
        content.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}










































