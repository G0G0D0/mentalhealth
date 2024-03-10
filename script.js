document.addEventListener('DOMContentLoaded', (event) => {
    let savedDayIndex = parseInt(localStorage.getItem('currentDayIndex'), 10);

    if (!isNaN(savedDayIndex)) {
        currentDayIndex = savedDayIndex; // Update the global currentDayIndex
        manageDayAccessibility(savedDayIndex); // Adjust UI based on saved progress
        loadDayQuestions(`day${savedDayIndex}`); // Load the questions for the current or next day
    } else {
        // If no saved progress, start from Day 1
        manageDayAccessibility(1);
    }
});


document.addEventListener('DOMContentLoaded', (event) => {
    //updateDayButtonsAccessibility();

    // Load Day 1 questions initially or based on progress
    // const dayToLoad = `day${currentDayIndex}`;
    // loadDayQuestions(dayToLoad);
    loadProgress();
    // updateButtonStates()

    document.querySelectorAll('.day-btn').forEach(button => {
        button.addEventListener('click', function() {
            if (!this.disabled) {
                let dayId = this.id.replace('-btn', ''); // e.g., 'day1'
                currentDayIndex = parseInt(dayId.replace('day', ''), 10);
                loadDayQuestions(dayId);
                saveProgress();
            }
        });
    });

    // document.querySelectorAll('.day-btn').forEach(button => {
    //     button.addEventListener('click', function() {
    //         if (!this.classList.contains('disabled')) {
    //             const day = this.id.replace('-btn', ''); // Extract day number from button id
    //             currentDayIndex = parseInt(day.replace('day', ''), 10); // Update currentDayIndex based on selected day
    //             loadDayQuestions(day); // Load questions for selected day
    //             // Additional logic to hide or disable previous days' questions
    //         }
    //     });
    // });
    
    document.addEventListener('DOMContentLoaded', (event) => {
        let savedDayIndex = parseInt(localStorage.getItem('currentDayIndex'), 10);
    
        if (!isNaN(savedDayIndex)) {
            currentDayIndex = savedDayIndex; // Update the global currentDayIndex
            manageDayAccessibility(savedDayIndex); // Adjust UI based on saved progress
            loadDayQuestions(`day${savedDayIndex}`); // Load the questions for the current or next day
        } else {
            // If no saved progress, start from Day 1
            manageDayAccessibility(1);
        }
    });
    




    
    // document.querySelectorAll('.day-btn').forEach(button => {
    //     button.addEventListener('click', function() {
    //         const day = this.id.replace('-btn', ''); // Extract day number from button id
    //         currentDayIndex = parseInt(day.replace('day', ''), 10); // Update currentDayIndex based on selected day
    //         loadDayQuestions(day); // Load questions for selected day
    //         saveProgress(); // Save progress
    //     });
    // });

    const finishButton = document.getElementById('finish-button');
    finishButton.style.display = 'none'; // Hide it initially

    finishButton.addEventListener('click', function() {
        showResults(); // Call the function to show results
    });
    loadProgress(); // This can be the last call in your DOMContentLoaded listener

 });

 document.addEventListener('DOMContentLoaded', async () => {
    const user = await Clerk('getUser');
    if (user) {
        document.getElementById('quiz-container').style.display = 'block';
    } else {
        Clerk('mountSignIn', { id: 'clerk-sign-in' });
        document.getElementById('clerk-sign-in').style.display = 'block';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const aboutUsTrigger = document.getElementById('about-us-trigger');
    const aboutUsModal = document.getElementById('about-us-modal');
    const closeButton = aboutUsModal.querySelector('.close-button');

    aboutUsTrigger.addEventListener('click', function(event) {
        event.preventDefault();
        aboutUsModal.style.display = 'block';
    });

    closeButton.addEventListener('click', function() {
        aboutUsModal.style.display = 'none';
    });

    // Close modal if outside click
    window.onclick = function(event) {
        if (event.target == aboutUsModal) {
            aboutUsModal.style.display = 'none';
        }
    }
});



 // Sign-In Modal Logic
document.addEventListener('DOMContentLoaded', (event) => {
    const signInModal = document.getElementById('sign-in-modal');
    const signInButton = document.getElementById('sign-in-button');
    const closeButton = document.querySelector('.close-button');

    // Display the modal by default
    signInModal.style.display = 'block';

    signInButton.addEventListener('click', function() {
        const userName = document.getElementById('user-name').value;
        const greetingElement = document.querySelector('header p');
        greetingElement.textContent = `Hello, ${userName}! Discover more about your mental wellness.`;
        signInModal.style.display = 'none';
    });

    closeButton.addEventListener('click', function() {
        signInModal.style.display = 'none';
    });
});

document.getElementById('sign-in-button').addEventListener('click', function() {
    const userName = document.getElementById('user-name').value;
    // Store the user's name in localStorage
    localStorage.setItem('userName', userName);

    // Proceed with the rest of your sign-in logic
    const greetingElement = document.querySelector('header p');
    greetingElement.textContent = `Hello, ${userName}! Discover more about your mental wellness.`;
    document.getElementById('sign-in-modal').style.display = 'none';
});

document.addEventListener('DOMContentLoaded', (event) => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
        // If a user name is stored, hide the sign-in modal and update the greeting
        const greetingElement = document.querySelector('header p');
        greetingElement.textContent = `Hello, ${storedUserName}! Discover more about your mental wellness.`;
        document.getElementById('sign-in-modal').style.display = 'none';
    } else {
        // If not, show the sign-in modal
        document.getElementById('sign-in-modal').style.display = 'block';
    }

    // Load any other necessary data or perform other page initialization tasks
});



