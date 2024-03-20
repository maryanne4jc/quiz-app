const quizData = [
    {
        "question": "Name the lake into which River Katonga pours its water.",
        "type": "text",
        "correct_answers": ["Lake Victoria"],
        "explanation": "The correct answer is Lake Victoria."
    },
    {
        "question": "Why is it shorter to use an aeroplane from Entebbe to Soroti than using a bus?",
        "type": "multiple_choice",
        "options": {
            "A": "Airplanes have faster engines",
            "B": "Buses have more frequent stops",
            "C": "An aeroplane takes a direct route, while a bus takes indirect routes (Corners) with meanders",
            "D": "Buses are prone to mechanical failures"
        },
        "correct_answers": ["C"],
        "explanation": "The correct answer is: An aeroplane takes a direct route, while a bus takes indirect routes (Corners) with meanders."
    },
    {
        "question": "Give one way crater lakes are important to people.",
        "type": "text",
        "correct_answers": [
            "They are sources of water for domestic use.",
            "They attract tourists who bring foreign income.",
            "Some crater lakes are sources of salt like Lake Katwe.",
            "For study purposes and research."
        ],
        "explanation": "Crater lakes serve various purposes such as providing water for domestic use, attracting tourists, serving as sources of salt, and being valuable for study and research."
    },
    {
        "question": "Mention the element of weather, which enabled Arabs to come from Asia to Africa?",
        "type": "multiple_choice",
        "options": {
            "A": "Rain",
            "B": "Sunshine",
            "C": "Snow",
            "D": "Wind"
        },
        "correct_answers": ["D"],
        "explanation": "The correct answer is Wind."
    },
    {
        "question": "What ways are rift valley lakes similar? Check all that apply",
        "type": "checkbox",
        "options": {
            "A": "Some rift valley lakes have salty water.",
            "B": "They are deep.",
            "C": "Some have inlets without outlets.",
            "D": "They are long and narrow/oblong."
        },
        "correct_answers": ["A", "B", "C", "D"],
        "explanation": "All options are correct."
    },
    {
        "question": "Why should a school have a motto? Check all that apply.",
        "type": "checkbox",
        "options": {
            "A": "To promote unity among learners",
            "B": "To promote patriotism",
            "C": "To promote morals among learners.",
            "D": "A school motto helps a school to set goals to be followed."
        },
        "correct_answers": ["A", "B", "C", "D"],
        "explanation": "Options A, B, C, and D are correct."
    },
    {
        "question": "Mention any one social activity practiced in our community.",
        "type": "text",
        "correct_answers": [
            "Circumcision",
            "Introduction in marriages",
            "Weddings",
            "Naming of children",
            "Initiation ceremonies",
            "Burials",
            "Funeral rites"
        ],
        "explanation": "These are examples of social activities practiced in our community."
    },
    {
        "question": "Why are most game parks found in the tropical regions of East Africa? Check all that apply.",
        "type": "checkbox",
        "options": {
            "A": "There is good pasture in tropical regions for wild animals.",
            "B": "Tropical regions have warm weather that favors wild animals.",
            "C": "It has a complete food chain.",
            "D": "High elevation that offers cooler climates."
        },
        "correct_answers": ["A", "B", "C"],
        "explanation": "Options A, B, and C are correct. Tropical regions of East Africa provide good pasture, warm weather, and sufficient water sources for wild animals, making them suitable for game parks."
    },
    {
        "question": "Give any two factors that made Mau-Mau rebellion last for long in Kenya.",
        "type": "checkbox",
        "options": {
            "A": "It had skilled fighters from World War II.",
            "B": "Internal divisions",
            "C": "External support",
            "D": "It was organized by skilled and experienced leaders."
    
        },
        "correct_answers": ["A", "D"],
        "explanation": "Options A and D are correct."
    },
    {
        "question": "How is the internet better than Newspapers as a means of communication?",
        "type": "text",
        "correct_answers": [
            "The internet has a wider coverage than Newspapers.",
            "Buying data to surf the internet is cheaper than buying Newspapers on a daily basis.",
            "The internet is readily available and easily accessed by most people at any time unlike Newspapers which can’t be accessed at any time.",
            "The internet caters for a global village whereas Newspapers cater for regions."
        ],
        "explanation": "All answers are correct. The internet has various advantages over newspapers in terms of wider coverage, cost-effectiveness, accessibility, and global reach."
    },
    {
        "question": "How can the government overcome a deficit/loss type of budget? Check all that apply.",
        "type": "checkbox",
        "options": {
            "A": "By diversifying the economy.",
            "B": "By encouraging people to pay taxes.",
            "C": "By encouraging foreign investors.",
            "D": "By promoting the tourism industry."
        },
        "correct_answers": ["A", "B", "C", "D"],
        "explanation": "All options are correct. Governments can overcome a deficit/loss type of budget by diversifying the economy, encouraging tax payments, attracting foreign investors, and promoting the tourism industry."
    },
    {
        "question": "State any one role played by midwives in our community.",
        "type": "multiple_choice",
        "options": {
            "A": "Helping pregnant mothers in giving birth.",
            "B": "Providing medical advice to elderly individuals.",
            "C": "Performing surgery in hospitals.",
            "D": "Managing agricultural activities in rural areas."
        },
        "correct_answers": ["A"],
        "explanation": "Option A is correct. Midwives primarily assist pregnant mothers during childbirth, providing essential care and support."
    },
    {
        "question": "Which of the following are ways the youth can be supported in order to fight poverty and unemployment? Check all that apply.",
        "type": "checkbox",
        "options": {
            "A": "By creating job opportunities for them.",
            "B": "Giving them simple loans to start up businesses.",
            "C": "Encouraging them to steal.",
            "D": "Encouraging them to form SACCOS."
        },
        "correct_answers": ["A", "B", "D"],
        "explanation": "Options A and B  and D are correct."
    },
    {
        "question": "Give three ways the Arabs contributed to the development of trade in East Africa.",
        "type": "checkbox",
        "options": {
            "A": "They introduced cowrie shells which acted as a form of money or medium of exchange.",
            "B": "They looted a lot of property.",
            "C": "They introduced new items of trade like mirrors, beads, and cloth.",
            "D": "They established a trading empire at the coast (Zenj empire)."
        },
        "correct_answers": ["A", "C", "D"],
        "explanation": "Options A, C, and D are correct. Arabs contributed to trade in East Africa by introducing cowrie shells as currency, bringing new trade items, and establishing trading empires. Option B is incorrect as it does not contribute positively to trade development."
    },
    {
        "question": "Name one factor the Bantu were looking for during their migration.",
        "type": "text",
        "correct_answers": [
            "Fertile grounds",
            "Soils for farming",
            "Areas with good or favourable climate"
        ],
        "explanation": "All answers are correct. The Bantu people sought fertile grounds, soils suitable for farming, and areas with good or favorable climates during their migration."
    },
    {
        "question": "Give any one way the Bachwezi contributed to the development of farming in Uganda.",
        "type": "text",
        "correct_answers": [
            "They introduced long horned cattle.",
            "They introduced better farming methods.",
            "They introduced coffee growing.",
            "They introduced iron smelting where better farming tools were made which improved on food production."
        ],
        "explanation": "All options are correct. The Bachwezi contributed to the development of farming in Uganda by introducing long-horned cattle, better farming methods, coffee growing, and iron smelting for the production of better farming tools."
    },
    {
        "question": "The arrow of a wind vane was seen pointing to the South on a windy day. To which direction was the wind blowing?",
        "type": "multiple_choice",
        "options": {
            "A": "To the North",
            "B": "To the East",
            "C": "To the South",
            "D": "To the West"
        },
        "correct_answers": ["A"],
        "explanation": "Option A is correct. The arrow of the wind vane points to the direction where the wind is coming from, so if it points to the South, the wind is blowing from the South towards the North."
    },
    {
        "question": "How do warm ocean currents influence the climate of an area?",
        "type": "multiple_choice",
        "options": {
            "A": "They cause rainfall.",
            "B": "They lower temperatures.",
            "C": "They increase air pressure.",
            "D": "They decrease humidity."
        },
        "correct_answers": ["A"],
        "explanation": "Option A is correct. Warm ocean currents contribute to increased evaporation rates, leading to higher humidity levels in the atmosphere and eventually causing rainfall in the affected area."
    },
    {
        "question": "Why did movement of goods and people within East Africa reduce between 1977 and 2001?",
        "type": "text",
        "correct_answers": [
            "The East African Community had collapsed by then.",
            "There were misunderstandings among East African countries during that period.",
            "There was restricted movement of people and goods since borders had been closed."
        ],
        "explanation": "All options are correct. Movement of goods and people within East Africa reduced between 1977 and 2001 due to the collapse of the East African Community, misunderstandings among East African countries, and restricted movement caused by closed borders."
    },
    {
        "question": "What title is given to a person who represents a Commonwealth member country to another?",
        "type": "multiple_choice",
        "options": {
            "A": "Ambassador",
            "B": "Consul",
            "C": "Diplomat",
            "D": "High commissioner"
        },
        "correct_answers": ["D"],
        "explanation": "Option D is correct. A person who represents a Commonwealth member country to another is called a high commissioner."
    }
    
    

];

