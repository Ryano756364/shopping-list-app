import {useState} from 'react';
import './App.css';
import ShopCreate from './components/ShopCreate';
import ShopList from './components/ShopList';

function App(){
  const [shop, setShop] = useState([]); //empty array to build shopping list

  //Component to delete shopping list item
  const deleteItemById = (id) => {
    //Use filter function to return a new copy of the array minus the id we don't object to equal to
    const updatedShop = shop.filter((item) => {
      return item.id !== id;
    });

    setShop(updatedShop);  //checks if state is different and will re-render if so
  };

  const onCreateShop = (item) => {
    const updatedShop = [
      ...shop,
      {id: Math.round(Math.random() * 10000), //Not a guarantee there won't be duplicates (normally bad)
      name: item} //rarely does React assign id; normally server side
    ];
    setShop(updatedShop);
  };
  
  return (
    <div className='app'>
      <ShopList shop={shop} onDelete={deleteItemById}/>
      <ShopCreate onCreate={onCreateShop}/>
    </div>
  )
}

export default App;
