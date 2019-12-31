import React, { Component } from 'react'

class ActionCard extends Component {
    
    state = {
        front: true
    }

    flipCard = () => {
        this.setState({front: false})
    }

    render(){
        return(
            <div className="actionCard" onClick={this.flipCard}>
                {this.state.front
                ? (<h3>{this.props.action.action_text}</h3>)
                : (<>
                    <h3>{this.props.action.action_description}</h3>
                    <p>Effective Rating: {this.props.action.rating}</p>
                    </>)

                }             
            </div>
        )
    }
}
export default ActionCard