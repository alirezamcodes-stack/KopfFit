console.log("Merk-Mix JS loaded");

// ==================================================
// GAME SETTINGS
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

// ==================================================
// IMAGE DATA
// ==================================================

// Get image filenames from Flask
const imageFiles = JSON.parse(memoryItems.dataset.imageFiles);

// Create full image paths
const availableImages = imageFiles.map(function (fileName) {
  return IMAGE_BASE_URL + fileName;
});

// ==================================================
// GAME STATE
// ==================================================

// Images the player has to remember
const memoryImages = [];

// Images selected by the player
const userAnswers = [];

// ==================================================
// SELECT MEMORY IMAGES
// ==================================================

while (memoryImages.length < MEMORY_COUNT && availableImages.length > 0) {
  const randomIndex = Math.floor(Math.random() * availableImages.length);

  const randomImage = availableImages.splice(randomIndex, 1)[0];

  memoryImages.push(randomImage);
}

// ==================================================
// SHOW MEMORY IMAGES
// ==================================================

function showMemoryImages() {
  memoryItems.innerHTML = "";

  memoryImages.forEach(function (imagePath) {
    const memoryItem = document.createElement("div");
    memoryItem.classList.add("memory-item");

    const image = document.createElement("img");
    image.classList.add("memory-item-image");

    image.src = imagePath;
    image.alt = "";

    memoryItem.appendChild(image);
    memoryItems.appendChild(memoryItem);
  });
}

// ==================================================
// DIFFICULTY
// ==================================================

difficultyButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    currentDifficulty = button.dataset.difficulty;

    // Remove previous selection
    difficultyButtons.forEach(function (difficultyButton) {
      difficultyButton.classList.remove("selected");
    });

    // Show selected difficulty
    button.classList.add("selected");

    // Enable start button
    readyButton.disabled = false;

    console.log("Difficulty:", currentDifficulty);
  });
});

// ==================================================
// SHUFFLE IMAGES
// ==================================================

function shuffleImages(images) {
  const shuffledImages = [...images];

  for (let i = shuffledImages.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    const temp = shuffledImages[i];

    shuffledImages[i] = shuffledImages[randomIndex];
    shuffledImages[randomIndex] = temp;
  }

  return shuffledImages;
}

// ==================================================
// SHOW ANSWER IMAGES
// ==================================================

function showAnswerImages(images) {
  answerItems.innerHTML = "";

  userAnswers.length = 0;

  images.forEach(function (imagePath) {
    const answerButton = document.createElement("button");

    answerButton.type = "button";
    answerButton.classList.add("answer-item");
    answerButton.dataset.imagePath = imagePath;

    const image = document.createElement("img");

    image.classList.add("answer-item-image");
    image.src = imagePath;
    image.alt = "";

    answerButton.appendChild(image);

    answerButton.addEventListener("click", function () {
      selectAnswer(answerButton, imagePath);
    });

    answerItems.appendChild(answerButton);
  });

  answerItems.hidden = false;

  confirmButton.hidden = false;
  confirmButton.disabled = true;
}

// ==================================================
// SELECT ANSWER
// ==================================================

function selectAnswer(button, imagePath) {
  const answerIndex = userAnswers.indexOf(imagePath);

  // Deselect image
  if (answerIndex !== -1) {
    userAnswers.splice(answerIndex, 1);
    button.classList.remove("selected");

    confirmButton.disabled = true;

    return;
  }

  // Maximum 4 selected images
  if (userAnswers.length >= MEMORY_COUNT) {
    return;
  }

  // Select image
  userAnswers.push(imagePath);
  button.classList.add("selected");

  // Enable confirm button when 4 images are selected
  confirmButton.disabled = userAnswers.length !== MEMORY_COUNT;

  console.log("User answers:", userAnswers);
}

// ==================================================
// START ANSWER PHASE
// ==================================================

readyButton.addEventListener("click", function () {
  if (!currentDifficulty) {
    return;
  }

  const optionCount = difficultyLevels[currentDifficulty];

  // Images that can be used as wrong answers
  const wrongImages = [...availableImages];

  // Start with the 4 correct images
  const answerImages = [...memoryImages];

  // Add wrong images
  while (answerImages.length < optionCount && wrongImages.length > 0) {
    const randomIndex = Math.floor(Math.random() * wrongImages.length);

    const randomImage = wrongImages.splice(randomIndex, 1)[0];

    answerImages.push(randomImage);
  }

  const shuffledImages = shuffleImages(answerImages);

  // Hide memory phase
  memoryItems.style.display = "none";

  // Hide start button
  readyButton.hidden = true;

  // Difficulty cannot be changed anymore
  difficultyButtons.forEach(function (button) {
    button.disabled = true;
  });

  // Show answer phase
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

  answerButtons.forEach(function (button) {
    const imagePath = button.dataset.imagePath;

    const wasSelected = userAnswers.includes(imagePath);

    const isCorrect = memoryImages.includes(imagePath);

    // Correct selected answer
    if (wasSelected && isCorrect) {
      button.classList.remove("selected");
      button.classList.add("correct");

      correctCount++;
    }

    // Wrong selected answer
    if (wasSelected && !isCorrect) {
      button.classList.remove("selected");
      button.classList.add("wrong");
    }

    // Show a correct image that the user missed
    if (!wasSelected && isCorrect) {
      button.classList.add("correct");
    }

    // Answers cannot be changed anymore
    button.disabled = true;
  });

  // Show result message
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

  // Finish current round
  confirmButton.disabled = true;
  confirmButton.hidden = true;

  // Show restart button
  restartButton.hidden = false;

  console.log("Correct answers:", correctCount);
});

// ==================================================
// RESTART GAME
// ==================================================

restartButton.addEventListener("click", function () {
  location.reload();
});

// ==================================================
// START GAME
// ==================================================

showMemoryImages();