const quizContainer = document.getElementById('quiz-container');
    const resultsContainer = document.getElementById('results-container');
    const nextButton = document.getElementById('next-button'); // Button to proceed to the next day
    const finishButton = document.getElementById('finish-button'); // Button to finish the quiz

    const questions = {
        'day1': [

            'I feel bothered by things that dont usually bother me', 
            'I often find myself comparing myself with others',
            'I have noticed that I have been losing weight unusually', 
            'I could not get going with the things that happened in the past',
            'I dont find interest in the things that I normally do', 
            'feel like I deserve everything just like everyone else',
            'I can concentrate on the things that I normally do', 
            'I feel content with life at the moment', 
            'I dont feel alone',
            'I am communicating and socialising as I normally do'
            // Day 1 questions
            // ... Add all questions for day 1
        ],
        'day2':
        
        [
            "I started communicating less than I normally do",
            "I often space out",
            "I often find myself crying for no specific reason",
            "Does your heart beat faster than usual",
            "I dont feel hopeful towards the future",
            "I feel happy",
            "I feel positive about myself",
            "I feel like I sleep peacefully",
            "I think that I have a healthy diet",
            "I feel confident"
        ],
        



        'day3': [

            "I dont feel like getting out of the house",
            "I feel like life does not have its own meaning",
            "I feel like I dont want to live longer",
            "I easily get bored and cant concentrate in the things that I normally like doing",
            "I stopped talking to people even those who I normally talk to",
            "My life is pretty full",
            "I have the courage to tackle the problems in the future",
            "I dont feel like I have slowed down and I am at a steady pace",
            "I feel like I can manage my stress levels",
            "I have plans for the future"
            
            
        ],
        'day4': 

            [
                "I feel like I am useful",
                "I dont feel like I am all alone",
                "I often feel positive",
                "I dont space out much and I am in the present",
                "I can put the things at past to rest and focus on the future",
                "I feel like I would be better off dead",
                "Do you feel like you have slowed down",
                "Do you feel the lack of energy and spirit?",
                "Do you feel restless",
                "Do you have trouble sleeping"
            ],
            
           
           
        
        'day5':
        
        [
            "I have high hopes toward the future",
            "I feel excited for the next day",
            "I feel like life has a purpose",
            "I am not bothered by the smallest things",
            "I feel like all my problems have solutions",
            "Has your appetite increased",
            "I have suicidal thoughts",
            "I get tired for no reason",
            "I often get lost in my own thoughts",
            "I dont want to go out during the weekends"
        ],
        


        'day6': 

        [
            "My mind is clear as it used to be",
            "I enjoy life",
            "I have plans for the future",
            "I feel like I want to live longer",
            "I want to go out during the weekends",
            "I feel like I dont have a purpose to go on",
            "Life feels meaningless",
            "I feel like I am all alone",
            "Has your appetite decreased",
            "I felt lonely even with people around me"
        ],
        

        'day7': 

        [
            "I felt like I dont feel good as other people do",
            "I did not feel like eating",
            "I over magnify things that I consider my flaws",
            "I feel like everything I did was an effort",
            "I slept more than I usually do",
            "I feel energetic as I always do",
            "I dont find myself comparing",
            "I dont find myself crying often",
            "I dont feel lonely",
            "I often dont space out"
        ]
        
        
    };

    const positiveQuestionsIndexes = {
        'day1': [0,1,2,3,4],
        'day2': [0,1,2,3,4],
        'day3': [0,1,2,3,4],
        'day4': [5,6,7,8,9],
        'day5': [5,6,7,8,9],
        'day6': [5,6,7,8,9],
        'day7': [0,1,2,3,4],
        // ... Repeat structure for days 2 through 7
    };
    
    const negativeQuestionsIndexes = {
        'day1': [5,6,7,8,9],
        'day2': [5,6,7,8,9],
        'day3': [5,6,7,8,9],
        'day4': [0,1,2,3,4],
        'day5': [0,1,2,3,4],
        'day6': [0,1,2,3,4],
        'day7': [5,6,7,8,9],
        // ... Repeat structure for days 2 through 7
    };
    

    

    let currentDayIndex = 1;
    let allScores = [];
    let dailyScores = []; 

    
    
    function loadDayQuestions(day) {
        dailyScores = []; // Reset dailyScores for the new day

        quizContainer.style.opacity = 0; // Set to 0 to start with
    setTimeout(() => {
        quizContainer.style.opacity = 1; // Fade in to full visibility
    }, 100); // Small delay to ensure it starts from 0

        // Clear previous content
        quizContainer.innerHTML = '';
        questions[day].forEach((question, index) => {
            console.log(`Question Index: ${index}`);
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question';

            questionDiv.textContent = `${question}`;
            quizContainer.appendChild(questionDiv);

            // Generate buttons for answers
            const answers = ['Strongly agree', 'Agree', 'Maybe', 'Disagree', 'Strongly disagree'];
            answers.forEach((answer, score) => {
                const button = document.createElement('button');
                button.textContent = answer;
                button.onclick = (event) => {
                    handleAnswer(day, index, score);
                    selectOption(event); // Call selectOption here
                };
                questionDiv.appendChild(button);
            });
        });

        finishButton.style.display = (currentDayIndex === 7) ? 'block' : 'none'; // Show finish button on last day
    }

    function updateDayButtonsAccessibility() {
        document.querySelectorAll('.day-btn').forEach(button => {
            const dayNumber = parseInt(button.id.replace('day', '').replace('-btn', ''), 10);
            button.classList.add('disabled'); // Disable button
            button.disabled = true; // Disable clicking
            
            // Enable button based on completion of previous day or if it's the first day
            if (dayNumber === 1 || allScores.length >= (dayNumber - 1)) {
                button.classList.remove('disabled');
                button.disabled = false;
            }
        });
    }


    function selectOption(e) {
        const selectedOption = e.target;
        // Remove 'selected' class from all options in the parent question div
        const allOptions = selectedOption.parentNode.querySelectorAll('button');
        allOptions.forEach(option => {
            option.classList.remove('selected');
        });
        // Add 'selected' class to the clicked option
        selectedOption.classList.add('selected');
    }

    // function handleAnswer(day, questionIndex, score) {
    //     // Determine if the question is positive or negative
    //     const isPositive = !negativeQuestionsIndexes[day].includes(questionIndex);
    //     const adjustedScore = isPositive ? score + 1 : 6 - (score + 1); // Adjust score for negative questions
    //     dailyScores[questionIndex] = adjustedScore; // Store the score based on the question index

    //     // Check if all questions have been answered
    //     if (dailyScores.filter(score => score !== undefined).length === questions[day].length) {
    //         // Calculate daily score
    //         const dayScore = dailyScores.reduce((total, num) => total + num, 0);
    //         allScores.push(dayScore); // Add to total scores
    //         dailyScores = []; // Reset for next day
    //     }
    // }



    function handleAnswer(day, questionIndex, score) {
        // Determine if the question is positive or negative
        const isPositive = !negativeQuestionsIndexes[day].includes(questionIndex);
        const adjustedScore = isPositive ? score + 1 : 6 - (score + 1); // Adjust score for negative questions
        dailyScores[questionIndex] = adjustedScore; // Store the score based on the question index
    
        // Check if all questions have been answered for the day
        if (dailyScores.filter(score => score !== undefined).length === questions[day].length) {

            const dayScore = dailyScores.reduce((total, num) => total + num, 0);
            allScores.push(dayScore); // Add to total scores
            dailyScores = [];
            // Once all questions for the current day are answered, move to the next day
            let nextDay = currentDayIndex + 1;
            manageDayAccessibility(nextDay);
        }
    }

    function manageDayAccessibility(nextDay) {
        document.querySelectorAll('.day-btn').forEach(button => {
            let dayNumber = parseInt(button.id.replace('day', '').replace('-btn', ''), 10);
            if (dayNumber === nextDay) {
                button.classList.remove('disabled');
                button.disabled = false;
            } else {
                button.classList.add('disabled');
                button.disabled = true;
            }
        });
    }
    
    
    function manageDayAccessibility(nextDay) {
        document.querySelectorAll('.day-btn').forEach(button => {
            let dayNumber = parseInt(button.id.replace('day', '').replace('-btn', ''), 10);
            if (dayNumber === nextDay) {
                button.classList.remove('disabled');
                button.disabled = false;
            } else {
                button.classList.add('disabled');
                button.disabled = true;
            }
        });
    
        // Save the currentDayIndex to localStorage
        localStorage.setItem('currentDayIndex', nextDay);
    }
    
    
    function updateButtonStates() {
        // Assuming allScores.length correctly reflects the number of completed days...
        for (let i = 1; i <= allScores.length; i++) {
            const dayButton = document.getElementById(`day${i}-btn`);
            if (dayButton) {
                dayButton.classList.add('disabled'); // Mark as disabled
                dayButton.disabled = true; // Make non-interactive
            }
        }
    
        // Enable the next day's button, if it exists
        const nextDayButton = document.getElementById(`day${allScores.length + 1}-btn`);
        if (nextDayButton) {
            nextDayButton.classList.remove('disabled');
            nextDayButton.disabled = false;
        }
    }

    // function handleAnswer(day, questionIndex, score) {
    //     // Determine if the question is positive or negative
    //     const isPositive = !negativeQuestionsIndexes[day].includes(questionIndex);
    //     const adjustedScore = isPositive ? score + 1 : 6 - (score + 1); // Adjust score for negative questions
    //     dailyScores[questionIndex] = adjustedScore; // Store the score based on the question index

    //     // Check if all questions have been answered
    //     if (dailyScores.filter(score => score !== undefined).length === questions[day].length) {
    //         // Calculate daily score
    //         const dayScore = dailyScores.reduce((total, num) => total + num, 0);
    //         allScores.push(dayScore); // Add to total scores
    //         dailyScores = []; // Reset for next day
    //     }
    // }

    
    

    function showResults() {
        const totalScore = allScores.reduce((acc, score) => acc + score, 0);
        const meanScore = totalScore / allScores.length;

        // Map the mean score to the output card
        let finalMessage = "";
    if (meanScore >= 42) {
        finalMessage = "You are alright. Keep going!";
    } else if (meanScore >= 35) {
        finalMessage = "You did well. Keep yourself motivated as always!";
    } else if (meanScore >= 28) {
        finalMessage = "Keep calm and keep doing what you think is best. Don't lose yourself!";
    } else {
        finalMessage = "You seem to be experiencing some distress. It might be helpful to talk to a professional.";
    }


        

        // Display results
        resultsContainer.textContent = `Your Mean Score: ${meanScore.toFixed(2)}. ${finalMessage}`;
        quizContainer.style.display = 'none';
        resultsContainer.style.display = 'block';

        const resetButton = document.createElement('button');
        resetButton.textContent = 'Reset';
        resetButton.className = 'btn'; 
        resultsContainer.appendChild(resetButton);
    
        
        resetButton.addEventListener('click', () => {
            // Reset the quiz logic
            currentDayIndex = 1;
            allScores = [];
            localStorage.removeItem('currentDayIndex');
            localStorage.removeItem('allScores');
    
            // Reset UI for a new start
            quizContainer.style.display = 'block';
            resultsContainer.style.display = 'none';
            resultsContainer.innerHTML = ''; // Clear the results
    
            loadDayQuestions('day1');
        });
    }

    function saveProgress() {
        localStorage.setItem('currentDayIndex', currentDayIndex.toString());
        localStorage.setItem('allScores', JSON.stringify(allScores));
    }
    
    nextButton.addEventListener('click', () => {
        currentDayIndex++;
        saveProgress(); // Save progress when moving to the next day
        loadDayQuestions(`day${currentDayIndex}`);
    });
    
    finishButton.addEventListener('click', () => {
        showResults();
        localStorage(); // Optionally clear progress upon finishing
    });
    


    function loadProgress() {
        const savedDayIndex = localStorage.getItem('currentDayIndex');
        const savedScores = localStorage.getItem('allScores');
    
        if (savedDayIndex) {
            currentDayIndex = parseInt(savedDayIndex);
            allScores = savedScores ? JSON.parse(savedScores) : [];
            loadDayQuestions(`day${currentDayIndex}`);
        } else {
            
        }
    }
    
    // Call loadProgress at the start of your script to initialize the quiz with saved data or from the beginning
    loadProgress();
    

    



    // Load the questions for the first day
    loadDayQuestions('day1');








