import React from 'react'

const FullActionCard = ({action}) => {
    return(
        <div className="action-card">
            <h3>{action.action_text}</h3>
            <h3>{action.action_description}</h3>
            <p>Effectiveness Rating: {action.rating}</p>
            <a href={action.source} target="_blank" rel="noopener noreferrer">Get Further Information Here</a>
        </div>
    )
}
export default FullActionCard