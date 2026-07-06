const timecode = document.querySelector("[data-live-timecode]");
const sections = [...document.querySelectorAll("[data-timecode]")];
const revealItems = document.querySelectorAll(".reveal");
const videoCards = document.querySelectorAll("[data-video-card]");
const videoModal = document.querySelector("[data-video-modal]");
const modalVideo = document.querySelector("[data-video-player]");
const videoClose = document.querySelector("[data-video-close]");
const languageButtons = document.querySelectorAll("[data-lang]");

const translations = {
  en: {
    "document.title": "OPRA - 2026 Portfolio",
    "meta.portfolio": "2026 Portfolio",
    "nav.timeline": "Timeline",
    "nav.works": "Works",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.monitor": "PROGRAM MONITOR",
    "hero.subtitle": "Video Editor / Motion Design / Visual Storytelling.",
    "hero.sequence": "Sequence 01",
    "timeline.eyebrow": "Edit Timeline",
    "timeline.title": "Every frame has a reason.",
    "track.video2": "Video 02",
    "track.video1": "Video 01",
    "track.audio1": "Audio 01",
    "track.text": "Text",
    "clip.motion": "Motion Graphics",
    "clip.social": "Social Content",
    "clip.showreel": "Showreel",
    "clip.commercial": "Commercial",
    "clip.music": "Music Video",
    "clip.storytelling": "Visual Storytelling",
    "works.eyebrow": "Compositions",
    "works.title": "Selected work as open sequences.",
    "preview.preview": "PREVIEW",
    "preview.play": "PLAY",
    "project.showreel.title": "Showreel 2026",
    "project.showreel.type": "Personal Reel",
    "project.showreel.role": "Editing / Color / Motion",
    "project.night.title": "Night Signal",
    "project.night.type": "Music Video",
    "project.night.role": "Editing / Sound Design",
    "project.launch.title": "Monochrome Launch",
    "project.launch.type": "Commercial",
    "project.launch.role": "Editing / Color / Motion",
    "project.fast.title": "Fast Format Pack",
    "project.fast.type": "Social Content",
    "project.fast.role": "Editing / Story / Sound",
    "project.duration": "Duration",
    "project.role": "Role",
    "about.panel": "PROJECT INFO",
    "about.eyebrow": "Identity",
    "about.title": "WHO IS OPRA?",
    "about.copy": "I don't just edit videos. I build rhythm, emotion and visual identity frame by frame.",
    "about.experience": "Experience",
    "about.experienceValue": "5+ years",
    "about.focus": "Focus",
    "about.focusValue": "Editing / Motion / Storytelling",
    "about.style": "Style",
    "about.styleValue": "Clean / Dynamic / Cinematic",
    "skills.eyebrow": "Effects / Assets / Layers",
    "skills.title": "Built for rhythm and restraint.",
    "skill.cut": "Cut",
    "skill.rhythm": "Rhythm",
    "skill.color": "Color",
    "skill.sound": "Sound",
    "skill.motion": "Motion",
    "skill.story": "Story",
    "skill.enabled": "Enabled",
    "contact.export": "Export Complete.",
    "contact.title": "LET'S CREATE<br />SOMETHING<br />WORTH WATCHING.",
    "video.openLabel": "Open OPRA showreel full video",
    "video.close": "CLOSE",
    "video.closeLabel": "Close video",
  },
  ru: {
    "document.title": "OPRA - Портфолио 2026",
    "meta.portfolio": "Портфолио 2026",
    "nav.timeline": "Таймлайн",
    "nav.works": "Работы",
    "nav.about": "Обо мне",
    "nav.contact": "Контакты",
    "hero.monitor": "ПРОГРАММНЫЙ МОНИТОР",
    "hero.subtitle": "Видеомонтаж / Моушн-дизайн / Визуальный сторителлинг.",
    "hero.sequence": "Секвенция 01",
    "timeline.eyebrow": "Монтажный таймлайн",
    "timeline.title": "У каждого кадра есть причина.",
    "track.video2": "Видео 02",
    "track.video1": "Видео 01",
    "track.audio1": "Аудио 01",
    "track.text": "Текст",
    "clip.motion": "Моушн-графика",
    "clip.social": "Соцконтент",
    "clip.showreel": "Шоурил",
    "clip.commercial": "Реклама",
    "clip.music": "Клип",
    "clip.storytelling": "Визуальный сторителлинг",
    "works.eyebrow": "Композиции",
    "works.title": "Избранные работы как открытые секвенции.",
    "preview.preview": "ПРЕВЬЮ",
    "preview.play": "СМОТРЕТЬ",
    "project.showreel.title": "Шоурил 2026",
    "project.showreel.type": "Личный рил",
    "project.showreel.role": "Монтаж / Цвет / Моушн",
    "project.night.title": "Night Signal",
    "project.night.type": "Музыкальный клип",
    "project.night.role": "Монтаж / Саунд-дизайн",
    "project.launch.title": "Monochrome Launch",
    "project.launch.type": "Реклама",
    "project.launch.role": "Монтаж / Цвет / Моушн",
    "project.fast.title": "Fast Format Pack",
    "project.fast.type": "Соцконтент",
    "project.fast.role": "Монтаж / История / Звук",
    "project.duration": "Длительность",
    "project.role": "Роль",
    "about.panel": "ИНФО ПРОЕКТА",
    "about.eyebrow": "Идентичность",
    "about.title": "КТО ТАКОЙ OPRA?",
    "about.copy": "Я не просто монтирую видео. Я собираю ритм, эмоцию и визуальную идентичность кадр за кадром.",
    "about.experience": "Опыт",
    "about.experienceValue": "5+ лет",
    "about.focus": "Фокус",
    "about.focusValue": "Монтаж / Моушн / Сторителлинг",
    "about.style": "Стиль",
    "about.styleValue": "Чисто / Динамично / Кинематографично",
    "skills.eyebrow": "Эффекты / Ассеты / Слои",
    "skills.title": "Собрано для ритма и сдержанности.",
    "skill.cut": "Монтаж",
    "skill.rhythm": "Ритм",
    "skill.color": "Цвет",
    "skill.sound": "Звук",
    "skill.motion": "Моушн",
    "skill.story": "История",
    "skill.enabled": "Вкл.",
    "contact.export": "Экспорт завершён.",
    "contact.title": "ДАВАЙТЕ СОЗДАДИМ<br />ЧТО-ТО,<br />ЧТО ХОЧЕТСЯ СМОТРЕТЬ.",
    "video.openLabel": "Открыть полный шоурил OPRA",
    "video.close": "ЗАКРЫТЬ",
    "video.closeLabel": "Закрыть видео",
  },
};

function applyLanguage(language) {
  const currentLanguage = translations[language] ? language : "en";
  const dictionary = translations[currentLanguage];

  document.documentElement.lang = currentLanguage;
  document.title = dictionary["document.title"];

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.textContent = dictionary[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;
    if (dictionary[key]) element.innerHTML = dictionary[key];
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (dictionary[key]) element.setAttribute("aria-label", dictionary[key]);
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  try {
    localStorage.setItem("opra-language", currentLanguage);
  } catch {
    // Language still switches when storage is unavailable.
  }
}

function getInitialLanguage() {
  try {
    const savedLanguage = localStorage.getItem("opra-language");
    if (translations[savedLanguage]) return savedLanguage;
  } catch {
    return "en";
  }

  return "en";
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

applyLanguage(getInitialLanguage());

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
