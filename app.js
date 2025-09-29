class IQTestApp {
    constructor() {
        this.testData = {
            title: "Comprehensive Cognitive Assessment Test",
            description: "A medically consistent IQ test based on modern CHC theory covering fluid reasoning, crystallized intelligence, visual-spatial processing, working memory, processing speed, and quantitative reasoning.",
            domains: {
                "Fluid Reasoning (Gf)": "Pattern recognition, logical reasoning, novel problem solving",
                "Crystallized Intelligence (Gc)": "Vocabulary, general knowledge, acquired information", 
                "Visual-Spatial Processing (Gv)": "Visual patterns, spatial relationships, mental rotation",
                "Working Memory (Gwm)": "Memory span, mental manipulation, cognitive flexibility",
                "Processing Speed (Gs)": "Speed of cognitive processing, attention to detail",
                "Quantitative Reasoning (Gq)": "Mathematical reasoning, numerical operations"
            },
            total_questions: 40,
            questions: [
                {
                    id: 1,
                    domain: "Fluid Reasoning (Gf)",
                    question: "Which number comes next in the sequence: 2, 6, 18, 54, ?",
                    options: ["108", "162", "124", "180"],
                    correct_answer: 1,
                    explanation: "Each number is multiplied by 3: 2×3=6, 6×3=18, 18×3=54, 54×3=162"
                },
                {
                    id: 2,
                    domain: "Crystallized Intelligence (Gc)",
                    question: "What is the capital of Australia?",
                    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
                    correct_answer: 2,
                    explanation: "Canberra is the capital city of Australia, not Sydney or Melbourne which are larger cities"
                },
                {
                    id: 3,
                    domain: "Visual-Spatial Processing (Gv)",
                    question: "If you rotate a 'b' 180 degrees clockwise, what letter do you get?",
                    options: ["p", "d", "q", "b"],
                    correct_answer: 2,
                    explanation: "Rotating 'b' 180 degrees gives you 'q'"
                },
                {
                    id: 4,
                    domain: "Working Memory (Gwm)",
                    question: "Rearrange these letters to form a word: T-A-C-O-E-N",
                    options: ["OCEAN", "CANOE", "CONTE", "CANTO"],
                    correct_answer: 1,
                    explanation: "T-A-C-O-E-N can be rearranged to spell CANOE"
                },
                {
                    id: 5,
                    domain: "Quantitative Reasoning (Gq)",
                    question: "If 3x + 7 = 22, what is the value of x?",
                    options: ["3", "4", "5", "6"],
                    correct_answer: 2,
                    explanation: "3x = 22 - 7 = 15, so x = 15/3 = 5"
                },
                {
                    id: 6,
                    domain: "Fluid Reasoning (Gf)",
                    question: "All roses are flowers. Some flowers are red. Therefore:",
                    options: ["All roses are red", "Some roses might be red", "No roses are red", "All flowers are roses"],
                    correct_answer: 1,
                    explanation: "Since some flowers are red and all roses are flowers, some roses might be red"
                },
                {
                    id: 7,
                    domain: "Crystallized Intelligence (Gc)",
                    question: "Which word is most similar in meaning to 'ephemeral'?",
                    options: ["Eternal", "Temporary", "Beautiful", "Complex"],
                    correct_answer: 1,
                    explanation: "Ephemeral means lasting for a very short time, so temporary is the closest meaning"
                },
                {
                    id: 8,
                    domain: "Processing Speed (Gs)",
                    question: "Count the number of triangles in this description: 'Three overlapping triangles where each triangle shares one side with another'",
                    options: ["3", "6", "7", "9"],
                    correct_answer: 2,
                    explanation: "Three main triangles plus four smaller triangles formed by intersections = 7 total"
                },
                {
                    id: 9,
                    domain: "Working Memory (Gwm)",
                    question: "If MONDAY = 123456 and DAY = 456, what does MOODY equal?",
                    options: ["12256", "12346", "12336", "12245"],
                    correct_answer: 0,
                    explanation: "M=1, O=2, O=2, D=4, Y=6, so MOODY = 12246"
                },
                {
                    id: 10,
                    domain: "Fluid Reasoning (Gf)",
                    question: "A penguin walks into a library and asks for fish. The librarian says 'This is a library!' The penguin whispers, 'Sorry... do you have any fish?' What logical fallacy is the penguin demonstrating?",
                    options: ["False premise", "Misunderstanding context", "Circular reasoning", "Ad hominem"],
                    correct_answer: 1,
                    explanation: "The penguin misunderstood what whispering in a library means vs. what a library actually provides"
                },
                {
                    id: 11,
                    domain: "Quantitative Reasoning (Gq)",
                    question: "If a pizza has 8 slices and you eat 3 slices, what fraction of the pizza remains?",
                    options: ["3/8", "5/8", "1/2", "2/3"],
                    correct_answer: 1,
                    explanation: "8 - 3 = 5 slices remaining out of 8 total = 5/8"
                },
                {
                    id: 12,
                    domain: "Visual-Spatial Processing (Gv)",
                    question: "A cat is stuck in a tree and keeps meowing 'Help!' If you view the tree from above and the cat is on the north side, which direction should the fire truck approach from to have the best angle?",
                    options: ["North", "South", "East", "West"],
                    correct_answer: 1,
                    explanation: "Approaching from the south gives the clearest access to the north side of the tree"
                },
                {
                    id: 13,
                    domain: "Crystallized Intelligence (Gc)",
                    question: "What is the chemical symbol for gold?",
                    options: ["Go", "Gd", "Au", "Ag"],
                    correct_answer: 2,
                    explanation: "Au is the chemical symbol for gold, from the Latin word 'aurum'"
                },
                {
                    id: 14,
                    domain: "Working Memory (Gwm)",
                    question: "A squirrel collects nuts in this order: acorn, walnut, pecan, acorn, walnut, pecan. If the pattern continues, what is the 10th nut?",
                    options: ["Acorn", "Walnut", "Pecan", "Chestnut"],
                    correct_answer: 0,
                    explanation: "Pattern repeats every 3: positions 1,4,7,10 are acorns. The 10th nut is an acorn"
                },
                {
                    id: 15,
                    domain: "Processing Speed (Gs)",
                    question: "A duck walks into a pharmacy and asks for chapstick. When asked how he'll pay, he says 'Just put it on my bill.' How many words in this joke contain the letter 'i'?",
                    options: ["4", "5", "6", "7"],
                    correct_answer: 2,
                    explanation: "Words with 'i': into, chapstick, asked, he'll, it, bill = 6 words"
                },
                {
                    id: 16,
                    domain: "Fluid Reasoning (Gf)",
                    question: "If all unicorns are magical and some magical creatures grant wishes, what can we conclude?",
                    options: ["All unicorns grant wishes", "Some unicorns might grant wishes", "No unicorns grant wishes", "Magic isn't real"],
                    correct_answer: 1,
                    explanation: "Since unicorns are magical and some magical creatures grant wishes, some unicorns might grant wishes"
                },
                {
                    id: 17,
                    domain: "Quantitative Reasoning (Gq)",
                    question: "A hamster running on a wheel completes 50 rotations in 2 minutes. At this rate, how many rotations in 7 minutes?",
                    options: ["150", "175", "200", "225"],
                    correct_answer: 1,
                    explanation: "50 rotations/2 minutes = 25 rotations/minute. 7 minutes × 25 = 175 rotations"
                },
                {
                    id: 18,
                    domain: "Visual-Spatial Processing (Gv)",
                    question: "A cow sees a UFO and decides to investigate. If the cow is facing north and turns 90 degrees clockwise twice, which direction is it now facing?",
                    options: ["North", "East", "South", "West"],
                    correct_answer: 2,
                    explanation: "North → 90° clockwise → East → 90° clockwise → South"
                },
                {
                    id: 19,
                    domain: "Crystallized Intelligence (Gc)",
                    question: "Who wrote the novel '1984'?",
                    options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "H.G. Wells"],
                    correct_answer: 1,
                    explanation: "George Orwell wrote '1984', published in 1949"
                },
                {
                    id: 20,
                    domain: "Working Memory (Gwm)",
                    question: "A chicken tries to cross the road but gets distracted by corn kernels: 3, then 7, then 11. If this pattern continues, how many kernels at the 5th spot?",
                    options: ["15", "17", "19", "21"],
                    correct_answer: 2,
                    explanation: "Pattern increases by 4 each time: 3, 7, 11, 15, 19. The 5th spot has 19 kernels"
                },
                {
                    id: 21,
                    domain: "Fluid Reasoning (Gf)",
                    question: "What comes next in this pattern: ○ ◐ ● ◑ ?",
                    options: ["○", "◐", "●", "◑"],
                    correct_answer: 0,
                    explanation: "The pattern shows moon phases in order, returning to full circle"
                },
                {
                    id: 22,
                    domain: "Processing Speed (Gs)",
                    question: "A sloth decides to race a cheetah but insists on a 24-hour head start. How many letters are in 'twenty-four hours'?",
                    options: ["14", "16", "18", "20"],
                    correct_answer: 1,
                    explanation: "Counting letters in 'twenty-four hours': t-w-e-n-t-y-f-o-u-r-h-o-u-r-s = 16 letters"
                },
                {
                    id: 23,
                    domain: "Quantitative Reasoning (Gq)",
                    question: "What is 15% of 80?",
                    options: ["10", "12", "14", "16"],
                    correct_answer: 1,
                    explanation: "15% of 80 = 0.15 × 80 = 12"
                },
                {
                    id: 24,
                    domain: "Visual-Spatial Processing (Gv)",
                    question: "A fish swimming in a rectangular aquarium sees itself in the mirror on the side wall. If the fish is at the center and the aquarium is 4 feet wide, how far does the fish appear to be from its reflection?",
                    options: ["2 feet", "4 feet", "6 feet", "8 feet"],
                    correct_answer: 1,
                    explanation: "The fish is 2 feet from the mirror, so its reflection appears 2 feet on the other side = 4 feet total distance"
                },
                {
                    id: 25,
                    domain: "Crystallized Intelligence (Gc)",
                    question: "What does the idiom 'barking up the wrong tree' mean?",
                    options: ["Making noise", "Pursuing the wrong course", "Climbing trees", "Being confused"],
                    correct_answer: 1,
                    explanation: "The idiom means pursuing the wrong course of action or making a false assumption"
                },
                {
                    id: 26,
                    domain: "Working Memory (Gwm)",
                    question: "A parrot learns words in this order: Hello, Goodbye, Please, Thank you, Sorry. If asked to repeat them backwards, what's the 3rd word?",
                    options: ["Please", "Thank you", "Sorry", "Goodbye"],
                    correct_answer: 0,
                    explanation: "Backwards order: Sorry, Thank you, Please, Goodbye, Hello. The 3rd word is Please"
                },
                {
                    id: 27,
                    domain: "Fluid Reasoning (Gf)",
                    question: "If A = 1, B = 2, C = 3... what does DOG equal?",
                    options: ["26", "29", "28", "31"],
                    correct_answer: 0,
                    explanation: "D = 4, O = 15, G = 7. Total: 4 + 15 + 7 = 26"
                },
                {
                    id: 28,
                    domain: "Quantitative Reasoning (Gq)",
                    question: "A snail travels at 0.03 mph and needs to go 0.12 miles to reach lettuce. How long will it take?",
                    options: ["2 hours", "3 hours", "4 hours", "5 hours"],
                    correct_answer: 2,
                    explanation: "Time = Distance/Speed = 0.12/0.03 = 4 hours"
                },
                {
                    id: 29,
                    domain: "Visual-Spatial Processing (Gv)",
                    question: "If you fold a square piece of paper in half, then in half again, how many layers thick is it now?",
                    options: ["2", "3", "4", "8"],
                    correct_answer: 2,
                    explanation: "Each fold doubles the thickness: 1 → 2 → 4 layers"
                },
                {
                    id: 30,
                    domain: "Processing Speed (Gs)",
                    question: "A bee buzzing around a garden visits flowers in alphabetical order. How many vowels are in 'chrysanthemum'?",
                    options: ["3", "4", "5", "6"],
                    correct_answer: 1,
                    explanation: "Vowels in 'chrysanthemum': y, a, e, u = 4 vowels"
                },
                {
                    id: 31,
                    domain: "Crystallized Intelligence (Gc)",
                    question: "Which planet is known as the 'Red Planet'?",
                    options: ["Venus", "Mars", "Jupiter", "Saturn"],
                    correct_answer: 1,
                    explanation: "Mars is known as the Red Planet due to iron oxide (rust) on its surface"
                },
                {
                    id: 32,
                    domain: "Working Memory (Gwm)",
                    question: "A confused GPS tells you to turn left, right, left, right, left. If you started facing north, which direction are you facing now?",
                    options: ["North", "East", "South", "West"],
                    correct_answer: 3,
                    explanation: "North→left→West→right→North→left→West→right→North→left→West"
                },
                {
                    id: 33,
                    domain: "Fluid Reasoning (Gf)",
                    question: "Which shape doesn't belong: Circle, Square, Triangle, Hexagon, Rectangle?",
                    options: ["Circle", "Square", "Triangle", "Rectangle"],
                    correct_answer: 0,
                    explanation: "Circle is the only shape without straight sides"
                },
                {
                    id: 34,
                    domain: "Quantitative Reasoning (Gq)",
                    question: "A pizza place offers a discount: Buy 2 pizzas at $12 each, get the 3rd for half price. What's the total for 3 pizzas?",
                    options: ["$30", "$32", "$34", "$36"],
                    correct_answer: 0,
                    explanation: "$12 + $12 + $6 = $30"
                },
                {
                    id: 35,
                    domain: "Visual-Spatial Processing (Gv)",
                    question: "A spider builds a web in the corner of a cube-shaped room. How many corners does a cube have?",
                    options: ["6", "8", "10", "12"],
                    correct_answer: 1,
                    explanation: "A cube has 8 corners (vertices)"
                },
                {
                    id: 36,
                    domain: "Processing Speed (Gs)",
                    question: "A cat knocks over a glass of milk and it spills in the shape of the word 'CATASTROPHE'. How many letters contain curved lines?",
                    options: ["4", "5", "6", "7"],
                    correct_answer: 2,
                    explanation: "Letters with curves: C, A, T, A, S, T, R, O, P, H, E. Curved: C, A(2), S, O, P = 6"
                },
                {
                    id: 37,
                    domain: "Crystallized Intelligence (Gc)",
                    question: "What is the study of earthquakes called?",
                    options: ["Geology", "Seismology", "Meteorology", "Oceanography"],
                    correct_answer: 1,
                    explanation: "Seismology is the scientific study of earthquakes"
                },
                {
                    id: 38,
                    domain: "Working Memory (Gwm)",
                    question: "A monkey eating bananas follows this pattern: eat 1, throw 2, eat 1, throw 2. After 20 bananas, how many were eaten?",
                    options: ["6", "7", "8", "10"],
                    correct_answer: 1,
                    explanation: "Pattern: eat, throw, throw, eat, throw, throw... Every 3 bananas, 1 is eaten. 20÷3 = 6.67, so 6 complete cycles (6 eaten) + 2 remaining bananas (eat 1) = 7 eaten"
                },
                {
                    id: 39,
                    domain: "Fluid Reasoning (Gf)",
                    question: "If some cats are dogs, and all dogs are animals, what must be true?",
                    options: ["All cats are animals", "Some cats are animals", "No cats are animals", "All animals are cats"],
                    correct_answer: 1,
                    explanation: "If some cats are dogs, and all dogs are animals, then some cats must be animals"
                },
                {
                    id: 40,
                    domain: "Quantitative Reasoning (Gq)",
                    question: "A turtle and rabbit race 100 meters. The turtle goes 1 m/min, rabbit goes 50 m/min but takes a 90-minute nap. Who wins?",
                    options: ["Turtle", "Rabbit", "Tie", "Neither finishes"],
                    correct_answer: 1,
                    explanation: "Turtle: 100 minutes. Rabbit: 2 minutes running + 90 minutes napping = 92 minutes total. Rabbit wins."
                }
            ],
            scoring: {
                total_possible: 40,
                iq_calculation: "Standard IQ scoring with mean=100, SD=15",
                time_limit_minutes: 60
            }
        };

        this.currentQuestion = 0;
        this.answers = [];
        this.startTime = null;
        this.endTime = null;
        this.timerInterval = null;
        this.timeRemaining = 60 * 60; // 60 minutes in seconds

        this.initializeElements();
        this.bindEvents();
        
        // Initialize timer display
        this.updateTimerDisplay();
    }

    initializeElements() {
        // Screens
        this.welcomeScreen = document.getElementById('welcome-screen');
        this.questionScreen = document.getElementById('question-screen');
        this.resultsScreen = document.getElementById('results-screen');

        // Welcome screen elements
        this.startBtn = document.getElementById('start-test-btn');

        // Question screen elements
        this.questionCounter = document.getElementById('question-counter');
        this.domainIndicator = document.getElementById('domain-indicator');
        this.timerDisplay = document.getElementById('timer-display');
        this.progressFill = document.getElementById('progress-fill');
        this.questionText = document.getElementById('question-text');
        this.answerOptions = document.getElementById('answer-options');
        this.nextBtn = document.getElementById('next-question-btn');

        // Results screen elements
        this.iqScore = document.getElementById('iq-score');
        this.iqInterpretation = document.getElementById('iq-interpretation');
        this.correctCount = document.getElementById('correct-count');
        this.timeTaken = document.getElementById('time-taken');
        this.accuracyPercent = document.getElementById('accuracy-percent');
        this.domainResults = document.getElementById('domain-results');
        this.analysisText = document.getElementById('analysis-text');
        this.retakeBtn = document.getElementById('retake-test-btn');
    }

    bindEvents() {
        // Ensure elements exist before binding
        if (this.startBtn) {
            this.startBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Start button clicked');
                this.startTest();
            });
        }

        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.nextQuestion();
            });
        }

        if (this.retakeBtn) {
            this.retakeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.resetTest();
            });
        }

        // Answer selection with event delegation
        if (this.answerOptions) {
            this.answerOptions.addEventListener('click', (e) => {
                e.preventDefault();
                const answerBtn = e.target.closest('.answer-btn');
                if (answerBtn) {
                    this.selectAnswer(answerBtn);
                }
            });
        }
    }

    startTest() {
        console.log('Starting test...');
        this.startTime = new Date();
        this.showScreen('question');
        this.startTimer();
        this.displayQuestion();
    }

    startTimer() {
        this.updateTimerDisplay();
        this.timerInterval = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();
            
            if (this.timeRemaining <= 0) {
                this.endTest();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        if (this.timerDisplay) {
            this.timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            
            // Change color when time is running low
            if (this.timeRemaining <= 300) { // 5 minutes
                this.timerDisplay.style.color = 'var(--color-error)';
            }
        }
    }

    displayQuestion() {
        const question = this.testData.questions[this.currentQuestion];
        
        // Update question counter and progress
        if (this.questionCounter) {
            this.questionCounter.textContent = `Question ${this.currentQuestion + 1} of ${this.testData.total_questions}`;
        }
        if (this.domainIndicator) {
            this.domainIndicator.textContent = question.domain;
        }
        if (this.progressFill) {
            this.progressFill.style.width = `${((this.currentQuestion + 1) / this.testData.total_questions) * 100}%`;
        }

        // Display question
        if (this.questionText) {
            this.questionText.textContent = question.question;
        }

        // Display answer options
        if (this.answerOptions) {
            const answerBtns = this.answerOptions.querySelectorAll('.answer-btn');
            answerBtns.forEach((btn, index) => {
                const optionText = btn.querySelector('.option-text');
                if (optionText && question.options[index]) {
                    optionText.textContent = question.options[index];
                }
                btn.classList.remove('selected');
            });
        }

        // Reset next button
        if (this.nextBtn) {
            this.nextBtn.disabled = true;
            this.nextBtn.textContent = this.currentQuestion === this.testData.total_questions - 1 ? 'Finish Test' : 'Next Question';
        }
    }

    selectAnswer(selectedBtn) {
        // Remove previous selection
        if (this.answerOptions) {
            this.answerOptions.querySelectorAll('.answer-btn').forEach(btn => {
                btn.classList.remove('selected');
            });
        }

        // Add selection to clicked button
        selectedBtn.classList.add('selected');

        // Store answer
        const optionIndex = parseInt(selectedBtn.dataset.option);
        this.answers[this.currentQuestion] = optionIndex;

        // Enable next button
        if (this.nextBtn) {
            this.nextBtn.disabled = false;
        }
    }

    nextQuestion() {
        if (this.currentQuestion < this.testData.total_questions - 1) {
            this.currentQuestion++;
            this.displayQuestion();
        } else {
            this.endTest();
        }
    }

    endTest() {
        this.endTime = new Date();
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
        this.calculateResults();
        this.showScreen('results');
    }

    calculateResults() {
        // Calculate correct answers
        let correctAnswers = 0;
        const domainScores = {};

        // Initialize domain scores
        Object.keys(this.testData.domains).forEach(domain => {
            domainScores[domain] = { correct: 0, total: 0 };
        });

        // Count correct answers and domain performance
        this.testData.questions.forEach((question, index) => {
            const domain = question.domain;
            domainScores[domain].total++;

            if (this.answers[index] === question.correct_answer) {
                correctAnswers++;
                domainScores[domain].correct++;
            }
        });

        // Calculate IQ score
        const accuracy = correctAnswers / this.testData.total_questions;
        const zScore = this.calculateZScore(accuracy);
        const iqScore = Math.round(100 + (15 * zScore));

        // Calculate time taken
        const timeTakenMs = this.endTime - this.startTime;
        const timeTakenMinutes = Math.floor(timeTakenMs / 60000);
        const timeTakenSeconds = Math.floor((timeTakenMs % 60000) / 1000);

        // Display results
        if (this.iqScore) this.iqScore.textContent = iqScore;
        if (this.iqInterpretation) this.iqInterpretation.textContent = this.getIQInterpretation(iqScore);
        if (this.correctCount) this.correctCount.textContent = `${correctAnswers}/${this.testData.total_questions}`;
        if (this.timeTaken) this.timeTaken.textContent = `${timeTakenMinutes}:${timeTakenSeconds.toString().padStart(2, '0')}`;
        if (this.accuracyPercent) this.accuracyPercent.textContent = `${Math.round(accuracy * 100)}%`;

        // Display domain breakdown
        this.displayDomainResults(domainScores);

        // Generate analysis
        if (this.analysisText) {
            this.analysisText.textContent = this.generateAnalysis(iqScore, accuracy, domainScores, timeTakenMinutes);
        }
    }

    calculateZScore(accuracy) {
        // Assuming normal distribution with population parameters
        // This is a simplified approach - real IQ tests use more sophisticated norming
        const mean = 0.5; // Assume 50% average accuracy
        const stdDev = 0.15; // Standard deviation
        return (accuracy - mean) / stdDev;
    }

    getIQInterpretation(iqScore) {
        if (iqScore >= 130) return "Very Superior";
        if (iqScore >= 120) return "Superior";
        if (iqScore >= 110) return "High Average";
        if (iqScore >= 90) return "Average";
        if (iqScore >= 80) return "Low Average";
        if (iqScore >= 70) return "Below Average";
        return "Well Below Average";
    }

    displayDomainResults(domainScores) {
        if (!this.domainResults) return;
        
        this.domainResults.innerHTML = '';

        Object.entries(domainScores).forEach(([domain, scores]) => {
            const percentage = scores.total > 0 ? Math.round((scores.correct / scores.total) * 100) : 0;
            
            const domainDiv = document.createElement('div');
            domainDiv.className = 'domain-result';
            domainDiv.innerHTML = `
                <div class="domain-name">${domain}</div>
                <div class="domain-score">
                    <div class="domain-percentage">${percentage}%</div>
                    <div class="domain-bar">
                        <div class="domain-fill" style="width: ${percentage}%"></div>
                    </div>
                </div>
            `;
            this.domainResults.appendChild(domainDiv);
        });
    }

    generateAnalysis(iqScore, accuracy, domainScores, timeTaken) {
        let analysis = "";

        // Overall performance
        if (iqScore >= 120) {
            analysis += "Your performance demonstrates exceptional cognitive abilities. ";
        } else if (iqScore >= 110) {
            analysis += "Your cognitive abilities are well above average. ";
        } else if (iqScore >= 90) {
            analysis += "Your cognitive abilities fall within the normal range. ";
        } else {
            analysis += "Your performance suggests areas for cognitive development. ";
        }

        // Time analysis
        if (timeTaken < 30) {
            analysis += "You completed the test efficiently, showing good processing speed. ";
        } else if (timeTaken < 45) {
            analysis += "You took a moderate amount of time, suggesting careful consideration of answers. ";
        } else {
            analysis += "You used most of the allotted time, which may indicate thoroughness or processing challenges. ";
        }

        // Domain strengths and weaknesses
        let strongestDomain = "";
        let weakestDomain = "";
        let highestScore = -1;
        let lowestScore = 101;

        Object.entries(domainScores).forEach(([domain, scores]) => {
            const percentage = scores.total > 0 ? (scores.correct / scores.total) * 100 : 0;
            if (percentage > highestScore) {
                highestScore = percentage;
                strongestDomain = domain;
            }
            if (percentage < lowestScore) {
                lowestScore = percentage;
                weakestDomain = domain;
            }
        });

        if (strongestDomain && weakestDomain && strongestDomain !== weakestDomain) {
            analysis += `Your strongest area appears to be ${strongestDomain} (${Math.round(highestScore)}%), while ${weakestDomain} (${Math.round(lowestScore)}%) may benefit from additional development. `;
        }

        analysis += "Remember that cognitive abilities can be developed through practice and learning.";

        return analysis;
    }

    showScreen(screenName) {
        // Hide all screens
        const allScreens = document.querySelectorAll('.screen');
        allScreens.forEach(screen => {
            screen.classList.remove('active');
        });

        // Show the requested screen
        switch(screenName) {
            case 'welcome':
                if (this.welcomeScreen) this.welcomeScreen.classList.add('active');
                break;
            case 'question':
                if (this.questionScreen) this.questionScreen.classList.add('active');
                break;
            case 'results':
                if (this.resultsScreen) this.resultsScreen.classList.add('active');
                break;
        }
    }

    resetTest() {
        this.currentQuestion = 0;
        this.answers = [];
        this.startTime = null;
        this.endTime = null;
        this.timeRemaining = 60 * 60;
        
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }

        if (this.timerDisplay) {
            this.timerDisplay.style.color = 'var(--color-primary)';
        }
        this.updateTimerDisplay();
        this.showScreen('welcome');
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing IQ Test App');
    window.iqTestApp = new IQTestApp();
});