import React, { useState } from 'react';
import './App.css';
import { Item } from './Types';



const initialPosts: Promise<Array<Item>> = fetch('http://localhost:8080/list').then(res => res.json()).catch(err => console.log(err.message))

initialPosts.then(body => console.log(body))

const App = () => {
  const [items, setItems] = useState([
    'oranges', 'apples', 'banana', 'candy'
  ]);
  return (
    <div id='list-container'>
      <ListDisplay
        items={items}
        handleClick={(item) => setItems(items.filter(i => i !== item))}
      />
      <InputText
        handleSubmit={(item) => setItems(items.concat(item))}
      />
    </div>
  )
}

const ListItem = (props: { name: string, handleClick: (s: string) => void }) => (
  <li onClick={() => props.handleClick(props.name)}>{props.name}</li>
)

const ListDisplay = (props: { items: Array<string>, handleClick: (s: string) => void }) => {
  const items = props.items.map((item, i) =>
  (<ListItem
    key={i}
    name={item}
    handleClick={props.handleClick}
  />))

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
