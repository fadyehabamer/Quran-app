const playController = document.querySelector(
  ".app .MusicPlayer .controls .btn-play-controller"
);
const prevBtn = document.querySelector(".app .MusicPlayer .controls .btn-prev");
const nextBtn = document.querySelector(".app .MusicPlayer .controls .btn-next");

const optionsBtn = document.querySelector(".options");
const closeModal = document.querySelector(".options-modal .modal-close");
const optionsModal = document.querySelector(".options-modal");

const slider = document.querySelector(
  ".app .MusicPlayer .info .slidecontainer .slider"
);

const coverElement = document.querySelector(".app .MusicPlayer .cover img");
const infoSection = document.querySelector(".app .MusicPlayer .info");

const trackArtist = document.querySelector(".app .MusicPlayer .info .artist");
const trackName = document.querySelector(".app .MusicPlayer .info .name");

let playlist = [
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Fātihah",
    url: "https://server12.mp3quran.net/maher/001.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Baqarah",
    url: "https://server12.mp3quran.net/maher/002.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah Āl-ʿImrān",
    url: "https://server12.mp3quran.net/maher/003.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah an-Nisāʾ",
    url: "https://server12.mp3quran.net/maher/004.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Māʾidah",
    url: "https://server12.mp3quran.net/maher/005.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Anʿām",
    url: "https://server12.mp3quran.net/maher/006.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Aʿrāf",
    url: "https://server12.mp3quran.net/maher/007.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Anfāl",
    url: "https://server12.mp3quran.net/maher/008.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah at-Taubah",
    url: "https://server12.mp3quran.net/maher/009.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah Yūnus",
    url: "https://server12.mp3quran.net/maher/010.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah Hūd",
    url: "https://server12.mp3quran.net/maher/011.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah Yūsuf",
    url: "https://server12.mp3quran.net/maher/012.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah ar-Raʿd",
    url: "https://server12.mp3quran.net/maher/013.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah Ibrāhīm",
    url: "https://server12.mp3quran.net/maher/014.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Ḥijr",
    url: "https://server12.mp3quran.net/maher/015.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah an-Naḥl",
    url: "https://server12.mp3quran.net/maher/016.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Isrāʾ",
    url: "https://server12.mp3quran.net/maher/017.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Kahf",
    url: "https://server12.mp3quran.net/maher/018.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah Maryam",
    url: "https://server12.mp3quran.net/maher/019.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah Ṭā-Hā",
    url: "https://server12.mp3quran.net/maher/020.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Anbiyāʾ",
    url: "https://server12.mp3quran.net/maher/021.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Ḥajj",
    url: "https://server12.mp3quran.net/maher/022.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Muʾminūn",
    url: "https://server12.mp3quran.net/maher/023.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah an-Nūr",
    url: "https://server12.mp3quran.net/maher/024.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Furqān",
    url: "https://server12.mp3quran.net/maher/025.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah ash-Shuʿarā",
    url: "https://server12.mp3quran.net/maher/026.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah an-Naml",
    url: "https://server12.mp3quran.net/maher/027.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Qaṣaṣ",
    url: "https://server12.mp3quran.net/maher/028.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-ʿAnkabūt",
    url: "https://server12.mp3quran.net/maher/029.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah ar-Rūm",
    url: "https://server12.mp3quran.net/maher/030.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah Luqmān",
    url: "https://server12.mp3quran.net/maher/031.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah as-Sajdah",
    url: "https://server12.mp3quran.net/maher/032.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Aḥzāb",
    url: "https://server12.mp3quran.net/maher/033.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah Sabaʾ",
    url: "https://server12.mp3quran.net/maher/034.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah Fāṭir",
    url: "https://server12.mp3quran.net/maher/035.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah Yā-Sīn",
    url: "https://server12.mp3quran.net/maher/036.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah as-Ṣāffāt",
    url: "https://server12.mp3quran.net/maher/037.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah Ṣād",
    url: "https://server12.mp3quran.net/maher/038.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah az-Zumar",
    url: "https://server12.mp3quran.net/maher/039.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah Ghāfir",
    url: "https://server12.mp3quran.net/maher/040.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah Fuṣṣilat",
    url: "https://server12.mp3quran.net/maher/041.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah ash-Shūrā",
    url: "https://server12.mp3quran.net/maher/042.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah az-Zukhruf",
    url: "https://server12.mp3quran.net/maher/043.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah ad-Dukhān",
    url: "https://server12.mp3quran.net/maher/044.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Jāthiyah",
    url: "https://server12.mp3quran.net/maher/045.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Aḥqāf",
    url: "https://server12.mp3quran.net/maher/046.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah Muḥammad",
    url: "https://server12.mp3quran.net/maher/047.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Fatḥ",
    url: "https://server12.mp3quran.net/maher/048.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Ḥujurāt",
    url: "https://server12.mp3quran.net/maher/049.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah Qāf",
    url: "https://server12.mp3quran.net/maher/050.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah adh-Dhāriyāt",
    url: "https://server12.mp3quran.net/maher/051.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah at-Ṭūr",
    url: "https://server12.mp3quran.net/maher/052.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah an-Najm",
    url: "https://server12.mp3quran.net/maher/053.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Qamar",
    url: "https://server12.mp3quran.net/maher/054.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah ar-Raḥmān",
    url: "https://server12.mp3quran.net/maher/055.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Wāqiʿah",
    url: "https://server12.mp3quran.net/maher/056.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Ḥadīd",
    url: "https://server12.mp3quran.net/maher/057.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Mujādilah",
    url: "https://server12.mp3quran.net/maher/058.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Ḥashr",
    url: "https://server12.mp3quran.net/maher/059.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Mumtaḥanah",
    url: "https://server12.mp3quran.net/maher/060.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah as-Ṣaff",
    url: "https://server12.mp3quran.net/maher/061.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Jumuʿah",
    url: "https://server12.mp3quran.net/maher/062.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Munāfiqūn",
    url: "https://server12.mp3quran.net/maher/063.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah at-Taghābun",
    url: "https://server12.mp3quran.net/maher/064.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah at-Ṭalāq",
    url: "https://server12.mp3quran.net/maher/065.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah at-Taḥrīm",
    url: "https://server12.mp3quran.net/maher/066.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Mulk",
    url: "https://server12.mp3quran.net/maher/067.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Qalam",
    url: "https://server12.mp3quran.net/maher/068.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Ḥāqqah",
    url: "https://server12.mp3quran.net/maher/069.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Maʿārij",
    url: "https://server12.mp3quran.net/maher/070.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah Nūḥ",
    url: "https://server12.mp3quran.net/maher/071.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Jinn",
    url: "https://server12.mp3quran.net/maher/072.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Muzzammil",
    url: "https://server12.mp3quran.net/maher/073.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Muddaththir",
    url: "https://server12.mp3quran.net/maher/074.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Qiyāmah",
    url: "https://server12.mp3quran.net/maher/075.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Insān",
    url: "https://server12.mp3quran.net/maher/076.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Mursalāt",
    url: "https://server12.mp3quran.net/maher/077.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah an-Nabaʾ",
    url: "https://server12.mp3quran.net/maher/078.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah an-Nāziʿāt",
    url: "https://server12.mp3quran.net/maher/079.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah ʿAbasa",
    url: "https://server12.mp3quran.net/maher/080.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah at-Takwīr",
    url: "https://server12.mp3quran.net/maher/081.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Infiṭār",
    url: "https://server12.mp3quran.net/maher/082.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Muṭaffifīn",
    url: "https://server12.mp3quran.net/maher/083.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Inshiqāq",
    url: "https://server12.mp3quran.net/maher/084.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Burūj",
    url: "https://server12.mp3quran.net/maher/085.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah at-Ṭāriq",
    url: "https://server12.mp3quran.net/maher/086.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Aʿlā",
    url: "https://server12.mp3quran.net/maher/087.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Ghāshiyah",
    url: "https://server12.mp3quran.net/maher/088.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Fajr",
    url: "https://server12.mp3quran.net/maher/089.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Balad",
    url: "https://server12.mp3quran.net/maher/090.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah ash-Shams",
    url: "https://server12.mp3quran.net/maher/091.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Layl",
    url: "https://server12.mp3quran.net/maher/092.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah ad-Ḍuḥā",
    url: "https://server12.mp3quran.net/maher/093.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah ash-Sharḥ",
    url: "https://server12.mp3quran.net/maher/094.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah at-Tīn",
    url: "https://server12.mp3quran.net/maher/095.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-ʿAlaq",
    url: "https://server12.mp3quran.net/maher/096.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Qadr",
    url: "https://server12.mp3quran.net/maher/097.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Bayyinah",
    url: "https://server12.mp3quran.net/maher/098.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah az-Zalzalah",
    url: "https://server12.mp3quran.net/maher/099.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-ʿĀdiyāt",
    url: "https://server12.mp3quran.net/maher/100.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Qāriʿah",
    url: "https://server12.mp3quran.net/maher/101.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah at-Takāthur",
    url: "https://server12.mp3quran.net/maher/102.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-ʿAsr",
    url: "https://server12.mp3quran.net/maher/103.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Humazah",
    url: "https://server12.mp3quran.net/maher/104.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Fīl",
    url: "https://server12.mp3quran.net/maher/105.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah Quraysh",
    url: "https://server12.mp3quran.net/maher/106.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Māʿūn",
    url: "https://server12.mp3quran.net/maher/107.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Kawthar",
    url: "https://server12.mp3quran.net/maher/108.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Kāfirūn",
    url: "https://server12.mp3quran.net/maher/109.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah an-Naṣr",
    url: "https://server12.mp3quran.net/maher/110.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Masad",
    url: "https://server12.mp3quran.net/maher/111.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Ikhlāṣ",
    url: "https://server12.mp3quran.net/maher/112.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah al-Falaq",
    url: "https://server12.mp3quran.net/maher/113.mp3",
  },
  {
    artist: "Maher ElMaikli",
    name: "Surah an-Nās",
    url: "https://server12.mp3quran.net/maher/114.mp3",
  },
];

