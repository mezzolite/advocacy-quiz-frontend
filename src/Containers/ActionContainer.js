import React, { Component } from 'react'
import ActionCard from '../Components/ActionCard'

class ActionContainer extends Component{

    state = {
        active: false
    }

    flipActive = () => {
        if(!this.state.active){
            this.setState({
                active: true
            })
        } else {
            this.setState({
                active: false
            })
        }
    }

    render(){
        return(
            <div className="action-container">
                {!this.state.active
                    ?(<><ActionCard 
                            action={this.props.actionOne} 
                            addActiveCard={this.props.addActiveCard} 
                            flipActive={this.flipActive}
                            addPoints={this.props.addPoints}
                            addActionClicks={this.props.addActionClicks}
                        />
                        <ActionCard 
                            action={this.props.actionTwo} 
                            addActiveCard={this.props.addActiveCard} 
                            flipActive={this.flipActive} 
                            addPoints={this.props.addPoints}
                            addActionClicks={this.props.addActionClicks}
                        />
                     </>)
                    :(<ActionCard 
                        activeCard={true} 
                        action={this.props.activeCard}
                        flipActive={this.flipActive}
                        continueGame={this.props.resetActiveCard}
                        showEndCard={this.props.showEndCard}
                        />)
                }
                
            </div>
        )
    }
}
export default ActionContainer