import React from 'react'

function handleFocus() {
    console.log('Good!')
}

function handleBlur() {
    console.log('Hey! Eyes on me!')
}

class EyesOnMe extends React.Component {
    render() {
        return (
           <button onFocus={handleFocus} onBlur={handleBlur}>
               Button
           </button>
        )
    }
}


export default EyesOnMe