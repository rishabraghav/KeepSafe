import './App.css';
import Input from './Components/Input';
import Collection from './Components/Collection';
import { useEffect, useState } from 'react';
import { generateDate } from './Components/Dates';

function App() {
  const [name, setName] = useState();
  const [contact, setContact] = useState();
  const [amount, setAmount] = useState();
  const [date, setDate] = useState(generateDate());
  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const [amount3, setAmount3] = useState(0);
  const [amount4, setAmount4] = useState(0);
  const [amount5, setAmount5] = useState(0);
  const [amount6, setAmount6] = useState(0);
  const [amount7, setAmount7] = useState(0);
  const [amount8, setAmount8] = useState(0);
  const [amount9, setAmount9] = useState(0);
  const [amount10, setAmount10] = useState(0);
  const [collection, setCollection] = useState([]);
  // const [personData, setPersonData] = useState({});
  const [indexOfPerson, setIndexOfPerson] = useState();

  const [edit, setEdit] = useState(false);

  useEffect(() => {
    console.log("colection:", collection);
  }, [collection])



  const editAmounts = (index, name, contact, amount, date, amount1, amount2, amount3, amount4, amount5, amount6, amount7, amount8, amount9, amount10) => {
    setEdit(!edit);
    setIndexOfPerson(index);
    // setPersonData({name, contact, amount, date,  amount1, amount2, amount3, amount4, amount5, amount6, amount7, amount8, amount9, amount10});
    setName(name);
    setContact(contact);
    setAmount(amount);
    setDate(date);
    setAmount1(amount1);
    setAmount2(amount2);
    setAmount3(amount3);
    setAmount4(amount4);
    setAmount5(amount5);
    setAmount6(amount6);
    setAmount7(amount7);
    setAmount8(amount8);
    setAmount9(amount9);
    setAmount10(amount10);
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const person = {
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
    setCollection([...collection, person]);
    setName("");
    setContact("");
    setAmount("");
    setDate(generateDate());
  }

  return (
    <div className="App h-screen bg-forth flex flex-col items-center font-serif">
      <nav className='h-10 w-full mb-8  bg-primary text-4xl font-semibold font-serif text-secondary'>Finance.Co</nav>
      <div className='bg-third w-4/5 rounded-xl flex items-center flex-col p-4'>
        <Input name={name} contact={contact} amount={amount} setAmount={setAmount} setContact={setContact} setName={setName} handleSubmit={handleSubmit} />
        <Collection edit={edit} setEdit={setEdit} editAmounts={editAmounts}
          collection={collection} setCollection={setCollection} indexOfPerson={indexOfPerson}
          name={name} setName={setName}
          contact={contact} setContact={setContact}
          amount={amount} setAmount={setAmount}
          date={date} setDate={setDate}
          amount1={amount1} setAmount1={setAmount1}
          amount2={amount2} setAmount2={setAmount2}
          amount3={amount3} setAmount3={setAmount3}
          amount4={amount4} setAmount4={setAmount4}
          amount5={amount5} setAmount5={setAmount5}
          amount6={amount6} setAmount6={setAmount6}
          amount7={amount7} setAmount7={setAmount7}
          amount8={amount8} setAmount8={setAmount8}
          amount9={amount9} setAmount9={setAmount9}
          amount10={amount10} setAmount10={setAmount10} />
      </div>
    </div>
  );
}

export default App;
