// ==================================================
// SETTINGS
// ==================================================

const IMAGE_BASE_URL = "/static/images/games/merk_mix/";
const MEMORY_COUNT = 4;

const difficultyLevels = {
  easy: 6,
  medium: 8,
  hard: 10,
};

let currentDifficulty = null;

// ==================================================
// HTML ELEMENTS
// ==================================================

const memoryItems = document.querySelector(".memory-items");
const answerItems = document.querySelector(".answer-items");
const difficultyButtons = document.querySelectorAll(".difficulty-button");
const readyButton = document.querySelector(".ready-button");
const confirmButton = document.querySelector(".confirm-answer-button");
const restartButton = document.querySelector(".restart-button");
const resultMessage = document.querySelector(".result-message");
const gameTitle = document.querySelector(".game-header h1");
const gameText = document.querySelector(".game-header p");

// ==================================================
// IMAGE DATA
// ==================================================

const imageFiles = JSON.parse(memoryItems.dataset.imageFiles);
const allImages = [];

for (let i = 0; i < imageFiles.length; i++) {
  const fileName = imageFiles[i];
  const imagePath = IMAGE_BASE_URL + fileName;

  allImages.push(imagePath);
}

// ==================================================
// GAME STATE
// ==================================================

let memoryImages = [];
let userAnswers = [];

// ==================================================
// SELECT MEMORY IMAGES
// ==================================================

function selectMemoryImages() {
  memoryImages = [];

  const imagePool = [];

  for (let i = 0; i < allImages.length; i++) {
    imagePool.push(allImages[i]);
  }

  while (memoryImages.length < MEMORY_COUNT && imagePool.length > 0) {
    const randomNumber = Math.random();
    const randomPosition = randomNumber * imagePool.length;
    const randomIndex = Math.floor(randomPosition);
    const randomImage = imagePool[randomIndex];

    imagePool.splice(randomIndex, 1);
    memoryImages.push(randomImage);
  }
}

// ==================================================
// SHOW MEMORY IMAGES
// ==================================================

function showMemoryImages() {
  memoryItems.innerHTML = "";

  for (let i = 0; i < memoryImages.length; i++) {
    const imagePath = memoryImages[i];

    const item = document.createElement("div");
    item.classList.add("memory-item");

    const image = document.createElement("img");
    image.classList.add("memory-item-image");
    image.src = imagePath;
    image.alt = "";

    item.appendChild(image);
    memoryItems.appendChild(item);
  }
}

// ==================================================
// DIFFICULTY
// ==================================================

for (let i = 0; i < difficultyButtons.length; i++) {
  const button = difficultyButtons[i];

  button.addEventListener("click", function () {
    currentDifficulty = button.dataset.difficulty;

    for (let j = 0; j < difficultyButtons.length; j++) {
      difficultyButtons[j].classList.remove("selected");
    }

    button.classList.add("selected");
    readyButton.disabled = false;
  });
}

// ==================================================
// SHUFFLE IMAGES
// ==================================================

function shuffleImages(images) {
  const imagePool = [];
  const shuffledImages = [];

  for (let i = 0; i < images.length; i++) {
    imagePool.push(images[i]);
  }

  while (imagePool.length > 0) {
    const randomNumber = Math.random();
    const randomPosition = randomNumber * imagePool.length;
    const randomIndex = Math.floor(randomPosition);
    const randomImage = imagePool[randomIndex];

    shuffledImages.push(randomImage);
    imagePool.splice(randomIndex, 1);
  }

  return shuffledImages;
}

// ==================================================
// SHOW ANSWER IMAGES
// ==================================================

function showAnswerImages(images) {
  answerItems.innerHTML = "";
  userAnswers = [];

  for (let i = 0; i < images.length; i++) {
    const imagePath = images[i];

    const button = document.createElement("button");
    button.type = "button";
    button.classList.add("answer-item");
    button.dataset.imagePath = imagePath;

    const image = document.createElement("img");
    image.classList.add("answer-item-image");
    image.src = imagePath;
    image.alt = "";

    button.appendChild(image);

    button.addEventListener("click", function () {
      selectAnswer(button, imagePath);
    });

    answerItems.appendChild(button);
  }

  answerItems.hidden = false;
  confirmButton.hidden = false;
  confirmButton.disabled = true;
}

// ==================================================
// SELECT ANSWER
// ==================================================

