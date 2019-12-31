import React, { Component } from 'react'
import ActionCard from '../Components/ActionCard'

const ActionContainer = ({actionOne, actionTwo}) => {


        return(
            <div className="action-container">
                <ActionCard action={actionOne}/>
                <ActionCard action={actionTwo}/>
            </div>
        )
}
export default ActionContainer