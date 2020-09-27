//ЭТА СТРАНИЦА ПОЛНОСТЬЮ КОПИРУЕТ МЕНЮ ЛИСТ ТОЛЬКО ОТРИСОВЫВАЕТ 1 АЙТЕМ
//ЭТОТ АЙТЕМ ПОЛУЧАЕМ ИЗ АЙДИШНИКА И ОТРИСОВЫВАЕМ В ДРУГОЙ ВЕРСТКЕ
//КАЖДАЯ КАРТОЧКА menuListItem - ЛИНК КОТОРЫЙ ПЕРЕДАЕТ СВОЙ АЙДИШНИК В АДРЕС ПРОПИСАННЫЙ В App 
//ИЗ APP ПРИХОДИТ match.params.id ВМЕСТЕ С ПРОПСАМИ
//ПЕРЕБИРАЕМ МАССИВ СО ВСЕМИ АЙТЕМАМИ И СРАВНИВАЕМ АЙДИШНИКИ ----- ОТРИСОВЫВЫАЕМ ТО ЧТО СОВПАЛО
import React, {Component} from 'react';
import { connect } from 'react-redux';
import WithRestoService from '../hoc/';
import Spinner from '../spinner';
import {menuLoaded, menuRequested, menuError} from '../../actions';

import './itemPage.css';

class ItemPage extends Component {

    componentDidMount() {
        if( this.props.menuItems.length === 0){
            this.props.menuRequested();

            const {RestoService} = this.props;
            RestoService.getMenuItems()
                .then(res => this.props.menuLoaded(res))
                .catch(error => this.props.menuError());
        }
    }

    render() {
        if(this.props.loading) {
            return (
                <div className = "item_page">
                    <Spinner/>
                </div>
            )
        }
        //ну тут сравнивается айдишник каждого элемента по порядку с +this.props.match.params.id(Походу этот пропс приходит с роутом из app) 
        const item = this.props.menuItems.find(el => +el.id === +this.props.match.params.id)
        const{title, url, category, price} = item;

        return (
            <div className = "item_page">
                <div className="menu__item item_block">
                     <div className="menu__title">{title}</div>
                    <img className="menu__img" src={url} alt={title}></img>
                    <div className="menu__category">Category: <span>{category}</span></div>
                    <div className="menu__price">Price: <span>{price}$</span></div>
                    <button className="menu__btn">Add to cart</button>
                    <span className = {`menu__category_Img ${category}`}></span> 
                </div>
            </div>
        );
    }
}

const mapStateToProps =  (state) =>{
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    menuLoaded: menuLoaded,
    menuRequested,
    menuError
}
//в меню листе есть объяснение компонентов высшего порядка
export default WithRestoService ()( connect(mapStateToProps, mapDispatchToProps)(ItemPage) );