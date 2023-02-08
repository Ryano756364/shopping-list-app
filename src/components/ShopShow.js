import './ShopShow.css'

function ShopShow({item, onDelete}){
    const onClickHandler = () => {
        onDelete(item.id);
    };
    
    return (
        <div className='shop-show'>
            {item.name}
            <div className='actions'>
                <button className='delete' onClick={onClickHandler}>
                    Remove
                </button>
            </div>
        </div>
    )
}

export default ShopShow;
