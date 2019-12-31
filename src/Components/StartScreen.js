import React from 'react'

const StartScreen = ({handleStartClick}) => {

    const handleClick = () => {
        handleStartClick()
    }
    
    return(
        <div className="start-screen">
            <p>
                Take the quiz to see how much you know about the most effective strategies for reaching your elected officials and affecting policy. 
            </p>
            <p>
                Each action has an effectiveness rating of 1 through 5. 1 is least effective, 5 is most effective. 
            </p>
            <button className="quiz-start" onClick={handleClick}>Start the Quiz</button>
        </div>
    )
}
export default StartScreen