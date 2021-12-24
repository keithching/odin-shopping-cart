import { useState, useEffect } from 'react';
import bread from './assets/bread.jpeg';
import croissant from './assets/croissant.png';
import swissRoll from './assets/swiss-roll.jpeg';
import donut from './assets/donut.jpeg';
import './styles/Shop.css';
import uniqid from 'uniqid';

const Shop = () => {

    const shopItems = [
        {
            id: uniqid(),
            img: bread,
            title: 'bread',
            description: 'Classic tasty bread',
            numberOfPurchase: 0
        },
        {
            id: uniqid(),
            img: croissant,
            title: 'croissant',
            description: 'Beautiful croissant',
            numberOfPurchase: 0
        },
        {
            id: uniqid(),
            img: swissRoll,
            title: 'swiss roll',
            description: 'Smooth swiss roll',
            numberOfPurchase: 0
        },
        {
            id: uniqid(),
            img: donut,
            title: 'chocolate donut',
            description: 'highly recommended',
            numberOfPurchase: 0
        }
    ]

    const [ items, setItems ] = useState(shopItems);
    const [ cart, setCart ] = useState([]);
    const [ numberOfItems, setNumberOfItems ] = useState(0);

    useEffect(() => {

        setItems(prevItems => {
            let newItems = [...prevItems];
            newItems.forEach(newItem => {
                cart.forEach(cartItem => {
                    if (newItem === cartItem) {
                        newItem.numberOfPurchase = 0;
                    }
                });
            });
            return newItems;
        });

    },[cart]);



    const handleChange = (e) => {

        setItems(prevItems => {

            let newItems = [...prevItems];

            newItems.forEach(newItem => {
                if (newItem.id === e.target.id) {
                    newItem.numberOfPurchase = e.target.value;
                } 
            });

            return newItems;

        });
    };

    return (
        <div className="shopPage">
            <div className="shopSection">
                <div className="shopSectionTitle">Shop Items</div>
                <div className="shopSectionItems">
                    {items.map(item => {
                        return (
                            <div key={item.id}>
                                <ShopItem 
                                    item={item} 
                                    setItems={setItems} 
                                    setCart={setCart}
                                    setNumberOfItems={setNumberOfItems}
                                    handleChange={handleChange}
                                />
                            </div> 
                        );
                    })}
                </div>
            </div>
            <div className="cartSection">
                <div className="firstRow">
                    <i className="fas fa-shopping-bag"></i>
                    <p>{numberOfItems}</p>
                </div>
                <button>checkout</button>
            </div>
        </div>
    );

};

const ShopItem = (props) => {

    const { item, setItems, setCart, setNumberOfItems, handleChange } = props;

    return (
        <div className="shopItem">
            <img src={item.img} />
            <div className="itemTitle">{item.title}</div>
            <div className="itemDescription">{item.description}</div>
            <div className="entry_row">
                <DecrementButton item={item} setItems={setItems} />
                <input 
                    onChange={handleChange}
                    value={item.numberOfPurchase}
                    type="text"
                    id={item.id}
                />
                <IncrementButton item={item} setItems={setItems} />
            </div>
            <AddToCartButton item={item} setCart={setCart} setNumberOfItems={setNumberOfItems} /> 
        </div>
    );

}

const IncrementButton = (props) => {

    const { item, setItems } = props;

    return (
        <button onClick={() => {
            setItems(prevItems => {
                return prevItems.map(prevItem => { // update an array of objects
                    if (item.id === prevItem.id) {
                        return {
                            ...prevItem, // object spread
                            numberOfPurchase: prevItem.numberOfPurchase + 1 // change the property
                        };
                    }
                    return prevItem;
                });
            });
    }}>+</button>
    );

};

const DecrementButton = (props) => {

    const { item, setItems } = props;

    return (
        <button onClick={() => {
            setItems(prevItems => {
                return prevItems.map(prevItem => {
                    if (item.id === prevItem.id) {
                        return {
                            ...prevItem,
                            numberOfPurchase: prevItem.numberOfPurchase <= 0 ? 0 : prevItem.numberOfPurchase - 1
                        };
                    }
                    return prevItem;
                });
            });
        }}>-</button>
    );
};

const AddToCartButton = (props) => {

    const { item, setCart, setNumberOfItems } = props;

    return (
        <button 
            className="addToCart"
            onClick={() => {
                setCart(prevCart => prevCart.concat(item));
                setNumberOfItems(prevNumberOfItems => prevNumberOfItems + Number(item.numberOfPurchase));
            }}
        >
            Add to Cart
        </button>
  
    );

};



export default Shop;