// document.addEventListener('DOMContentLoaded', (event) => {
//     loadProgress();


//     // if (localStorage.getItem('currentDayIndex')) {
//     //     currentDayIndex = parseInt(localStorage.getItem('currentDayIndex'), 10);
//     //     allScores = JSON.parse(localStorage.getItem('allScores')) || [];
//     //     loadDayQuestions(`day${currentDayIndex}`);
//     // } else {
//     //     //loadDayQuestions('day1'); // Start from day 1 if no progress is saved
//     // }
//     document.querySelectorAll('.day-btn').forEach(button => {
//         button.addEventListener('click', function() {
//             const day = this.id.replace('-btn', ''); // Extract day number from button id
//             currentDayIndex = parseInt(day.replace('day', ''), 10); // Update currentDayIndex based on selected day
//             loadDayQuestions(day); // Load questions for selected day
//             saveProgress(); // Save progress
//         });
//     });

//     const finishButton = document.getElementById('finish-button');
//     finishButton.style.display = 'none'; // Hide it initially

//     finishButton.addEventListener('click', function() {
//         showResults(); // Call the function to show results
//     });
//     loadProgress(); // This can be the last call in your DOMContentLoaded listener

//  });

//  // Sign-In Modal Logic
// document.addEventListener('DOMContentLoaded', (event) => {
//     const signInModal = document.getElementById('sign-in-modal');
//     const signInButton = document.getElementById('sign-in-button');
//     const closeButton = document.querySelector('.close-button');

//     // Display the modal by default
//     signInModal.style.display = 'block';

//     signInButton.addEventListener('click', function() {
//         const userName = document.getElementById('user-name').value;
//         const greetingElement = document.querySelector('header p');
//         greetingElement.textContent = `Hello, ${userName}! Discover more about your mental wellness.`;
//         signInModal.style.display = 'none';
//     });

//     closeButton.addEventListener('click', function() {
//         signInModal.style.display = 'none';
//     });
// });



// const quizContainer = document.getElementById('quiz-container');
//     const resultsContainer = document.getElementById('results-container');
//     const nextButton = document.getElementById('next-button'); // Button to proceed to the next day
//     const finishButton = document.getElementById('finish-button'); // Button to finish the quiz

//     const questions = {
//         'day1': [

//             'I feel bothered by things that dont usually bother me', 
//             'I often find myself comparing myself with others',
//             'I have noticed that I have been losing weight unusually', 
//             'I could not get going with the things that happened in the past',
//             'I dont find interest in the things that I normally do', 
//             'feel like I deserve everything just like everyone else',
//             'I can concentrate on the things that I normally do', 
//             'I feel content with life at the moment', 
//             'I dont feel alone',
//             'I am communicating and socialising as I normally do'
//             // Day 1 questions
//             // ... Add all questions for day 1
//         ],
//         'day2':
        
//         [
//             "I started communicating less than I normally do",
//             "I often space out",
//             "I often find myself crying for no specific reason",
//             "Does your heart beat faster than usual",
//             "I dont feel hopeful towards the future",
//             "I feel happy",
//             "I feel positive about myself",
//             "I feel like I sleep peacefully",
//             "I think that I have a healthy diet",
//             "I feel confident"
//         ],
        



//         'day3': [

//             "I dont feel like getting out of the house",
//             "I feel like life does not have its own meaning",
//             "I feel like I dont want to live longer",
//             "I easily get bored and cant concentrate in the things that I normally like doing",
//             "I stopped talking to people even those who I normally talk to",
//             "My life is pretty full",
//             "I have the courage to tackle the problems in the future",
//             "I dont feel like I have slowed down and I am at a steady pace",
//             "I feel like I can manage my stress levels",
//             "I have plans for the future"
            
//             // Day 3 questions
//             // ... Add all questions for day 3
//         ],
//         'day4': 

//             [
//                 "I feel like I am useful",
//                 "I dont feel like I am all alone",
//                 "I often feel positive",
//                 "I dont space out much and I am in the present",
//                 "I can put the things at past to rest and focus on the future",
//                 "I feel like I would be better off dead",
//                 "Do you feel like you have slowed down",
//                 "Do you feel the lack of energy and spirit?",
//                 "Do you feel restless",
//                 "Do you have trouble sleeping"
//             ],
            
           
//             // Day 4 questions
//             // ... Add all questions for day 4
        
//         'day5':
        
//         [
//             "I have high hopes toward the future",
//             "I feel excited for the next day",
//             "I feel like life has a purpose",
//             "I am not bothered by the smallest things",
//             "I feel like all my problems have solutions",
//             "Has your appetite increased",
//             "I have suicidal thoughts",
//             "I get tired for no reason",
//             "I often get lost in my own thoughts",
//             "I dont want to go out during the weekends"
//         ],
        


//         'day6': 

//         [
//             "My mind is clear as it used to be",
//             "I enjoy life",
//             "I have plans for the future",
//             "I feel like I want to live longer",
//             "I want to go out during the weekends",
//             "I feel like I dont have a purpose to go on",
//             "Life feels meaningless",
//             "I feel like I am all alone",
//             "Has your appetite decreased",
//             "I felt lonely even with people around me"
//         ],
        

//         'day7': 

//         [
//             "I felt like I dont feel good as other people do",
//             "I did not feel like eating",
//             "I over magnify things that I consider my flaws",
//             "I feel like everything I did was an effort",
//             "I slept more than I usually do",
//             "I feel energetic as I always do",
//             "I dont find myself comparing",
//             "I dont find myself crying often",
//             "I dont feel lonely",
//             "I often dont space out"
//         ]
        
//         // ... Repeat structure for days 2 through 7
    
//         // ... Repeat structure for days 2 through 7
//     };

//     const positiveQuestionsIndexes = {
//         'day1': [0,1,2,3,4],
//         'day2': [0,1,2,3,4],
//         'day3': [0,1,2,3,4],
//         'day4': [5,6,7,8,9],
//         'day5': [5,6,7,8,9],
//         'day6': [5,6,7,8,9],
//         'day7': [0,1,2,3,4],
//         // ... Repeat structure for days 2 through 7
//     };
    
//     const negativeQuestionsIndexes = {
//         'day1': [5,6,7,8,9],
//         'day2': [5,6,7,8,9],
//         'day3': [5,6,7,8,9],
//         'day4': [0,1,2,3,4],
//         'day5': [0,1,2,3,4],
//         'day6': [0,1,2,3,4],
//         'day7': [5,6,7,8,9],
//         // ... Repeat structure for days 2 through 7
//     };
    

//     // const positiveQuestionsIndexes = { // Assuming the first question is index 0
//     //     'day1': [5,6,7,8,9 ],
//     //     'day2': [5,6,7,8,9 ],
//     //     'day3': [5,6,7,8,9 ],
//     //     'day4': [0,1,2,3,4 ],
//     //     'day5': [0,1,2,3,4 ],
//     //     'day6': [0,1,2,3,4 ],
//     //     'day7': [5,6,7,8,9 ],

//     //     // ... Repeat structure for days 2 through 7
//     // };

//     // const negativeQuestionsIndexes = {
//     //     'day1': [0,1,2,3,4 ],
//     //     'day2': [0,1,2,3,4 ],
//     //     'day3': [0,1,2,3,4 ],
//     //     'day4': [5,6,7,8,9 ],
//     //     'day5': [5,6,7,8,9 ],
//     //     'day6': [5,6,7,8,9 ],
//     //     'day7': [0,1,2,3,4 ],
        
//     //     // ... Repeat structure for days 2 through 7
//     // };

    

//     let currentDayIndex = 1;
//     let allScores = [];
//     let dailyScores = []; 

    
    
//     function loadDayQuestions(day) {
//         dailyScores = []; // Reset dailyScores for the new day

//         quizContainer.style.opacity = 0; // Set to 0 to start with
//     setTimeout(() => {
//         quizContainer.style.opacity = 1; // Fade in to full visibility
//     }, 100); // Small delay to ensure it starts from 0

//         // Clear previous content
//         quizContainer.innerHTML = '';
//         questions[day].forEach((question, index) => {
//             console.log(`Question Index: ${index}`);
//             const questionDiv = document.createElement('div');
//             questionDiv.className = 'question';

