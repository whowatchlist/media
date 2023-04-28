import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


const App = () => {
  const [items, setItems] = useState([
    'oranges', 'apples', 'banana', 'candy'
  ]);
  return (
    <div id='list-container'>
      <ListDisplay items={items} />
      <InputText handleSubmit={(item) => setItems(items.concat(item))} />
    </div>
  )
}

const ListItem = (props: { name: string }) => (<li>{props.name}</li>)

const ListDisplay = (props: { items: Array<string> }) => {
  const items = props.items.map((item, i) =>
    (<ListItem key={i} name={item} />))

  return (
    <ul>{items}</ul>
  )
}

const InputText = (props: { handleSubmit: (s: string) => void }) => {
  const [value, setValue] = useState('');
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleSubmit(value);
      setValue('');
    }}>
      <input type='text' value={value} onChange={e => setValue(e.target.value)} />
    </form>);
}


export default App;