function selectAnswer(button, imagePath) {
  const answerIndex = userAnswers.indexOf(imagePath);

  if (answerIndex !== -1) {
    userAnswers.splice(answerIndex, 1);
    button.classList.remove("selected");
    confirmButton.disabled = true;

    return;
  }

  if (userAnswers.length >= MEMORY_COUNT) {
    return;
  }

  userAnswers.push(imagePath);
  button.classList.add("selected");

  if (userAnswers.length === MEMORY_COUNT) {
    confirmButton.disabled = false;
  } else {
    confirmButton.disabled = true;
  }
}

// ==================================================
// START ANSWER PHASE
// ==================================================

readyButton.addEventListener("click", function () {
  if (currentDifficulty === null) {
    return;
  }

  gameTitle.textContent = "Welche Dinge hast du gesehen?";
  gameText.textContent =
    "Wähle die vier Gegenstände aus, die du dir gemerkt hast.";

  const optionCount = difficultyLevels[currentDifficulty];
  const wrongImages = [];

  for (let i = 0; i < allImages.length; i++) {
    const imagePath = allImages[i];
    const isMemoryImage = memoryImages.includes(imagePath);

    if (isMemoryImage === false) {
      wrongImages.push(imagePath);
    }
  }

  const answerImages = [];

  for (let i = 0; i < memoryImages.length; i++) {
    answerImages.push(memoryImages[i]);
  }

  while (answerImages.length < optionCount && wrongImages.length > 0) {
    const randomNumber = Math.random();
    const randomPosition = randomNumber * wrongImages.length;
    const randomIndex = Math.floor(randomPosition);
    const randomImage = wrongImages[randomIndex];

    wrongImages.splice(randomIndex, 1);
    answerImages.push(randomImage);
  }

  const shuffledImages = shuffleImages(answerImages);

  memoryItems.hidden = true;
  readyButton.hidden = true;

  for (let i = 0; i < difficultyButtons.length; i++) {
    difficultyButtons[i].disabled = true;
  }

  showAnswerImages(shuffledImages);
});

// ==================================================
// CHECK ANSWERS
// ==================================================

confirmButton.addEventListener("click", function () {
  if (userAnswers.length !== MEMORY_COUNT) {
    return;
  }

  let correctCount = 0;
  const answerButtons = document.querySelectorAll(".answer-item");

  for (let i = 0; i < answerButtons.length; i++) {
    const button = answerButtons[i];
    const imagePath = button.dataset.imagePath;
    const wasSelected = userAnswers.includes(imagePath);
    const isCorrect = memoryImages.includes(imagePath);

    if (wasSelected === true && isCorrect === true) {
      button.classList.remove("selected");
      button.classList.add("correct");
      correctCount = correctCount + 1;
    }

    if (wasSelected === true && isCorrect === false) {
      button.classList.remove("selected");
      button.classList.add("wrong");
    }

    if (wasSelected === false && isCorrect === true) {
      button.classList.add("correct");
    }

    button.disabled = true;
  }

  resultMessage.hidden = false;

  if (correctCount === MEMORY_COUNT) {
    resultMessage.textContent = "Richtig! Du hast alle 4 Bilder erkannt.";
  } else {
    resultMessage.textContent =
      "Du hast " +
      correctCount +
      " von " +
      MEMORY_COUNT +
      " Bildern richtig erkannt.";
  }

  confirmButton.disabled = true;
  confirmButton.hidden = true;
  restartButton.hidden = false;

  gameTitle.textContent = "Ergebnis";
  gameText.textContent =
    "Schau dir dein Ergebnis an und starte danach eine neue Runde.";
});

// ==================================================
// NEW ROUND
// ==================================================

function startNewRound() {
  userAnswers = [];

  answerItems.innerHTML = "";
  answerItems.hidden = true;

  resultMessage.textContent = "";
  resultMessage.hidden = true;

  confirmButton.hidden = true;
  confirmButton.disabled = true;

  restartButton.hidden = true;

  memoryItems.hidden = false;
  readyButton.hidden = false;

  if (currentDifficulty === null) {
    readyButton.disabled = true;
  } else {
    readyButton.disabled = false;
  }

  for (let i = 0; i < difficultyButtons.length; i++) {
    difficultyButtons[i].disabled = false;
  }

  gameTitle.textContent = "Merke dir diese Dinge.";
  gameText.textContent =
    "Schau dir die Gegenstände genau an. Du wirst sie dir gleich wieder ins Gedächtnis rufen. Nimm dir einen Moment Zeit.";

  selectMemoryImages();
  showMemoryImages();
}

// ==================================================
// NEXT ROUND BUTTON
// ==================================================

restartButton.addEventListener("click", function () {
  startNewRound();
});

// ==================================================
// START GAME
// ==================================================

startNewRound();
