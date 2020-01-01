import React, { Component } from 'react'

class ActionCard extends Component {
    
    state = {
        front: true
    }

    flipCard = () => {
        this.props.addActiveCard(this.props.action)
        this.props.flipActive()
        this.props.addPoints(this.props.action)
        this.props.addActionClicks()
    }

    continueGame = (event) => {
        this.props.continueGame()
        this.props.flipActive()
        this.props.showEndCard()
    }


    render(){
        return(
            <div className="action-card">
                {!this.props.activeCard
                ? (<h3 onClick={this.flipCard}>{this.props.action.action_text}</h3>)
                : (<>
                    <h3>{this.props.action.action_description}</h3>
                    <p>Effectiveness Rating: {this.props.action.rating}</p>
                    <a href={this.props.action.source} target="_blank" rel="noopener noreferrer">Get Further Information Here</a>
                    <button onClick={this.continueGame}>Continue Quiz</button>
                    </>)

                }             
            </div>
        )
    }
}
export default ActionCard