//             questionDiv.textContent = `${question}`;
//             quizContainer.appendChild(questionDiv);

//             // Generate buttons for answers
//             const answers = ['Strongly agree', 'Agree', 'Maybe', 'Disagree', 'Strongly disagree'];
//             answers.forEach((answer, score) => {
//                 const button = document.createElement('button');
//                 button.textContent = answer;
//                 button.onclick = (event) => {
//                     handleAnswer(day, index, score);
//                     selectOption(event); // Call selectOption here
//                 };
//                 // button.onclick = () => handleAnswer(day, index, score);
//                 questionDiv.appendChild(button);
//             });
//         });

//         //nextButton.style.display = (currentDayIndex < 7) ? 'block' : 'none'; // Show next button if not on last day
//         finishButton.style.display = (currentDayIndex === 7) ? 'block' : 'none'; // Show finish button on last day
//     }


//     function selectOption(e) {
//         const selectedOption = e.target;
//         // Remove 'selected' class from all options in the parent question div
//         const allOptions = selectedOption.parentNode.querySelectorAll('button');
//         allOptions.forEach(option => {
//             option.classList.remove('selected');
//         });
//         // Add 'selected' class to the clicked option
//         selectedOption.classList.add('selected');
//     }
    

//     function handleAnswer(day, questionIndex, score) {
//         // Determine if the question is positive or negative
//         const isPositive = !negativeQuestionsIndexes[day].includes(questionIndex);
//         const adjustedScore = isPositive ? score + 1 : 6 - (score + 1); // Adjust score for negative questions
//         dailyScores[questionIndex] = adjustedScore; // Store the score based on the question index

//         // Check if all questions have been answered
//         if (dailyScores.filter(score => score !== undefined).length === questions[day].length) {
//             // Calculate daily score
//             const dayScore = dailyScores.reduce((total, num) => total + num, 0);
//             allScores.push(dayScore); // Add to total scores
//             dailyScores = []; // Reset for next day
//         }
//     }

    
    

//     function showResults() {
//         const totalScore = allScores.reduce((acc, score) => acc + score, 0);
//         const meanScore = totalScore / allScores.length;

//         // Map the mean score to the output card
//         let finalMessage = "";
//     if (meanScore >= 42) {
//         finalMessage = "You are alright. Keep going!";
//     } else if (meanScore >= 35) {
//         finalMessage = "You did well. Keep yourself motivated as always!";
//     } else if (meanScore >= 28) {
//         finalMessage = "Keep calm and keep doing what you think is best. Don't lose yourself!";
//     } else {
//         finalMessage = "You seem to be experiencing some distress. It might be helpful to talk to a professional.";
//     }


//         // let finalMessage = "";
//         // if (meanScore <= 10 & meanScore >= 28) {
//         //     finalMessage =  "You are at the border of depression. Take better care of yourself.";
//         // } else if (meanScore < 28 & meanScore >= 35) {
//         //     finalMessage =  "Keep calm and keep doing what you think is best. Don't lose yourself!";
//         // } else if (meanScore < 35 & meanScore >= 42) {
//         //     finalMessage = "You did well. Keep yourself motivated as always!";
//         // } else if ( meanScore < 42 & meanScore >= 50) {
//         //     finalMessage = "You are alright. Keep going!";
//         // } else {
//         //     finalMessage = "You seem to be depressed. Why not consult a psychologist? We have a helpline for you.";
//         // }

//         // Display results
//         resultsContainer.textContent = `Your Mean Score: ${meanScore.toFixed(2)}. ${finalMessage}`;
//         quizContainer.style.display = 'none';
//         resultsContainer.style.display = 'block';

//         const resetButton = document.createElement('button');
//         resetButton.textContent = 'Reset';
//         resetButton.className = 'btn'; 
//         resultsContainer.appendChild(resetButton);
    
        
//         resetButton.addEventListener('click', () => {
//             // Reset the quiz logic
//             currentDayIndex = 1;
//             allScores = [];
//             localStorage.removeItem('currentDayIndex');
//             localStorage.removeItem('allScores');
    
//             // Reset UI for a new start
//             quizContainer.style.display = 'block';
//             resultsContainer.style.display = 'none';
//             resultsContainer.innerHTML = ''; // Clear the results
    
//             loadDayQuestions('day1');
//         });
//     }

//     function saveProgress() {
//         localStorage.setItem('currentDayIndex', currentDayIndex.toString());
//         localStorage.setItem('allScores', JSON.stringify(allScores));
//     }
    
//     nextButton.addEventListener('click', () => {
//         currentDayIndex++;
//         saveProgress(); // Save progress when moving to the next day
//         loadDayQuestions(`day${currentDayIndex}`);
//     });
    
//     finishButton.addEventListener('click', () => {
//         showResults();
//         localStorage(); // Optionally clear progress upon finishing
//     });
    

//     // function saveProgress() {
//     //     localStorage.setItem('currentDayIndex', currentDayIndex);
//     //     localStorage.setItem('allScores', JSON.stringify(allScores));
//     // }
    
//     // nextButton.addEventListener('click', () => {
//     //     currentDayIndex++;
//     //     loadDayQuestions(`day${currentDayIndex}`);
//     //     saveProgress(); // Save progress whenever the next button is clicked
//     // });
    
//     // finishButton.addEventListener('click', () => {
//     //     showResults();
//     //     saveProgress(); // Also save when finishing the quiz
//     // });

//     function loadProgress() {
//         const savedDayIndex = localStorage.getItem('currentDayIndex');
//         const savedScores = localStorage.getItem('allScores');
    
//         if (savedDayIndex) {
//             currentDayIndex = parseInt(savedDayIndex);
//             allScores = savedScores ? JSON.parse(savedScores) : [];
//             loadDayQuestions(`day${currentDayIndex}`);
//         } else {
//             // If there's no saved progress, start from the beginning
//             //loadDayQuestions('day1');
//         }
//     }
    
//     // Call loadProgress at the start of your script to initialize the quiz with saved data or from the beginning
//     loadProgress();
    

//     // nextButton.addEventListener('click', () => {
//     //     currentDayIndex++;
//     //     loadDayQuestions(`day${currentDayIndex}`);
//     // });

//     // finishButton.addEventListener('click', () => {
//     //     showResults(); // Show the final results to the user
    
//     //     // Reset progress
//     //     localStorage.removeItem('currentDayIndex'); // Remove the saved day index
//     //     localStorage.removeItem('allScores'); // Remove the saved scores
    
//     //     // Reset variables
//     //     currentDayIndex = 1; // Reset to day 1
//     //     allScores = []; // Clear all scores
    
//     //     // Reset UI elements for a new start
//     //     quizContainer.style.display = 'block'; // Show the quiz container
//     //     resultsContainer.style.display = 'none'; // Hide the results container
//     //     resultsContainer.innerHTML = ''; // Clear any results displayed
    
//     //     // Reload the first day questions
//     //     loadDayQuestions('day1');
//     // });
    

//     // finishButton.addEventListener('click', showResults);

//     // Load the questions for the first day
//     loadDayQuestions('day1');
// //});
















// document.addEventListener('DOMContentLoaded', (event) => {
//     if (localStorage.getItem('currentDayIndex')) {
//         currentDayIndex = parseInt(localStorage.getItem('currentDayIndex'), 10);
//         allScores = JSON.parse(localStorage.getItem('allScores')) || [];
//         loadDayQuestions(`day${currentDayIndex}`);
//     } else {
//         loadDayQuestions('day1'); // Start from day 1 if no progress is saved
//     }
//     document.querySelectorAll('.day-btn').forEach(button => {
//         button.addEventListener('click', function() {
//             const day = this.id.replace('-btn', ''); // Extract day number from button id
//             currentDayIndex = parseInt(day.replace('day', ''), 10); // Update currentDayIndex based on selected day
//             loadDayQuestions(day); // Load questions for selected day
//             saveProgress(); // Save progress
//         });
//     });

//     const finishButton = document.getElementById('finish-button');
//     finishButton.addEventListener('click', function() {
//         showResults(); // Call the function to show results
//     });
//     loadProgress(); // This can be the last call in your DOMContentLoaded listener

//  });

//  // Sign-In Modal Logic
// document.addEventListener('DOMContentLoaded', (event) => {
//     const signInModal = document.getElementById('sign-in-modal');
//     const signInButton = document.getElementById('sign-in-button');
//     const closeButton = document.querySelector('.close-button');

//     // Display the modal by default
//     signInModal.style.display = 'block';

//     signInButton.addEventListener('click', function() {
//         const userName = document.getElementById('user-name').value;
//         const greetingElement = document.querySelector('header p');
//         greetingElement.textContent = `Hello, ${userName}! Discover more about your mental wellness.`;
//         signInModal.style.display = 'none';
//     });

