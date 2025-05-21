const pauseButton = document.getElementById("pause");
const resumeButton = document.getElementById("resume");
const box = document.getElementById("box");

box.style.animationPlayState = getUserPreference("animationState") || "paused";

pauseButton.addEventListener("click", () => {
    box.style.animationPlayState = "paused";
    storeUserPreference("animationState", "paused");
});

resumeButton.addEventListener("click", () => {
    box.style.animationPlayState = "running";
    storeUserPreference("animationState", "running");
});

function storeUserPreference(key, value) {
  localStorage.setItem(key, value);
}

function getUserPreference(key) {
  return localStorage.getItem(key);
}