import './ShopEdit.css';
import {useState} from 'react';

function ShopEdit({item, onEdit}){
    const [name, setName] = useState(item.name);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    //keeps track of save button
    const handleSaveName = (event) => {
        event.preventDefault();
        onEdit(name.id, name);  //uses name piece of state that user is updating
    };

    return (
        <form className='shop-edit' onSubmit={handleSaveName} >
            <label>Grocery Name</label>
            <input className='input' value={name} onChange={handleNameChange}/>
            <button className='button is-primary' onClick={handleNameChange}>
                Save
            </button>
        </form>
    )
}

export default ShopEdit;