//     closeButton.addEventListener('click', function() {
//         signInModal.style.display = 'none';
//     });
// });



// const quizContainer = document.getElementById('quiz-container');
//     const resultsContainer = document.getElementById('results-container');
//     const nextButton = document.getElementById('next-button'); // Button to proceed to the next day
//     const finishButton = document.getElementById('finish-button'); // Button to finish the quiz

//     const questions = {
//         'day1': [

//             'I feel bothered by things that dont usually bother me', 
//             'I often find myself comparing myself with others',
//             'I have noticed that I have been losing weight unusually', 
//             'I could not get going with the things that happened in the past',
//             'I dont find interest in the things that I normally do', 
//             'feel like I deserve everything just like everyone else',
//             'I can concentrate on the things that I normally do', 
//             'I feel content with life at the moment', 
//             'I dont feel alone',
//             'I am communicating and socialising as I normally do'
//             // Day 1 questions
//             // ... Add all questions for day 1
//         ],
//         'day2':
        
//         [
//             "I started communicating less than I normally do",
//             "I often space out",
//             "I often find myself crying for no specific reason",
//             "Does your heart beat faster than usual",
//             "I dont feel hopeful towards the future",
//             "I feel happy",
//             "I feel positive about myself",
//             "I feel like I sleep peacefully",
//             "I think that I have a healthy diet",
//             "I feel confident"
//         ],
        



//         'day3': [

//             "I dont feel like getting out of the house",
//             "I feel like life does not have its own meaning",
//             "I feel like I dont want to live longer",
//             "I easily get bored and cant concentrate in the things that I normally like doing",
//             "I stopped talking to people even those who I normally talk to",
//             "My life is pretty full",
//             "I have the courage to tackle the problems in the future",
//             "I dont feel like I have slowed down and I am at a steady pace",
//             "I feel like I can manage my stress levels",
//             "I have plans for the future"
            
//             // Day 3 questions
//             // ... Add all questions for day 3
//         ],
//         'day4': 

//             [
//                 "I feel like I am useful",
//                 "I dont feel like I am all alone",
//                 "I often feel positive",
//                 "I dont space out much and I am in the present",
//                 "I can put the things at past to rest and focus on the future",
//                 "I feel like I would be better off dead",
//                 "Do you feel like you have slowed down",
//                 "Do you feel the lack of energy and spirit?",
//                 "Do you feel restless",
//                 "Do you have trouble sleeping"
//             ],
            
           
//             // Day 4 questions
//             // ... Add all questions for day 4
        
//         'day5':
        
//         [
//             "I have high hopes toward the future",
//             "I feel excited for the next day",
//             "I feel like life has a purpose",
//             "I am not bothered by the smallest things",
//             "I feel like all my problems have solutions",
//             "Has your appetite increased",
//             "I have suicidal thoughts",
//             "I get tired for no reason",
//             "I often get lost in my own thoughts",
//             "I dont want to go out during the weekends"
//         ],
        


//         'day6': 

//         [
//             "My mind is clear as it used to be",
//             "I enjoy life",
//             "I have plans for the future",
//             "I feel like I want to live longer",
//             "I want to go out during the weekends",
//             "I feel like I dont have a purpose to go on",
//             "Life feels meaningless",
//             "I feel like I am all alone",
//             "Has your appetite decreased",
//             "I felt lonely even with people around me"
//         ],
        

//         'day7': 

//         [
//             "I felt like I dont feel good as other people do",
//             "I did not feel like eating",
//             "I over magnify things that I consider my flaws",
//             "I feel like everything I did was an effort",
//             "I slept more than I usually do",
//             "I feel energetic as I always do",
//             "I dont find myself comparing",
//             "I dont find myself crying often",
//             "I dont feel lonely",
//             "I often dont space out"
//         ]
        
//         // ... Repeat structure for days 2 through 7
    
//         // ... Repeat structure for days 2 through 7
//     };

//     const positiveQuestionsIndexes = {
//         'day1': [0,1,2,3,4],
//         'day2': [0,1,2,3,4],
//         'day3': [0,1,2,3,4],
//         'day4': [5,6,7,8,9],
//         'day5': [5,6,7,8,9],
//         'day6': [5,6,7,8,9],
//         'day7': [0,1,2,3,4],
//         // ... Repeat structure for days 2 through 7
//     };
    
//     const negativeQuestionsIndexes = {
//         'day1': [5,6,7,8,9],
//         'day2': [5,6,7,8,9],
//         'day3': [5,6,7,8,9],
//         'day4': [0,1,2,3,4],
//         'day5': [0,1,2,3,4],
//         'day6': [0,1,2,3,4],
//         'day7': [5,6,7,8,9],
//         // ... Repeat structure for days 2 through 7
//     };
    

//     // const positiveQuestionsIndexes = { // Assuming the first question is index 0
//     //     'day1': [5,6,7,8,9 ],
//     //     'day2': [5,6,7,8,9 ],
//     //     'day3': [5,6,7,8,9 ],
//     //     'day4': [0,1,2,3,4 ],
//     //     'day5': [0,1,2,3,4 ],
//     //     'day6': [0,1,2,3,4 ],
//     //     'day7': [5,6,7,8,9 ],

//     //     // ... Repeat structure for days 2 through 7
//     // };

//     // const negativeQuestionsIndexes = {
//     //     'day1': [0,1,2,3,4 ],
//     //     'day2': [0,1,2,3,4 ],
//     //     'day3': [0,1,2,3,4 ],
//     //     'day4': [5,6,7,8,9 ],
//     //     'day5': [5,6,7,8,9 ],
//     //     'day6': [5,6,7,8,9 ],
//     //     'day7': [0,1,2,3,4 ],
        
//     //     // ... Repeat structure for days 2 through 7
//     // };

    

//     let currentDayIndex = 1;
//     let allScores = [];
//     let dailyScores = []; 

    
    
//     function loadDayQuestions(day) {
//         dailyScores = []; // Reset dailyScores for the new day

//         quizContainer.style.opacity = 0; // Set to 0 to start with
//     setTimeout(() => {
//         quizContainer.style.opacity = 1; // Fade in to full visibility
//     }, 100); // Small delay to ensure it starts from 0

//         // Clear previous content
//         quizContainer.innerHTML = '';
//         questions[day].forEach((question, index) => {
//             console.log(`Question Index: ${index}`);
//             const questionDiv = document.createElement('div');
//             questionDiv.className = 'question';

//             questionDiv.textContent = `${question}`;
//             quizContainer.appendChild(questionDiv);

//             // Generate buttons for answers
//             const answers = ['Strongly agree', 'Agree', 'Maybe', 'Disagree', 'Strongly disagree'];
//             answers.forEach((answer, score) => {
//                 const button = document.createElement('button');
//                 button.textContent = answer;
//                 button.onclick = (event) => {
//                     handleAnswer(day, index, score);
//                     selectOption(event); // Call selectOption here
//                 };
//                 // button.onclick = () => handleAnswer(day, index, score);
//                 questionDiv.appendChild(button);
//             });
//         });

//         //nextButton.style.display = (currentDayIndex < 7) ? 'block' : 'none'; // Show next button if not on last day
//         finishButton.style.display = (currentDayIndex === 7) ? 'block' : 'none'; // Show finish button on last day
//     }


//     function selectOption(e) {
//         const selectedOption = e.target;
//         // Remove 'selected' class from all options in the parent question div
//         const allOptions = selectedOption.parentNode.querySelectorAll('button');
//         allOptions.forEach(option => {
//             option.classList.remove('selected');
//         });
//         // Add 'selected' class to the clicked option
//         selectedOption.classList.add('selected');
//     }
    

//     function handleAnswer(day, questionIndex, score) {
//         // Determine if the question is positive or negative
//         const isPositive = !negativeQuestionsIndexes[day].includes(questionIndex);
//         const adjustedScore = isPositive ? score + 1 : 6 - (score + 1); // Adjust score for negative questions
//         dailyScores[questionIndex] = adjustedScore; // Store the score based on the question index

//         // Check if all questions have been answered
//         if (dailyScores.filter(score => score !== undefined).length === questions[day].length) {
//             // Calculate daily score
//             const dayScore = dailyScores.reduce((total, num) => total + num, 0);
//             allScores.push(dayScore); // Add to total scores
//             dailyScores = []; // Reset for next day
//         }
//     }

    
    

//     function showResults() {
//         const totalScore = allScores.reduce((acc, score) => acc + score, 0);
//         const meanScore = totalScore / allScores.length;

