import React from 'react';
import './menu-list-item.scss';
import meatIcon from "./category-icons/meat.svg";
import pizzaIcon from "./category-icons/pizza.svg";
import saladIcon from "./category-icons/salad.svg";
import { Link } from 'react-router-dom';
const MenuListItem = ({menuItem, onAddToCart}) => {//с пропсами приходит кусок данных с сервера
    //onAddToCart прийдет из меню листа
    
    
    const {title, price, url, category} = menuItem; // разобрали айтем по куслчкам и распихали для рендера
    const categoryIcon = (category) =>{
        switch(category){
            case "salads":
                return saladIcon;

            case "pizza":
                return pizzaIcon;

            case "meat":
                return meatIcon;

            default:
                return category
        }
    }

    return (
        
            <li className="menu__item">
                {/* линк по айдишнику */}
                <Link className="menu__link" to = {`/${menuItem.id}`}>
                    <img src={categoryIcon(category)} className="menu__item__category-icon" alt={category}></img>
                    <div className="menu__title">{title}</div>
                    <img className="menu__img" src={url} alt={title}></img>
                    <div className="menu__category">Category: <span>{category}</span></div>
                    <div className="menu__price">Price: <span>{price}$</span></div>
                </Link>
                    <button onClick={() => onAddToCart()} className="menu__btn">Add to cart</button>
                
            </li>
         
    )
}

export default MenuListItem;