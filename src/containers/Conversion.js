import React from "react";
import {Button} from 'react-bootstrap';

const Conversion = () => {

    const [currentNumber, setCurrentNumber] = React.useState(0)
    const [btnSwitch, setButtonSwitch] = React.useState(true)

    const handleClick = () => {
        setCurrentNumber(Math.floor(Math.random() * 100 + 1))
    }

    const styles = {
        display: btnSwitch ? "inline" : "none"
    }

    const hideButton = () => {
        
        setButtonSwitch(!btnSwitch)
    }

    return (

    <div className='conversion'>
        <h1 className='conversion__heading'>
            Hello
        </h1>
        <div className="converstion_body">
            <Button style={styles} variant="secondary" onClick={handleClick}>Generate Random Number</Button>{' '}
            <Button ariant="primary" onClick={hideButton}>Toggle Button</Button>{' '}
            
        </div>
        <div className="conversion_number">
            <p>{currentNumber}</p>  
        </div>
    </div>
    );
    }

export default Conversion;