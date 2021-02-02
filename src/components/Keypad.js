import React from 'react'

function handlePassword() {
    console.log('Entering password...')
}

class Keypad extends React.Component {

    render() {
        return (
            <input type="password" onKeyUp={handlePassword}/>
        )
    }
}


export default Keypad
