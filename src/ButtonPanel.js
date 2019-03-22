import React from 'react';
import Button from './Button';

function ButtonPanel() {
    return (
        <div>
            <p>These buttons have the same provider as the first button, but are in the same instance</p>
            <p>Additionally, the parent holding these buttons is unaware of the actions/state from Context</p>
            <Button/>
            <Button/>
        </div>
    );
}

export default ButtonPanel;
