const images = [
  "images/slide-1.jpg",
  "images/slide-2.jpg",
  "images/slide-3.jpg",
  "images/slide-4.jpg",
  "images/slide-5.jpg",
];

const slideImage = document.getElementById("slide-image");

let slideShow = 0;

setInterval(() => {
  if (slideShow >= images.length) {
    slideShow = 0;
  }
  const imageUrl = images[slideShow];
  slideImage.setAttribute("src", imageUrl);
  slideShow++;
}, 2000);
