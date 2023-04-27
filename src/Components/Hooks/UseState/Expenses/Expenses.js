import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  let { items } = props;

  return (
    <div>
      <Card className='expenses'>
        {

          items?.map((item, ind) => {
            return <ExpenseItem
              title={item.title}
              amount={item.amount}
              date={item.date}
              key={item.id}
            />
          })

        }

      </Card>
    </div>
  );
};

export default Expenses;