function generateQuiz() {
    const quizContainer = document.getElementById('quiz-container');

    quizData.forEach((questionData, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `<p><strong>Question ${index + 1}:</strong> ${questionData.question}</p>`;
        
        if (questionData.type === 'text') {
            questionDiv.innerHTML += `<input type="text" name="question${index}"><br>`;
            const textInput = questionDiv.querySelector(`input[type="text"]`);
            textInput.addEventListener('input', updateProgress); // Add event listener for text input
        } else if (questionData.type === 'multiple_choice') {
            questionDiv.classList.add('options');
            Object.entries(questionData.options).forEach(([key, value]) => {
                questionDiv.innerHTML += `<input type="radio" name="question${index}" value="${key}"> ${value}<br>`;
            });
            const radioInputs = questionDiv.querySelectorAll(`input[type="radio"]`);
            radioInputs.forEach(input => {
                input.addEventListener('input', updateProgress); // Add event listener for radio input
            });
        } else if (questionData.type === 'checkbox') {
            questionDiv.classList.add('options');
            Object.entries(questionData.options).forEach(([key, value]) => {
                questionDiv.innerHTML += `<input type="checkbox" name="question${index}" value="${key}"> ${value}<br>`;
            });
            const checkboxInputs = questionDiv.querySelectorAll(`input[type="checkbox"]`);
            checkboxInputs.forEach(input => {
                input.addEventListener('input', updateProgress); // Add event listener for checkbox input
            });
        }
        console.log(quizContainer);
        quizContainer.appendChild(questionDiv);
    });
}


