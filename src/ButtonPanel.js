import React from 'react';
import Button from './Button';

function ButtonPanel() {
    return (
        <div>
            <p>These buttons have the same provider as the first button, but are in the same instance</p>
            <Button/>
            <Button/>
            <br/><br/>
        </div>
    );
}

export default ButtonPanel;
