import React from 'react'
import FullActionCard from './FullActionCard'

const Header = ({ points, showAllActions, resetGame }) => {
    
    const handleActionsClick = () => {
        showAllActions()
    }

    const handleHomeClick = () => {
        resetGame()
    }
    
    return(
        <header>
            <nav>
                <button className="all-actions-button" onClick={handleActionsClick}>See All Advocacy Actions</button>
                <button className="home-button" onClick={handleHomeClick}>Home</button>
            </nav>
            <h1>EFFICACY IN ADVOCACY</h1>
            {/* <h2>Do you know what the most effective legislative advocacy strategies are?</h2> */}
            <aside>
                <p>Efficacy Points: {points}</p>
            </aside>
        </header>
    )
}
export default Header