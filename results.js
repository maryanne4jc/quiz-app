document.addEventListener("DOMContentLoaded", function() {
    console.log(quizData);
    // Your existing JavaScript code here

    // Retrieve quiz data and score from query parameters
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const scorePercentage = parseFloat(urlParams.get('score'));

    // Display the score
    document.getElementById('score').innerText = `${scorePercentage}`;

    // Function to display quiz questions, user answers, and correct answers
    function displayQuizResults() {
        const quizResultsContainer = document.getElementById('quiz-results-container');

        quizData.forEach((questionData, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('question');
            questionDiv.innerHTML = `<p><strong>Question ${index + 1}:</strong> ${questionData.question}</p>`;
            
            // Display user's answer
            const userAnswer = getUserAnswer(index);
            console.log('User Answer:', userAnswer);
            // questionDiv.innerHTML += `<p>Your Answer: ${userAnswer}</p>`;

            // Display correct answer
            const correctAnswer = getCorrectAnswer(questionData);
            console.log('Correct Answer:', correctAnswer);
            questionDiv.innerHTML += `<p>Correct Answer: ${correctAnswer}</p>`;

            quizResultsContainer.appendChild(questionDiv);
        });
    }

    function getUserAnswer(questionIndex) {
    const input = document.querySelector(`input[name="question${questionIndex}"]`);
    if (input) {
        if (input.type === 'text') {
            return input.value.trim(); // For text inputs, return the input value
        } else if (input.type === 'radio') {
            const checkedRadio = document.querySelector(`input[name="question${questionIndex}"]:checked`);
            if (checkedRadio) {
                return checkedRadio.value; // For radio buttons, return the value of the checked radio button
            }
        } else if (input.type === 'checkbox') {
            const checkedCheckboxes = document.querySelectorAll(`input[name="question${questionIndex}"]:checked`);
            if (checkedCheckboxes.length > 0) {
                // For checkboxes, return an array of values of checked checkboxes
                return Array.from(checkedCheckboxes).map(checkbox => checkbox.value).join(', ');
            }
        }
    }
    return 'Not answered'; // Return 'Not answered' if no input is found
}





    // Function to retrieve correct answer for a question
    function getCorrectAnswer(questionData) {
        if (questionData.type === 'text') {
            return questionData.correct_answers.join(', ');
        } else {
            return questionData.correct_answers.map(ans => {
                return questionData.options[ans];
            }).join(', ');
        }
    }

    // Call function to display quiz results
    displayQuizResults();
});
