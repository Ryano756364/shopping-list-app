import {useState} from 'react';
import './App.css';
import ShopCreate from './components/ShopCreate';

function App(){
  const [shop, setShop] = useState([]); //Setting up empty array so we can build shopping list

  const onCreateShop = (item) => {
    console.log('Add item with name: ', item);
  };
  
  return (
    <div>
      <ShopCreate onCreate={onCreateShop}/>
    </div>
  )
}

export default App;
