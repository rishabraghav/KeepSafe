import './App.css';
import Input from './Components/Input';
import Collection from './Components/Collection';
import { useState } from 'react';
import {generateDate} from './Components/Dates';

function App() {
  const [name, setName] = useState();
  const [contact, setContact] = useState();
  const [amount, setAmount] = useState();
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


  

  const handleSubmit = (event) => {
    event.preventDefault();
    const person = {
      name: name,
      contact: contact,
      amount: amount,
      date: generateDate(),
    }

    setCollection([...collection, person]);

  }

  return (
    <div className="App h-screen bg-forth flex flex-col items-center">
      <nav className='h-10 w-full mb-8  bg-primary text-4xl font-semibold font-serif text-secondary'>Finance.Co</nav>
      <div className='bg-third w-4/5 rounded-xl flex items-center flex-col p-4'>
        <Input setAmount={setAmount} setContact={setContact} setName={setName} handleSubmit={handleSubmit} />
        <Collection collection={collection} amount1={amount1} amount2={amount2} amount3={amount3} amount4={amount4} amount5={amount5} amount6={amount6} amount7={amount7} amount8={amount8} amount9={amount9} amount10={amount10}/>
      </div>
    </div>
  );
}

export default App;
