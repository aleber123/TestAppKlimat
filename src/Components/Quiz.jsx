import React, { useState, useRef } from 'react';
import questions from './QuizData'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from '../Fonts.module.css'; 
import Container from 'react-bootstrap/Container';
import Hero from './Hero';
import MedelSvensson from './MedelSvensson';
import Skeptiker from './Skeptiker';
import IngetResultat from './IngetResultat';


function Quiz() {
     // Spara användarens svar, aktuell fråga och visa resultat
    const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const resultRef = useRef(null);
    const scrollToResult = () => {
        if (resultRef.current) {
            resultRef.current.scrollIntoView({ behavior: 'smooth' }); // Skrolla för att se resultat
        }
    };
// Funktion för att hantera val av svaralternativ
    const handleAnswerSelection = (selectedOptionPoints) => {
        const updatedAnswers = [...userAnswers];
        updatedAnswers[currentQuestionIndex] = selectedOptionPoints;
        setUserAnswers(updatedAnswers);
    };
 // Funktion för att gå till nästa fråga
    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };
 // Funktion för att hoppa över en fråga och gå till nästa
    const handleSkip = () => {
        const updatedAnswers = [...userAnswers];
        updatedAnswers[currentQuestionIndex] = 0; // lägg till noll för ej ifyllda
        setUserAnswers(updatedAnswers);

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };
 // Funktion för att gå till föregående fråga
    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };
 // Funktion för att räkna totala poäng och kategorisera användaren
    const calculateTotalScore = () => {
        let totalScore = 0;

        for (let i = 0; i < userAnswers.length; i++) {
            if (userAnswers[i] !== undefined) {
                totalScore += userAnswers[i]; 
            }
        }
 // Funktion för att kategorisera användaren baserat på poäng
        const categorizeUser = (totalScore) => {
            if (totalScore >= 0 && totalScore <= 10) {
                return <IngetResultat />;
            } else if (totalScore >= 11 && totalScore <= 16) {
                return <Hero />;
            } else if (totalScore >= 17 && totalScore <= 22) {
                return <MedelSvensson />;
            } else if (totalScore >= 23 && totalScore <= 29) {
                return <Skeptiker />;
            }
        };

        const userCategory = categorizeUser(totalScore);

        return {
            totalScore,
            userCategory,
        };
    };
 // Funktion för att visa resultatet
    const handleShowResult = () => {
        setShowResult(true);
        scrollToResult(); 
    };

    const calculateProgress = () => {
        const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
        return progress;
    };
 // Funktion för att rendera processsindikatorn
    const renderProgressBar = () => {
        const progress = calculateProgress();

        return (
            <div className="progress" style={{ backgroundColor: "#FDFAF2" }}>
                <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${progress}%`, backgroundColor: "#304742" }}
                    aria-valuenow={progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                ></div>
            </div>
        );
    };
 // Funktion för att rendera frågan och svarsalternativen
    const renderQuestion = () => {
        const question = questions[currentQuestionIndex];

        return (
            <div className='d-flex justify-content-center' style={{ backgroundColor: "#BCD0A5" }}>
               
                <div className="card m-5 p-5" style={{ minHeight: "300px", backgroundColor: "#FDFAF2", width: "50%" }}>
                    <div className=" text-center">
                        <h2 className={`${styles.poppins} ${styles.bold} ${styles.h2}`} style={{ color: "#304742" }} >KlimatQuiz: Matvanor</h2>
                    </div>
                    {renderProgressBar()}

                    <div className="card-body">
                        <div className="text-center">
                            <p className={`${styles.openSans} ${styles.p} ${styles.bold} `} style={{ color: "#304742" }}>Fråga {currentQuestionIndex + 1} of {questions.length}  </p>
                        </div>
                        <div className='p-5' style={{ backgroundColor: "#FDFAF2", width: "" }}>
                            <p className={`${styles.openSans} ${styles.p} ${styles.bold} `}>  {(currentQuestionIndex + 1) + ". " + question.question} </p>
                        </div>
                        {question.options.map((option, optionIndex) => (
                            <div key={optionIndex} className="form-check pt-3 m-5">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name={`question${currentQuestionIndex}`}
                                    id={`flexRadioDefault${optionIndex + 1}`}
                                    value={option.points}
                                    checked={userAnswers[currentQuestionIndex] === option.points}
                                    onChange={(e) => handleAnswerSelection(parseInt(e.target.value))}
                                />
                                <label className="form-check-label" htmlFor={`flexRadioDefault${optionIndex + 1}`}>
                                    <p className={`${styles.openSans} ${styles.p}`}>  {option.text}</p>
                                </label>
                            </div>
                        ))}
                        
                    </div>
                    <div >
                        <Container className='d-flex justify-content-between' >
                            <button style={{ backgroundColor: "#304742", color: "#FDFAF2", width: "8rem", height: "5rem" }} onClick={handlePrevious} disabled={currentQuestionIndex === 0} className="bi bi-arrow-left">
                                <p>Tillbaka</p>
                            </button>
                            {currentQuestionIndex === questions.length - 1 ? (
                                <button
                                    style={{ backgroundColor: "#304742", color: "#FDFAF2", width: "8rem", height: "5rem" }}
                                    onClick={handleShowResult}
                                    className='bi bi-arrow-right'
                                >
                                    <p>Se resultat</p>
                                </button>
                            ) : (
                                <button style={{ backgroundColor: "#304742", color: "#FDFAF2", width: "8rem", height: "5rem" }} onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1} className='bi bi-arrow-right'>
                                    <p>Nästa fråga</p>
                                </button>
                            )}
                        </Container>
                    </div>
                </div>
            </div>
        );
    };

    const { totalScore, userCategory } = calculateTotalScore();

    return (
        <div>
            {renderQuestion()}
            {showResult && (
                <div ref={resultRef}>
                    <p>{userCategory}</p>
                
                </div>
            )}
        </div>
    );
}

export default Quiz;