//         // Map the mean score to the output card
//         let finalMessage = "";
//     if (meanScore >= 42) {
//         finalMessage = "You are alright. Keep going!";
//     } else if (meanScore >= 35) {
//         finalMessage = "You did well. Keep yourself motivated as always!";
//     } else if (meanScore >= 28) {
//         finalMessage = "Keep calm and keep doing what you think is best. Don't lose yourself!";
//     } else {
//         finalMessage = "You seem to be experiencing some distress. It might be helpful to talk to a professional.";
//     }


//         // let finalMessage = "";
//         // if (meanScore <= 10 & meanScore >= 28) {
//         //     finalMessage =  "You are at the border of depression. Take better care of yourself.";
//         // } else if (meanScore < 28 & meanScore >= 35) {
//         //     finalMessage =  "Keep calm and keep doing what you think is best. Don't lose yourself!";
//         // } else if (meanScore < 35 & meanScore >= 42) {
//         //     finalMessage = "You did well. Keep yourself motivated as always!";
//         // } else if ( meanScore < 42 & meanScore >= 50) {
//         //     finalMessage = "You are alright. Keep going!";
//         // } else {
//         //     finalMessage = "You seem to be depressed. Why not consult a psychologist? We have a helpline for you.";
//         // }

//         // Display results
//         resultsContainer.textContent = `Your Mean Score: ${meanScore.toFixed(2)}. ${finalMessage}`;
//         quizContainer.style.display = 'none';
//         resultsContainer.style.display = 'block';

//         const resetButton = document.createElement('button');
//         resetButton.textContent = 'Reset';
//         resetButton.className = 'btn'; 
//         resultsContainer.appendChild(resetButton);
    
        
//         resetButton.addEventListener('click', () => {
//             // Reset the quiz logic
//             currentDayIndex = 1;
//             allScores = [];
//             localStorage.removeItem('currentDayIndex');
//             localStorage.removeItem('allScores');
    
//             // Reset UI for a new start
//             quizContainer.style.display = 'block';
//             resultsContainer.style.display = 'none';
//             resultsContainer.innerHTML = ''; // Clear the results
    
//             loadDayQuestions('day1');
//         });
//     }

//     function saveProgress() {
//         localStorage.setItem('currentDayIndex', currentDayIndex.toString());
//         localStorage.setItem('allScores', JSON.stringify(allScores));
//     }
    
//     nextButton.addEventListener('click', () => {
//         currentDayIndex++;
//         saveProgress(); // Save progress when moving to the next day
//         loadDayQuestions(`day${currentDayIndex}`);
//     });
    
//     finishButton.addEventListener('click', () => {
//         showResults();
//         localStorage(); // Optionally clear progress upon finishing
//     });
    

//     // function saveProgress() {
//     //     localStorage.setItem('currentDayIndex', currentDayIndex);
//     //     localStorage.setItem('allScores', JSON.stringify(allScores));
//     // }
    
//     // nextButton.addEventListener('click', () => {
//     //     currentDayIndex++;
//     //     loadDayQuestions(`day${currentDayIndex}`);
//     //     saveProgress(); // Save progress whenever the next button is clicked
//     // });
    
//     // finishButton.addEventListener('click', () => {
//     //     showResults();
//     //     saveProgress(); // Also save when finishing the quiz
//     // });

//     function loadProgress() {
//         const savedDayIndex = localStorage.getItem('currentDayIndex');
//         const savedScores = localStorage.getItem('allScores');
    
//         if (savedDayIndex) {
//             currentDayIndex = parseInt(savedDayIndex);
//             allScores = savedScores ? JSON.parse(savedScores) : [];
//             loadDayQuestions(`day${currentDayIndex}`);
//         } else {
//             // If there's no saved progress, start from the beginning
//             loadDayQuestions('day1');
//         }
//     }
    
//     // Call loadProgress at the start of your script to initialize the quiz with saved data or from the beginning
//     loadProgress();
    

//     // nextButton.addEventListener('click', () => {
//     //     currentDayIndex++;
//     //     loadDayQuestions(`day${currentDayIndex}`);
//     // });

//     // finishButton.addEventListener('click', () => {
//     //     showResults(); // Show the final results to the user
    
//     //     // Reset progress
//     //     localStorage.removeItem('currentDayIndex'); // Remove the saved day index
//     //     localStorage.removeItem('allScores'); // Remove the saved scores
    
//     //     // Reset variables
//     //     currentDayIndex = 1; // Reset to day 1
//     //     allScores = []; // Clear all scores
    
//     //     // Reset UI elements for a new start
//     //     quizContainer.style.display = 'block'; // Show the quiz container
//     //     resultsContainer.style.display = 'none'; // Hide the results container
//     //     resultsContainer.innerHTML = ''; // Clear any results displayed
    
//     //     // Reload the first day questions
//     //     loadDayQuestions('day1');
//     // });
    

//     // finishButton.addEventListener('click', showResults);

//     // Load the questions for the first day
//     loadDayQuestions('day1');
// //});







// document.addEventListener('DOMContentLoaded', (event) => {
//     if (localStorage.getItem('currentDayIndex')) {
//         currentDayIndex = parseInt(localStorage.getItem('currentDayIndex'), 10);
//         allScores = JSON.parse(localStorage.getItem('allScores')) || [];
//         loadDayQuestions(`day${currentDayIndex}`);
//     } else {
//         loadDayQuestions('day1'); // Start from day 1 if no progress is saved
//     }
//  });

//  // Sign-In Modal Logic
// document.addEventListener('DOMContentLoaded', (event) => {
//     const signInModal = document.getElementById('sign-in-modal');
//     const signInButton = document.getElementById('sign-in-button');
//     const closeButton = document.querySelector('.close-button');

//     // Display the modal by default
//     signInModal.style.display = 'block';

//     signInButton.addEventListener('click', function() {
//         const userName = document.getElementById('user-name').value;
//         const greetingElement = document.querySelector('header p');
//         greetingElement.textContent = `Hello, ${userName}! Discover more about your mental wellness.`;
//         signInModal.style.display = 'none';
//     });

//     closeButton.addEventListener('click', function() {
//         signInModal.style.display = 'none';
//     });
// });



// const quizContainer = document.getElementById('quiz-container');
//     const resultsContainer = document.getElementById('results-container');
//     const nextButton = document.getElementById('next-button'); // Button to proceed to the next day
//     const finishButton = document.getElementById('finish-button'); // Button to finish the quiz

//     const questions = {
//         'day1': [

//             'I feel bothered by things that dont usually bother me', 
//             'I often find myself comparing myself with others',
//             'I have noticed that I have been losing weight unusually', 
//             'I could not get going with the things that happened in the past',
//             'I dont find interest in the things that I normally do', 
//             'feel like I deserve everything just like everyone else',
//             'I can concentrate on the things that I normally do', 
//             'I feel content with life at the moment', 
//             'I dont feel alone',
//             'I am communicating and socialising as I normally do'
//             // Day 1 questions
//             // ... Add all questions for day 1
//         ],
//         'day2':
        
//         [
//             "I started communicating less than I normally do",
//             "I often space out",
//             "I often find myself crying for no specific reason",
//             "Does your heart beat faster than usual",
//             "I dont feel hopeful towards the future",
//             "I feel happy",
//             "I feel positive about myself",
//             "I feel like I sleep peacefully",
//             "I think that I have a healthy diet",
//             "I feel confident"
//         ],
        



//         'day3': [

//             "I dont feel like getting out of the house",
//             "I feel like life does not have its own meaning",
//             "I feel like I dont want to live longer",
//             "I easily get bored and cant concentrate in the things that I normally like doing",
//             "I stopped talking to people even those who I normally talk to",
//             "My life is pretty full",
//             "I have the courage to tackle the problems in the future",
//             "I dont feel like I have slowed down and I am at a steady pace",
//             "I feel like I can manage my stress levels",
//             "I have plans for the future"
            
//             // Day 3 questions
//             // ... Add all questions for day 3
//         ],
//         'day4': 

//             [
//                 "I feel like I am useful",
//                 "I dont feel like I am all alone",
//                 "I often feel positive",
//                 "I dont space out much and I am in the present",
//                 "I can put the things at past to rest and focus on the future",
//                 "I feel like I would be better off dead",
//                 "Do you feel like you have slowed down",
//                 "Do you feel the lack of energy and spirit?",
//                 "Do you feel restless",
//                 "Do you have trouble sleeping"
//             ],
            
           
//             // Day 4 questions
//             // ... Add all questions for day 4
        
//         'day5':
        
//         [
//             "I have high hopes toward the future",
//             "I feel excited for the next day",
//             "I feel like life has a purpose",
//             "I am not bothered by the smallest things",
//             "I feel like all my problems have solutions",
//             "Has your appetite increased",
//             "I have suicidal thoughts",
//             "I get tired for no reason",
//             "I often get lost in my own thoughts",
//             "I dont want to go out during the weekends"
//         ],
        


