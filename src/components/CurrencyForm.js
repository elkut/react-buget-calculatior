import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyForm = (props) => {
    const { dispatch } = useContext(AppContext);

    const submitEvent = (event) => {
        const selectedSign = event.target.value; // Use value directly from the event

        // Dispatch the action with the selected sign
        dispatch({
            type: 'CHG_CURRENCY',
            payload: { sign: selectedSign },
        });
    };

    return (
        <div>
            <select className="custom-select" id="currencySelection" onChange={submitEvent} style={{ backgroundColor: 'green', color: 'white' }}>
                <option value="" disabled selected>Currency ($ Dollar)</option> {/* Updated for better practice */}
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        </div>
    );
};

export default CurrencyForm;
