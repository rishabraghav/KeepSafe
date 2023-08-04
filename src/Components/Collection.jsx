import React, { useState } from "react";
import { nextMonth, currentDateFormatted, generateDate } from './Dates';

const Collection = ({ editAmounts, edit, setEdit,
    name, setName,
    contact, setContact,
    amount, setAmount,
    date, setDate,
    amount1, setAmount1,
    amount2, setAmount2,
    amount3, setAmount3,
    amount4, setAmount4,
    amount5, setAmount5,
    amount6, setAmount6,
    amount7, setAmount7,
    amount8, setAmount8,
    amount9, setAmount9,
    amount10, setAmount10,
    collection, setCollection, indexOfPerson }) => {



    const [clickedIndex, setClickedIndex] = useState(null);

    const handleReadMore = (index) => {
        if (clickedIndex === index) {
            setClickedIndex(null); // Close the details if the same button is clicked
        } else {
            setClickedIndex(index); // Set the index of the clicked item to open its details
        }
    }
    const handleEdit = (event) => {
        event.preventDefault();
        const updatedPerson = {
            name: name,
            contact: contact,
            amount: amount,
            date: date,
            amount1: amount1,
            amount2: amount2,
            amount3: amount3,
            amount4: amount4,
            amount5: amount5,
            amount6: amount6,
            amount7: amount7,
            amount8: amount8,
            amount9: amount9,
            amount10: amount10,
        }
        const updatedCollection = [...collection];
        updatedCollection[indexOfPerson] = updatedPerson;

        setCollection(updatedCollection);
        setName();
        setContact();
        setAmount();
        setDate(generateDate());
        setAmount1(0);
        setAmount2(0);
        setAmount3(0);
        setAmount4(0);
        setAmount5(0);
        setAmount6(0);
        setAmount7(0);
        setAmount8(0);
        setAmount9(0);
        setAmount10(0);
        closeEdit();
    }

    const closeEdit = () => {
        setEdit(!edit);
    }

    const getClassNameForDate = (nextMonthDate, amount) => {
        if (currentDateFormatted < nextMonthDate && nextMonthDate <= currentDateFormatted + 3 * 86400000 && !amount) {
            return "bg-orange-500";
        } else if (currentDateFormatted >= nextMonthDate && !amount) {
            return "bg-red-500";
        } else {
            return "";
        }
    };

    return (
        <div className="w-11/12 p-4">
            {collection.map((item, index) => (
                <div className="bg-primary w-full rounded-md mb-4 flex p-6 flex-col relative" key={index}>
                    <div className="flex flex-row justify-between">
                        <h1>{item.name}</h1>
                        <h2>{item.contact}</h2>
                        <h3>₹{item.amount}</h3>

                    </div>
                    {clickedIndex === index && <div className="flex items-start flex-col mt-8">
                        <p className="text-sm ">{item.date}</p>
                        <p className={`text-xs w-full flex justify-between ${getClassNameForDate(nextMonth(item.date, 1), amount1)}`}> 1) {nextMonth(item.date, 1)}: <span>{item.amount1}(1)</span></p>
                        <p className={`text-xs w-full flex justify-between ${getClassNameForDate(nextMonth(item.date, 2), amount2)}`}> 2) {nextMonth(item.date, 2)}: <span>{item.amount2}(2)</span></p>
                        <p className={`text-xs w-full flex justify-between ${getClassNameForDate(nextMonth(item.date, 3), amount3)}`}> 3) {nextMonth(item.date, 3)}: <span>{item.amount3}(3)</span></p>
                        <p className={`text-xs w-full flex justify-between ${getClassNameForDate(nextMonth(item.date, 4), amount4)}`}> 4) {nextMonth(item.date, 4)}: <span>{item.amount4}(4)</span></p>
                        <p className={`text-xs w-full flex justify-between ${getClassNameForDate(nextMonth(item.date, 5), amount5)}`}> 5) {nextMonth(item.date, 5)}: <span>{item.amount5}(5)</span></p>
                        <p className={`text-xs w-full flex justify-between ${getClassNameForDate(nextMonth(item.date, 6), amount6)}`}> 6) {nextMonth(item.date, 6)}: <span>{item.amount6}(6)</span></p>
                        <p className={`text-xs w-full flex justify-between ${getClassNameForDate(nextMonth(item.date, 7), amount7)}`}> 7) {nextMonth(item.date, 7)}: <span>{item.amount7}(7)</span></p>
                        <p className={`text-xs w-full flex justify-between ${getClassNameForDate(nextMonth(item.date, 8), amount8)}`}> 8) {nextMonth(item.date, 8)}: <span>{item.amount8}(8)</span></p>
                        <p className={`text-xs w-full flex justify-between ${getClassNameForDate(nextMonth(item.date, 9), amount9)}`}> 9) {nextMonth(item.date, 9)}: <span>{item.amount9}(9)</span></p>
                        <p className={`text-xs w-full flex justify-between ${getClassNameForDate(nextMonth(item.date, 10), amount10)}`}> 10) {nextMonth(item.date, 10)}: <span>{amount10}(10)</span></p>
                        <p className="text-sm ">Total</p>
                        <img onClick={() => { editAmounts(index, item.name, item.contact, item.amount, item.date, item.amount1, item.amount2, item.amount3, item.amount4, item.amount5, item.amount6, item.amount7, item.amount8, item.amount9, item.amount10) }} className="place-self-end cursor-pointer hover:scale-110" width="24" height="24" src="https://img.icons8.com/plumpy/24/create-new.png" alt="create-new" />
                    </div>}

                    <button onClick={() => { handleReadMore(index) }} className="absolute rounded-full hover:scale-110 bg-secondary w-7 h-7 text-white flex place-content-center -bottom-3 place-self-center">+</button>
                </div>
            ))}

            {edit &&
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-trans">
                    <div className="border w-1/2 h-auto bg-third rounded-2xl">
                        <div className="flex place-content-start p-2">
                            <span className="cursor-pointer m-1 p-1 hover:scale-110 font-serif font-extrabold bg-red-500 rounded-full h-3 w-3" onClick={closeEdit}></span>
                        </div>
                        <form className="flex flex-col m-6">
                            <input onChange={(e) => { setName(e.target.value) }} value={name} className="m-1 rounded-md pl-1" placeholder="Name" />
                            <input onChange={(e) => { setContact(e.target.value) }} value={contact} className="m-1 rounded-md pl-1" placeholder="Contact" />
                            <input onChange={(e) => { setAmount(e.target.value) }} value={amount} className="m-1 rounded-md pl-1" placeholder="Amount" />
                            <input onChange={(e) => { setDate(e.target.value) }} value={date} className="m-1 rounded-md pl-1" placeholder="Date" />
                            <input onChange={(e) => { setAmount1(e.target.value) }} value={amount1 > 0 ? amount1 : null} className="m-1 rounded-md pl-1" placeholder="Installment1" />
                            <input onChange={(e) => { setAmount2(e.target.value) }} value={amount2 > 0 ? amount2 : null} className="m-1 rounded-md pl-1" placeholder="Installment2" />
                            <input onChange={(e) => { setAmount3(e.target.value) }} value={amount3 > 0 ? amount3 : null} className="m-1 rounded-md pl-1" placeholder="Installment3" />
                            <input onChange={(e) => { setAmount4(e.target.value) }} value={amount4 > 0 ? amount4 : null} className="m-1 rounded-md pl-1" placeholder="Installment4" />
                            <input onChange={(e) => { setAmount5(e.target.value) }} value={amount5 > 0 ? amount5 : null} className="m-1 rounded-md pl-1" placeholder="Installment5" />
                            <input onChange={(e) => { setAmount6(e.target.value) }} value={amount6 > 0 ? amount6 : null} className="m-1 rounded-md pl-1" placeholder="Installment6" />
                            <input onChange={(e) => { setAmount7(e.target.value) }} value={amount7 > 0 ? amount7 : null} className="m-1 rounded-md pl-1" placeholder="Installment7" />
                            <input onChange={(e) => { setAmount8(e.target.value) }} value={amount8 > 0 ? amount8 : null} className="m-1 rounded-md pl-1" placeholder="Installment8" />
                            <input onChange={(e) => { setAmount9(e.target.value) }} value={amount9 > 0 ? amount9 : null} className="m-1 rounded-md pl-1" placeholder="Installment9" />
                            <input onChange={(e) => { setAmount10(e.target.value) }} value={amount10 > 0 ? amount10 : null} className="m-1 rounded-md pl-1" placeholder="Installment10" />
                            <button onClick={handleEdit} className="m-1 pl-1 mt-2 bg-secondary active:bg-primary h-8 rounded-full w-1/2 place-self-center text-white">Submit</button>
                        </form>
                    </div>
                </div>
            }
        </div>
    );
}

export default Collection;