let currentIndex = 0;

let MusicPlayer = new Howl({
  src: playlist[currentIndex].url,
  html5: true,
});

setInterval(() => {
  if (MusicPlayer.seek() !== 0 && slider !== document.activeElement) {
    slider.value = (MusicPlayer.seek() / MusicPlayer._duration) * 100;
  }
}, 100);

slider.onchange = (e) => {
  MusicPlayer.seek(
    Number.parseFloat(e.target.value / 100) * MusicPlayer._duration
  );
};

MusicPlayer.on("end", function () {
  infoSection.classList.contains("active") &&
    infoSection.classList.remove("active");
  coverElement.classList.contains("active") &&
    coverElement.classList.remove("active");
  playController.classList.add("play");
  playController.classList.remove("pause");
  MusicPlayer.stop();
  nextBtn.click();
});

playController.addEventListener("click", (e) => {
  if (e.target.classList.contains("play")) {
    infoSection.classList.contains("active") === false &&
      infoSection.classList.add("active");
    coverElement.classList.contains("active") === false &&
      coverElement.classList.add("active");
    e.target.classList.remove("play");
    e.target.classList.add("pause");
    trackArtist.innerHTML = playlist[currentIndex].artist;
    trackName.innerHTML = playlist[currentIndex].name;
    MusicPlayer.play();
  } else {
    infoSection.classList.contains("active") &&
      infoSection.classList.remove("active");
    coverElement.classList.contains("active") &&
      coverElement.classList.remove("active");
    e.target.classList.add("play");
    e.target.classList.remove("pause");
    MusicPlayer.pause();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex !== 0) {
    MusicPlayer.unload();
    MusicPlayer = new Howl({
      src: playlist[--currentIndex].url,
      html5: true,
    });
    MusicPlayer.play();
    trackArtist.innerHTML = playlist[currentIndex].artist;
    trackName.innerHTML = playlist[currentIndex].name;
    infoSection.classList.contains("active") === false &&
      infoSection.classList.add("active");
    coverElement.classList.contains("active") === false &&
      coverElement.classList.add("active");
    playController.classList.contains("play") &&
      playController.classList.remove("play");
    playController.classList.contains("pause") === false &&
      playController.classList.add("pause");
    slider.value = 0;
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex !== playlist.length - 1) {
    MusicPlayer.unload();
    MusicPlayer = new Howl({
      src: playlist[++currentIndex].url,
      html5: true,
    });
    MusicPlayer.play();
    trackArtist.innerHTML = playlist[currentIndex].artist;
    trackName.innerHTML = playlist[currentIndex].name;
    infoSection.classList.contains("active") === false &&
      infoSection.classList.add("active");
    coverElement.classList.contains("active") === false &&
      coverElement.classList.add("active");
    playController.classList.contains("play") &&
      playController.classList.remove("play");
    playController.classList.contains("pause") === false &&
      playController.classList.add("pause");
    slider.value = 0;
  }
});

optionsBtn.onclick = () => {
  optionsModal.classList.contains("visible") === false &&
    optionsModal.classList.add("visible");
};

closeModal.onclick = () => {
  optionsModal.classList.contains("visible") &&
    optionsModal.classList.remove("visible");
};
// ---------------------------------------------------------------------------------
// toggle dark mode
function darktoggle() {
    var element = document.body;
    var options =document.getElementById("options");
    var artist=document.getElementById("artist");
    var name = document.getElementById("name");

    element.classList.toggle("dark-mode");
    options.classList.toggle("dark-mode");
    name.classList.toggle("darkmode-text");
    artist.classList.toggle("darkmode-text");
    
 }