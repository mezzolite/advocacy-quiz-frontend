import React, { Component } from 'react'
import Header from '../Components/Header'
import StartScreen from '../Components/StartScreen'
import ActionContainer from './ActionContainer'
import EndCard from '../Components/EndCard'
import FullActionsContainer from './FullActionsContainer'

const BASE_URL = "http://localhost:3000/advocacy_actions"

class Main extends Component {

    state = {
        actions: [],
        fullActions: [],
        activeComponent: "startScreen",
        points: 0,
        actionOne: null,
        actionTwo: null,
        activeCard: null,
        actionClicks: 0
    }

    componentDidMount(){
        fetch(BASE_URL)
            .then(response => response.json())
            .then(actions => this.setState({ actions }))
        fetch(BASE_URL)
            .then(response => response.json())
            .then(fullActions => this.setState({ fullActions }))
    }

    getActionOne = (array) => {
        const randomIndex = Math.floor(Math.random() * array.length)
        this.setState({
            actionOne: array[randomIndex]
        })
        array.splice(randomIndex, 1)
        this.setState({actions: array})
    }

    getActionTwo = (array) => {
        const randomIndex = Math.floor(Math.random() * array.length)
        this.setState({
            actionTwo: array[randomIndex]
        })
        array.splice(randomIndex, 1)
        this.setState({actions: array})
    }

    showAllActions = () => {
        this.setState({activeComponent: "fullActionsContainer"})
    }

    handleStartClick = () => {
        this.getActionOne(this.state.actions)
        this.getActionTwo(this.state.actions)

        this.setState({
            activeComponent: "actionContainer"
        })  
    }

    addActiveCard = (actionCard) => {
        this.setState({
            activeCard: actionCard
        })
    }

    resetActiveCard = (event) => {
        this.getActionOne(this.state.actions)
        this.getActionTwo(this.state.actions)

        this.setState({
            activeCard: null
        })
    }

    addPoints = (actionCard) => {
        this.setState({
            points: this.state.points += actionCard.rating
        })
    }

    setActiveComponentToEnd = () => {
        if(this.state.actions.length === 0 && this.state.actionClicks === 8){
            this.setState({
                activeComponent: "endCard"
            })
        }
    }

    addActionClicks = () => {
        this.setState({
            actionClicks: this.state.actionClicks += 1
        })
    }

    resetGame = () =>{
        this.setState({
            actions: [],
            copyActions: [],
            activeComponent: "startScreen",
            points: 0,
            actionOne: null,
            actionTwo: null,
            activeCard: null,
            actionClicks: 0
        })
        this.componentDidMount()
    }

    render(){
        return(
            <div className="main-container">
            <Header points={this.state.points} showAllActions={this.showAllActions} resetGame={this.resetGame}/>
            {this.state.activeComponent === "fullActionsContainer"
                ?(<FullActionsContainer actions={this.state.fullActions} />)
                : null
            }
            {this.state.activeComponent === "startScreen"
                ? (<StartScreen handleStartClick={this.handleStartClick}/>) 
                : null
            }
            {this.state.activeComponent === "actionContainer"
                ? (<ActionContainer 
                        actionOne={this.state.actionOne} 
                        actionTwo={this.state.actionTwo} 
                        addActiveCard={this.addActiveCard} 
                        activeCard={this.state.activeCard} 
                        resetActiveCard={this.resetActiveCard}
                        addPoints={this.addPoints}
                        showEndCard={this.setActiveComponentToEnd}
                        addActionClicks={this.addActionClicks}
                    />)
                : null
            }
            {this.state.activeComponent === "endCard" 
                ?(<EndCard points={this.state.points} actions={this.state.fullActions} resetGame={this.resetGame}/>)
                : null
            }
            </div>
        )
    }
    
}

export default Main