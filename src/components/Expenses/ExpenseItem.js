import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import ExpensesFilter from './ExpensesFilter';

const ExpenseItem = (props) => {

const [title, setTitle]=  useState(props.title);

console.log('ExpenseItem evaluated by React');

  const clickHandlre= ()=>{
   setTitle('Updated!');
    console.log(title);
  }

  return (
    <li>
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandlre}>Change Button</button>
   
    </Card>
    </li>
  );
}

export default ExpenseItem;
