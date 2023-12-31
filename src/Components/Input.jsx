import React from "react";

const Input = ({name, contact, amount, setName, setContact, setAmount, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center w-2/4 mb-8">
            <input value={name} className="w-full m-1 h-8 p-2 rounded-md" onChange={(e)=> {setName(e.target.value)}}  placeholder="Name"/>
            <input value={contact} className="w-full m-1 h-8 p-2 rounded-md" onChange={(e)=> {setContact(e.target.value)}}  placeholder="Contact"/>
            <input value={amount} className="w-full m-1 h-8 p-2 rounded-md" onChange={(e)=> {setAmount(e.target.value)}}  placeholder="Amount" required/>
            <button className="rounded-full bg-secondary w-1/2 m-1 h-10 text-white font-serif active:bg-primary" >Submit</button>
        </form>
        );
}

export default Input;