//         'day6': 

//         [
//             "My mind is clear as it used to be",
//             "I enjoy life",
//             "I have plans for the future",
//             "I feel like I want to live longer",
//             "I want to go out during the weekends",
//             "I feel like I dont have a purpose to go on",
//             "Life feels meaningless",
//             "I feel like I am all alone",
//             "Has your appetite decreased",
//             "I felt lonely even with people around me"
//         ],
        

//         'day7': 

//         [
//             "I felt like I dont feel good as other people do",
//             "I did not feel like eating",
//             "I over magnify things that I consider my flaws",
//             "I feel like everything I did was an effort",
//             "I slept more than I usually do",
//             "I feel energetic as I always do",
//             "I dont find myself comparing",
//             "I dont find myself crying often",
//             "I dont feel lonely",
//             "I often dont space out"
//         ]
        
//         // ... Repeat structure for days 2 through 7
    
//         // ... Repeat structure for days 2 through 7
//     };

//     const positiveQuestionsIndexes = {
//         'day1': [0,1,2,3,4],
//         'day2': [0,1,2,3,4],
//         'day3': [0,1,2,3,4],
//         'day4': [5,6,7,8,9],
//         'day5': [5,6,7,8,9],
//         'day6': [5,6,7,8,9],
//         'day7': [0,1,2,3,4],
//         // ... Repeat structure for days 2 through 7
//     };
    
//     const negativeQuestionsIndexes = {
//         'day1': [5,6,7,8,9],
//         'day2': [5,6,7,8,9],
//         'day3': [5,6,7,8,9],
//         'day4': [0,1,2,3,4],
//         'day5': [0,1,2,3,4],
//         'day6': [0,1,2,3,4],
//         'day7': [5,6,7,8,9],
//         // ... Repeat structure for days 2 through 7
//     };
    

//     // const positiveQuestionsIndexes = { // Assuming the first question is index 0
//     //     'day1': [5,6,7,8,9 ],
//     //     'day2': [5,6,7,8,9 ],
//     //     'day3': [5,6,7,8,9 ],
//     //     'day4': [0,1,2,3,4 ],
//     //     'day5': [0,1,2,3,4 ],
//     //     'day6': [0,1,2,3,4 ],
//     //     'day7': [5,6,7,8,9 ],

//     //     // ... Repeat structure for days 2 through 7
//     // };

//     // const negativeQuestionsIndexes = {
//     //     'day1': [0,1,2,3,4 ],
//     //     'day2': [0,1,2,3,4 ],
//     //     'day3': [0,1,2,3,4 ],
//     //     'day4': [5,6,7,8,9 ],
//     //     'day5': [5,6,7,8,9 ],
//     //     'day6': [5,6,7,8,9 ],
//     //     'day7': [0,1,2,3,4 ],
        
//     //     // ... Repeat structure for days 2 through 7
//     // };

    

//     let currentDayIndex = 1;
//     let allScores = [];
//     let dailyScores = []; 

    
    
//     function loadDayQuestions(day) {
//         dailyScores = []; // Reset dailyScores for the new day

//         // Clear previous content
//         quizContainer.innerHTML = '';
//         questions[day].forEach((question, index) => {
//             console.log(`Question Index: ${index}`);
//             const questionDiv = document.createElement('div');
//             questionDiv.className = 'question';

//             questionDiv.textContent = `${question}`;
//             quizContainer.appendChild(questionDiv);

//             // Generate buttons for answers
//             const answers = ['Strongly agree', 'Agree', 'Maybe', 'Disagree', 'Strongly disagree'];
//             answers.forEach((answer, score) => {
//                 const button = document.createElement('button');
//                 button.textContent = answer;
//                 button.onclick = (event) => {
//                     handleAnswer(day, index, score);
//                     selectOption(event); // Call selectOption here
//                 };
//                 // button.onclick = () => handleAnswer(day, index, score);
//                 questionDiv.appendChild(button);
//             });
//         });

//         nextButton.style.display = (currentDayIndex < 7) ? 'block' : 'none'; // Show next button if not on last day
//         finishButton.style.display = (currentDayIndex === 7) ? 'block' : 'none'; // Show finish button on last day
//     }


//     function selectOption(e) {
//         const selectedOption = e.target;
//         // Remove 'selected' class from all options in the parent question div
//         const allOptions = selectedOption.parentNode.querySelectorAll('button');
//         allOptions.forEach(option => {
//             option.classList.remove('selected');
//         });
//         // Add 'selected' class to the clicked option
//         selectedOption.classList.add('selected');
//     }
    

//     function handleAnswer(day, questionIndex, score) {
//         // Determine if the question is positive or negative
//         const isPositive = !negativeQuestionsIndexes[day].includes(questionIndex);
//         const adjustedScore = isPositive ? score + 1 : 6 - (score + 1); // Adjust score for negative questions
//         dailyScores[questionIndex] = adjustedScore; // Store the score based on the question index

//         // Check if all questions have been answered
//         if (dailyScores.filter(score => score !== undefined).length === questions[day].length) {
//             // Calculate daily score
//             const dayScore = dailyScores.reduce((total, num) => total + num, 0);
//             allScores.push(dayScore); // Add to total scores
//             dailyScores = []; // Reset for next day
//         }
//     }

    
    

//     function showResults() {
//         const totalScore = allScores.reduce((acc, score) => acc + score, 0);
//         const meanScore = totalScore / allScores.length;

//         // Map the mean score to the output card
//         let finalMessage = "";
//         if (meanScore <= 10 & meanScore >= 28) {
//             finalMessage =  "You are at the border of depression. Take better care of yourself.";
//         } else if (meanScore < 28 & meanScore >= 35) {
//             finalMessage =  "Keep calm and keep doing what you think is best. Don't lose yourself!";
//         } else if (meanScore < 35 & meanScore >= 42) {
//             finalMessage = "You did well. Keep yourself motivated as always!";
//         } else if ( meanScore < 42 & meanScore <= 50) {
//             finalMessage = "You are alright. Keep going!";
//         } else {
//             finalMessage = "You seem to be depressed. Why not consult a psychologist? We have a helpline for you.";
//         }

//         // Display results
//         resultsContainer.textContent = `Your Mean Score: ${meanScore.toFixed(2)}. ${finalMessage}`;
//         quizContainer.style.display = 'none';
//         resultsContainer.style.display = 'block';

//         const resetButton = document.createElement('button');
//         resetButton.textContent = 'Reset';
//         resetButton.className = 'btn'; 
//         resultsContainer.appendChild(resetButton);
    
        
//         resetButton.addEventListener('click', () => {
//             // Reset the quiz logic
//             currentDayIndex = 1;
//             allScores = [];
//             localStorage.removeItem('currentDayIndex');
//             localStorage.removeItem('allScores');
    
//             // Reset UI for a new start
//             quizContainer.style.display = 'block';
//             resultsContainer.style.display = 'none';
//             resultsContainer.innerHTML = ''; // Clear the results
    
//             loadDayQuestions('day1');
//         });
//     }

//     function saveProgress() {
//         localStorage.setItem('currentDayIndex', currentDayIndex.toString());
//         localStorage.setItem('allScores', JSON.stringify(allScores));
//     }
    
//     nextButton.addEventListener('click', () => {
//         currentDayIndex++;
//         saveProgress(); // Save progress when moving to the next day
//         loadDayQuestions(`day${currentDayIndex}`);
//     });
    
//     finishButton.addEventListener('click', () => {
//         showResults();
//         localStorage(); // Optionally clear progress upon finishing
//     });
    

//     // function saveProgress() {
//     //     localStorage.setItem('currentDayIndex', currentDayIndex);
//     //     localStorage.setItem('allScores', JSON.stringify(allScores));
//     // }
    
//     // nextButton.addEventListener('click', () => {
//     //     currentDayIndex++;
//     //     loadDayQuestions(`day${currentDayIndex}`);
//     //     saveProgress(); // Save progress whenever the next button is clicked
//     // });
    
//     // finishButton.addEventListener('click', () => {
//     //     showResults();
//     //     saveProgress(); // Also save when finishing the quiz
//     // });

//     function loadProgress() {
//         const savedDayIndex = localStorage.getItem('currentDayIndex');
//         const savedScores = localStorage.getItem('allScores');
    
//         if (savedDayIndex) {
//             currentDayIndex = parseInt(savedDayIndex);
//             allScores = savedScores ? JSON.parse(savedScores) : [];
//             loadDayQuestions(`day${currentDayIndex}`);
//         } else {
//             // If there's no saved progress, start from the beginning
//             loadDayQuestions('day1');
//         }
//     }
    
