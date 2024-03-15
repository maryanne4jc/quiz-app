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
        } else if (questionData.type === 'multiple_choice') {
            questionDiv.classList.add('options');
            Object.entries(questionData.options).forEach(([key, value]) => {
                questionDiv.innerHTML += `<input type="radio" name="question${index}" value="${key}"> ${value}<br>`;
            });
        } else if (questionData.type === 'checkbox') {
            questionDiv.classList.add('options');
            Object.entries(questionData.options).forEach(([key, value]) => {
                questionDiv.innerHTML += `<input type="checkbox" name="question${index}" value="${key}"> ${value}<br>`;
            });
        }

        quizContainer.appendChild(questionDiv);
    });
}

function submitQuiz() {
    // Your submission logic here
    alert("Submitting quiz...");
}

// Call the function to generate the quiz interface
generateQuiz();
