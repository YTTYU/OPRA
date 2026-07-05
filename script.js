const timecode = document.querySelector("[data-live-timecode]");
const sections = [...document.querySelectorAll("[data-timecode]")];
const revealItems = document.querySelectorAll(".reveal");
const videoCards = document.querySelectorAll("[data-video-card]");
const videoModal = document.querySelector("[data-video-modal]");
const modalVideo = document.querySelector("[data-video-player]");
const videoClose = document.querySelector("[data-video-close]");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach((item) => revealObserver.observe(item));

function frameTimecodeFromScroll() {
  if (!timecode) return;

  const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollRange > 0 ? window.scrollY / scrollRange : 0;
  const totalFrames = Math.round(progress * 3 * 60 * 24);
  const fps = 24;
  const seconds = Math.floor(totalFrames / fps);
  const frames = totalFrames % fps;
  const minutes = Math.floor(seconds / 60);
  const currentSeconds = seconds % 60;

  timecode.textContent = [
    "00",
    String(minutes).padStart(2, "0"),
    String(currentSeconds).padStart(2, "0"),
    String(frames).padStart(2, "0"),
  ].join(":");
}

frameTimecodeFromScroll();
window.addEventListener("scroll", frameTimecodeFromScroll, { passive: true });

videoCards.forEach((card) => {
  const video = card.querySelector("video");
  if (!video) return;

  const playPreview = () => {
    video.play().then(() => card.classList.add("is-playing")).catch(() => {});
  };

  const pausePreview = () => {
    video.pause();
    card.classList.remove("is-playing");
  };

  card.addEventListener("mouseenter", playPreview);
  card.addEventListener("focusin", playPreview);
  card.addEventListener("mouseleave", pausePreview);
  card.addEventListener("focusout", pausePreview);
  card.addEventListener("click", openFullVideo);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openFullVideo();
    }
  });
});

function openFullVideo() {
  if (!videoModal || !modalVideo) return;

  videoCards.forEach((card) => {
    const preview = card.querySelector("video");
    preview?.pause();
    card.classList.remove("is-playing");
  });

  videoModal.classList.add("is-open");
  videoModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("has-video-modal");
  modalVideo.currentTime = 0;
  modalVideo.play().catch(() => {});
  modalVideo.focus();

  if (modalVideo.requestFullscreen) {
    modalVideo.requestFullscreen().catch(() => {});
  }
}

function closeFullVideo() {
  if (!videoModal || !modalVideo) return;

  modalVideo.pause();
  videoModal.classList.remove("is-open");
  videoModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("has-video-modal");

  if (document.fullscreenElement) {
    document.exitFullscreen().catch(() => {});
  }
}

videoClose?.addEventListener("click", closeFullVideo);
videoModal?.addEventListener("click", (event) => {
  if (event.target === videoModal) closeFullVideo();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeFullVideo();
});
