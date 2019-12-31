import React, { Component } from 'react'
import Header from '../Components/Header'
import StartScreen from '../Components/StartScreen'
import ActionContainer from './ActionContainer'

const BASE_URL = "http://localhost:3000/advocacy_actions"

class Main extends Component {

    state = {
        actions: [],
        activeComponent: "startScreen",
        points: 0,
        actionOne: null,
        actionTwo: null
    }

    componentDidMount(){
        fetch(BASE_URL)
            .then(response => response.json())
            .then(actions => this.setState({ actions }))
    }

    getActionOne = (array) => {
        const randomIndex = Math.floor(Math.random() * array.length)
        this.setState({
            actionOne: array[randomIndex]
        })
        const activeAction = array.splice(randomIndex, 1)
        this.setState({actions: array})
    }

    getActionTwo = (array) => {
        const randomIndex = Math.floor(Math.random() * array.length)
        this.setState({
            actionTwo: array[randomIndex]
        })
        const activeAction = array.splice(randomIndex, 1)
        this.setState({actions: array})
    }

    handleStartClick = () => {
        this.getActionOne(this.state.actions)
        this.getActionTwo(this.state.actions)

        this.setState({activeComponent: "actionContainer"})
    }

    render(){
        return(
            <div className="main-container">
            <Header points={this.state.points}/>
            {this.state.activeComponent === "startScreen"
                ? (<StartScreen handleStartClick={this.handleStartClick}/>) 
                : (<ActionContainer actionOne={this.state.actionOne} actionTwo={this.state.actionTwo}/>)
            }
            </div>
        )
    }
    
}

export default Main