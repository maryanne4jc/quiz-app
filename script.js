const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');




startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

// Event handler for continue button click
continueBtn.onclick = (event) => {
    event.preventDefault(); // Prevent default action
    quizSection.classList.add('active');
    // Hide popup-info and main by removing 'active' class
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}




