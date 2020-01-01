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
                    <p>Effectiveness Rating: {this.props.action.rating}</p>
                    <a href={this.props.action.source} alt="Further Information"></a>
                    </>)

                }             
            </div>
        )
    }
}
export default ActionCard