// Get all input fields including text inputs, radio buttons, and checkboxes
const allInputs = document.querySelectorAll('input[type="text"], input[type="radio"], input[type="checkbox"]');

// Get the submit button
const submitButton = document.querySelector('button');

// Function to check if all required inputs are filled
function checkInputs() {
    let allFilled = true;

    // Check text inputs
    const textInputs = document.querySelectorAll('input[type="text"]');
    textInputs.forEach(input => {
        if (!input.value.trim()) {
            allFilled = false;
        }
    });

    // Check radio buttons and checkboxes
    const radioCheckboxes = document.querySelectorAll('input[type="radio"], input[type="checkbox"]');
    radioCheckboxes.forEach(input => {
        const groupName = input.getAttribute('name');
        if (!document.querySelector(`input[name="${groupName}"]:checked`)) {
            allFilled = false;
        }
    });

    return allFilled;
}


// Add event listener to each input field
allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (checkInputs()) {
            submitButton.disabled = false; // Enable the submit button
        } else {
            submitButton.disabled = true; // Keep the submit button disabled
        }
    });
});


function submitQuiz() {
    // Check if all required inputs are filled
    if (!checkInputs()) {
        alert("Please fill out all questions before submitting.");
        return; // Stop the submission process
    }

    // Proceed with submission logic
    // Calculate the score
    let correctAnswers = 0;
    quizData.forEach((question, index) => {
        if (question.type === 'text') {
            const userInput = document.querySelector(`input[name="question${index}"]`).value.trim().toLowerCase();
            if (question.correct_answers.includes(userInput)) {
                correctAnswers++;
            }
        } else if (question.type === 'multiple_choice') {
            const userChoice = document.querySelector(`input[name="question${index}"]:checked`);
            if (userChoice && question.correct_answers.includes(userChoice.value)) {
                correctAnswers++;
            }
        } else if (question.type === 'checkbox') {
            const userChoices = document.querySelectorAll(`input[name="question${index}"]:checked`);
            const userSelected = Array.from(userChoices).map(choice => choice.value).sort().join('');
            const correctSelected = question.correct_answers.sort().join('');
            if (userSelected === correctSelected) {
                correctAnswers++;
            }
        }
    });

    // Calculate the percentage
    const totalQuestions = quizData.length;
    const scorePercentage = (correctAnswers / totalQuestions) * 100;

    // Redirect to the results page and pass the score as a query parameter
    window.location.href = `results.html?score=${scorePercentage}`;
}







// Call the function to generate the quiz interface
generateQuiz();


// Define a global variable to track the progress
let progress = 0;

// Update the progress function whenever the user answers a question
function updateProgress() {
    // Increment the progress by 1 for each answered question
    progress++;

    // Calculate the percentage of progress
    const totalQuestions = quizData.length;
    const percentage = (progress / totalQuestions) * 100;

    // Update the width of the progress bar
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${percentage}%`;
}

// Add an event listener to each input field to update the progress
allInputs.forEach(input => {
    input.addEventListener('input', updateProgress);
});