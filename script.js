// Fotoğraf geçişi
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
let photoDuration = 4000; // 4 saniye

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("show");
    if (i === index) {
      slide.classList.add("show");
    }
  });
}

function startSlideshow() {
  showSlide(currentSlide);
  const interval = setInterval(() => {
    currentSlide++;
    if (currentSlide >= slides.length) {
      clearInterval(interval);
      document.getElementById("slideshow").style.display = "none";
      const videoContainer = document.getElementById("video-container");
      videoContainer.style.display = "block";

      const video = document.getElementById("video");
      video.addEventListener("ended", () => {
        document.getElementById("final-message").style.display = "block";
      });
    } else {
      showSlide(currentSlide);
    }
  }, photoDuration);
}

window.onload = () => {
  startSlideshow();

  // Müzik dosyasını 85. saniyeden başlat
  const music = document.getElementById("music");
  music.currentTime = 85;
  music.play().catch(() => {
    // Otomatik başlatılamazsa, kullanıcı tıklamasını bekle
    document.body.addEventListener("click", () => {
      music.play();
    }, { once: true });
  });
};
