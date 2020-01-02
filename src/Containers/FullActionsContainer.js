import React from 'react'
import FullActionCard from '../Components/FullActionCard'

const FullActionsContainer = ({actions}) => {

    const showAllActions = () => {
        return actions.map(action => {
            return <FullActionCard action={action} key={action.id} />
        })
    }

    return(
        <div className="full-actions-container">
            {showAllActions()}
        </div>
    )
}
export default FullActionsContainer