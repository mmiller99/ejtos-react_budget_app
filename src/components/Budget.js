import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, currency } = useContext(AppContext);

    const changeBudget = (e) => {
        const new_budget = e.target.value;

        if(new_budget > 20000){
            alert("Budget cannot exceed $20000");
            return;
        }
/*
        if(new_budget < expenses){
            alert("Budget cannot be less than total spending.");

            return;
        }
*/
        else{
            dispatch({
                type: "SET_BUDGET",
                payload: new_budget
            })
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                    required='required'
                    type='number'
                    id='budget'
                    step='10'
                    value={budget}
                    style={{ marginLeft: '2rem' , size: 10}}
                    onChange={changeBudget}>
                </input>
            </span>
        </div>
    );
};

export default Budget;
