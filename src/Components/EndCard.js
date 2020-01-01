import React from 'react'
import FullActionCard from './FullActionCard'

const EndCard = ({points, actions}) => {
    
    const bestActions = () => {
        actions.filter(action => action.rating === 5).map(action=> {
            return <FullActionCard action={action} key={action.id} />
        })
        
    }
    
    return(
        <div className="end-card">
            {points > 30
                ? <>
                    <h2>Congratulations, you're an advocacy expert!</h2>
                    <p>Your efficacy score is <b>{points}</b>. You're obviously familiar with the best methods to get your voice heard and affect policy.</p>
                    <div className="full-action-cards-container">
                        <h4>Here are some of the most efficacious ways to reach your elected officials:</h4>
                        {bestActions}
                    </div>
                </>
                : <h2></h2>
            }
        </div>
    )
}
export default EndCard