import './ShopShow.css';
import {useState} from 'react';
import ShopEdit from './ShopEdit';

function ShopShow({item, onDelete}){
    const [edit, setEdit] = useState(false);

    const handleEditClick = () => {
        setEdit(!edit);
    };

    const handleDeleteClick = () => {
        onDelete(item.id);
    };

    let content = <h3>{item.name}</h3>;
    if (edit) {
        content = <ShopEdit item={item}/>;
    }
    
    return (
        <div className='shop-show'>

            <div>{content}</div>

            <div className='actions'>
                <button className='edit' onClick={handleEditClick}>
                    Edit
                </button>
                <button className='delete' onClick={handleDeleteClick}>
                    Remove
                </button>
            </div>
        </div>
    )
}

export default ShopShow;
