import './ShopList.css';
import ShopShow from './ShopShow';

function ShopList({shop, onDelete}){
    const renderedItems = shop.map((item) => {
        return <ShopShow onDelete={onDelete} key={item.id} item={item}/>;
    });

    return (
        <div className='shop-list'>
            {renderedItems}
        </div>
    )
}

export default ShopList;