//     // Call loadProgress at the start of your script to initialize the quiz with saved data or from the beginning
//     loadProgress();
    

//     // nextButton.addEventListener('click', () => {
//     //     currentDayIndex++;
//     //     loadDayQuestions(`day${currentDayIndex}`);
//     // });

//     // finishButton.addEventListener('click', () => {
//     //     showResults(); // Show the final results to the user
    
//     //     // Reset progress
//     //     localStorage.removeItem('currentDayIndex'); // Remove the saved day index
//     //     localStorage.removeItem('allScores'); // Remove the saved scores
    
//     //     // Reset variables
//     //     currentDayIndex = 1; // Reset to day 1
//     //     allScores = []; // Clear all scores
    
//     //     // Reset UI elements for a new start
//     //     quizContainer.style.display = 'block'; // Show the quiz container
//     //     resultsContainer.style.display = 'none'; // Hide the results container
//     //     resultsContainer.innerHTML = ''; // Clear any results displayed
    
//     //     // Reload the first day questions
//     //     loadDayQuestions('day1');
//     // });
    

//     // finishButton.addEventListener('click', showResults);

//     // Load the questions for the first day
//     loadDayQuestions('day1');
// //});
























// document.addEventListener('DOMContentLoaded', () => {
//     const quizContainer = document.getElementById('quiz-container');
//     const resultsContainer = document.getElementById('results-container');

//     const questions = {
//         'day1': [

//             'I feel bothered by things that dont usually bother me', 
//             'I often find myself comparing myself with others',
//             'I have noticed that I have been losing weight unusually', 
//             'I could not get going with the things that happened in the past',
//             'I dont find interest in the things that I normally do', 
//             'feel like I deserve everything just like everyone else',
//             'I can concentrate on the things that I normally do', 
//             'I feel content with life at the moment', 
//             'I dont feel alone',
//             'I am communicating and socialising as I normally do'
//             // Day 1 questions
//             // ... Add all questions for day 1
//         ],
//         'day2':
        
//         [
//             "I started communicating less than I normally do",
//             "I often space out",
//             "I often find myself crying for no specific reason",
//             "Does your heart beat faster than usual",
//             "I dont feel hopeful towards the future",
//             "I feel happy",
//             "I feel positive about myself",
//             "I feel like I sleep peacefully",
//             "I think that I have a healthy diet",
//             "I feel confident"
//         ],
        



//         'day3': [

//             "I dont feel like getting out of the house",
//             "I feel like life does not have its own meaning",
//             "I feel like I dont want to live longer",
//             "I easily get bored and cant concentrate in the things that I normally like doing",
//             "I stopped talking to people even those who I normally talk to",
//             "My life is pretty full",
//             "I have the courage to tackle the problems in the future",
//             "I dont feel like I have slowed down and I am at a steady pace",
//             "I feel like I can manage my stress levels",
//             "I have plans for the future"
            
//             // Day 3 questions
//             // ... Add all questions for day 3
//         ],
//         'day4': 

//             [
//                 "I feel like I am useful",
//                 "I dont feel like I am all alone",
//                 "I often feel positive",
//                 "I dont space out much and I am in the present",
//                 "I can put the things at past to rest and focus on the future",
//                 "I feel like I would be better off dead",
//                 "Do you feel like you have slowed down",
//                 "Do you feel the lack of energy and spirit?",
//                 "Do you feel restless",
//                 "Do you have trouble sleeping"
//             ],
            
           
//             // Day 4 questions
//             // ... Add all questions for day 4
        
//         'day5':
        
//         [
//             "I have high hopes toward the future",
//             "I feel excited for the next day",
//             "I feel like life has a purpose",
//             "I am not bothered by the smallest things",
//             "I feel like all my problems have solutions",
//             "Has your appetite increased",
//             "I have suicidal thoughts",
//             "I get tired for no reason",
//             "I often get lost in my own thoughts",
//             "I dont want to go out during the weekends"
//         ],
        


//         'day6': 

//         [
//             "My mind is clear as it used to be",
//             "I enjoy life",
//             "I have plans for the future",
//             "I feel like I want to live longer",
//             "I want to go out during the weekends",
//             "I feel like I dont have a purpose to go on",
//             "Life feels meaningless",
//             "I feel like I am all alone",
//             "Has your appetite decreased",
//             "I felt lonely even with people around me"
//         ],
        

//         'day7': 

//         [
//             "I felt like I dont feel good as other people do",
//             "I did not feel like eating",
//             "I over magnify things that I consider my flaws",
//             "I feel like everything I did was an effort",
//             "I slept more than I usually do",
//             "I feel energetic as I always do",
//             "I dont find myself comparing",
//             "I dont find myself crying often",
//             "I dont feel lonely",
//             "I often dont space out"
//         ]
        
//         // ... Repeat structure for days 2 through 7
    
//         // ... Repeat structure for days 2 through 7
//     };

//     const positiveQuestionsIndexes = { // Assuming the first question is index 0
//         'day1': [0,1,2,3,4 ],
//         'day2': [0,1,2,3,4 ],
//         'day3': [0,1,2,3,4 ],
//         'day4': [0,1,2,3,4 ],
//         'day5': [0,1,2,3,4 ],
//         'day6': [0,1,2,3,4 ],
//         'day7': [0,1,2,3,4 ],

//         // ... Repeat structure for days 2 through 7
//     };

//     const negativeQuestionsIndexes = {
//         'day1': [5,6,7,8,9 ],
//         'day2': [5,6,7,8,9 ],
//         'day3': [5,6,7,8,9 ],
//         'day4': [5,6,7,8,9 ],
//         'day5': [5,6,7,8,9 ],
//         'day6': [5,6,7,8,9 ],
//         'day7': [5,6,7,8,9 ],
        
//         // ... Repeat structure for days 2 through 7
//     };

//     let currentDay = 'day1';
//     let dailyScores = [];
//     let allScores = {
//         'positive': [],
//         'negative': []
//     };

//     function loadDayQuestions(day) {
//         const dayQuestions = questions[day];
//         quizContainer.innerHTML = ''; // Clear previous content

//         dayQuestions.forEach((question, index) => {
//             const questionDiv = document.createElement('div');
//             const isPositive = positiveQuestionsIndexes[day].includes(index);
//             questionDiv.className = isPositive ? 'question positive' : 'question negative';
//             questionDiv.textContent = question;
//             quizContainer.appendChild(questionDiv);

//             // Generate buttons for answers
//             const answers = ['Strongly agree', 'Agree', 'Neutral', 'Disagree', 'Strongly disagree'];
//             answers.forEach((answer, score) => {
//                 const button = document.createElement('button');
//                 button.textContent = answer;
//                 button.addEventListener('click', () => handleAnswer(day, index, isPositive, score + 1));
//                 quizContainer.appendChild(button);
//             });
//         });
//     }

//     function handleAnswer(day, index, isPositive, score) {
//         const adjustedScore = isPositive ? score : 6 - score; // Reverse score for negative questions
//         dailyScores[index] = adjustedScore; // Store the score based on the question index

//         if (dailyScores.length === questions[day].length) {
//             // All questions answered for the day
//             const dayScore = dailyScores.reduce((total, num) => total + num, 0);
//             if (isPositive) {
//                 allScores['positive'].push(dayScore);
//             } else {
//                 allScores['negative'].push(dayScore);
//             }
//             dailyScores = []; // Reset for the next day

//             if (currentDay === 'day7') {
//                 showResults();
//             } else {
//                 currentDay = 'day' + (parseInt(currentDay.replace('day', '')) + 1); // Increment day
//                 loadDayQuestions(currentDay);
//             }
//         }
//     }

//     function showResults() {
//         // Calculate the mean of totalScores
//         const meanScore = totalScores.reduce((acc, score) => acc + score, 0) / totalScores.length;
        
//         // Map the mean score to the range and output the corresponding message
//         let finalMessage = "";
//         if (meanScore >= 41) {
//             finalMessage = "You seem to be depressed. Why not consult a psychologist? We have a helpline for you. Phone no: +++++++";
//         } else if (meanScore >= 31) {
//             finalMessage = "You are at the border of depression. Take better care of yourself.";
//         } else if (meanScore >= 21) {
//             finalMessage = "Keep calm and keep doing what you think is best.";
//         } else if (meanScore >= 11) {
//             finalMessage = "You did well. Keep yourself motivated as always!";
//         } else {
//             finalMessage = "You are alright. Keep going!";
//         }

//         quizContainer.style.display = 'none';
//         resultsContainer.innerHTML = `<h1>Your Mean Score: ${meanScore.toFixed(2)}</h1><p>${finalMessage}</p>`;
//         resultsContainer.classList.remove('hide');
//     }

//     loadDayQuestions(currentDay);
// });
    

