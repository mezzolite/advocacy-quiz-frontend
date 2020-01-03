import React from 'react'
import FullActionCard from './FullActionCard'

const EndCard = ({points, actions, resetGame}) => {
    
    const bestActions = () => {
       return actions.filter(action => action.rating === 5).map(action=> {
            return <FullActionCard action={action} key={action.id} />
        }) 
    }

    const handleClick = () => {
        resetGame()
    }
    
    return(
        <div className="end-card-container">
            {points > 30
                ? <div className="end-card">
                    <h2>Congratulations, you're an advocacy expert!</h2>
                    <p>Your efficacy score is <b>{points}</b>. You're obviously familiar with the best methods to get your voice heard and affect policy.</p>
                    <h4>Here are some of the most efficacious ways to reach your elected officials:</h4>
                    <div className="full-action-cards-container">
                        {bestActions()}
                    </div>
                    <button onClick={handleClick}>Restart Game</button>
                </div>
                : <div className="end-card">
                    <h2>You're almost there!</h2>
                    <p>Your efficacy score is <b>{points}</b>. While you know a lot about effective methods of legislative advocacy, some methods are better than others. Be sure to brush up on the most effective methods and use them in your advocacy.</p>
                    <h4>Here are some of the most efficacious ways to reach your elected officials:</h4>
                    <div className="full-action-cards-container">
                        {bestActions()}
                    </div>
                    <button onClick={handleClick}>Restart Game</button>
                </div>
            }
        </div>
    )
}
export default EndCard