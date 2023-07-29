import React, { useState, useEffect } from "react";
import {nextMonth, currentDateFormatted} from './Dates';

const Collection = ({ amount1,
    amount2,
    amount3,
    amount4,
    amount5,
    amount6,
    amount7,
    amount8,
    amount9,
    amount10,
    collection }) => {
        
    const [show, setShow] = useState(false);

    const open = () => {
        setShow(!show);
    }
    useEffect(() => {
        
      }, [show]);

    
    const getClassNameForDate = (nextMonthDate, amount2) => {
        if (currentDateFormatted < nextMonthDate && nextMonthDate <= currentDateFormatted + 3 * 86400000 && amount2 === 0) {
          return "bg-orange-500";
        } else if (currentDateFormatted >= nextMonthDate && amount2 === 0) {
          return "bg-red-500";
        } else {
          return "";
        }
      };

    return (
        <div className="w-11/12 p-4">
            {collection.map((item) => (
                <div className="bg-primary w-full rounded-md mb-4 flex p-6 flex-col relative">
                    <div className="flex flex-row justify-between">
                        <h1>{item.name}</h1>
                        <h2>{item.contact}</h2>
                        <h3>₹{item.amount}</h3>

                    </div>
                    {show && <div className="flex items-start flex-col mt-8">
                        <p className="text-sm ">{item.date}</p>
                        <p className={`text-xs ${getClassNameForDate(nextMonth(item.date, 1), amount1)}`}> 1) {nextMonth(item.date, 1)}: <span>{amount1}</span></p>
                        <p className={`text-xs ${getClassNameForDate(nextMonth(item.date, 2), amount2)}`}> 2) {nextMonth(item.date, 2)}: <span>{amount2}</span></p>
                        <p className={`text-xs ${getClassNameForDate(nextMonth(item.date, 3), amount3)}`}> 3) {nextMonth(item.date, 3)}: <span>{amount3}</span></p>
                        <p className={`text-xs ${getClassNameForDate(nextMonth(item.date, 4), amount4)}`}> 4) {nextMonth(item.date, 4)}: <span>{amount4}</span></p>
                        <p className={`text-xs ${getClassNameForDate(nextMonth(item.date, 5), amount5)}`}> 5) {nextMonth(item.date, 5)}: <span>{amount5}</span></p>
                        <p className={`text-xs ${getClassNameForDate(nextMonth(item.date, 6), amount6)}`}> 6) {nextMonth(item.date, 6)}: <span>{amount6}</span></p>
                        <p className={`text-xs ${getClassNameForDate(nextMonth(item.date, 7), amount7)}`}> 7) {nextMonth(item.date, 7)}: <span>{amount7}</span></p>
                        <p className={`text-xs ${getClassNameForDate(nextMonth(item.date, 8), amount8)}`}> 8) {nextMonth(item.date, 8)}: <span>{amount8}</span></p>
                        <p className={`text-xs ${getClassNameForDate(nextMonth(item.date, 9), amount9)}`}> 9) {nextMonth(item.date, 9)}: <span>{amount9}</span></p>
                        <p className={`text-xs ${getClassNameForDate(nextMonth(item.date, 10), amount10)}`}> 10) {nextMonth(item.date, 10)}: <span>{amount10}</span></p>
                        <p className="text-sm ">Total</p>
                        <img className="place-self-end" width="24" height="24" src="https://img.icons8.com/plumpy/24/create-new.png" alt="create-new" />
                    </div>}
                    <button onClick={open} className="absolute rounded-full bg-secondary w-7 h-7 text-white flex place-content-center -bottom-3 place-self-center">+</button>
                </div>
            ))}

        </div>
    );
}

export default Collection;



