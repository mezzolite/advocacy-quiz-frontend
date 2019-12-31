import React from 'react'

const Header = ({ points }) => {
    return(
        <header>
            <h1>Efficacy in Advocacy</h1>
            <h2>Do you know what the most effective legislative advocacy strategies are?</h2>
            <aside>
                <p>Efficacy Points: {points}</p>
            </aside>
        </header>
    )
}
export default Header