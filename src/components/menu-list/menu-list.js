//КОМПОНЕНТ РАБОТАЕТ КАК ОБЫЧНО. ЕГО ПРОСТО НАДО НАУЧИТЬ ПОНИМАТЬ РЕДАКС
import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';// коннект - это компонент высшего порядка
//если обернуть в нее компонент то он будет связан с редаксом
import './menu-list.scss';
import WithRestoService from '../hoc/with-resto-service';
import {menuLoaded, menuRequested,menuError,addedToCart} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

class MenuList extends Component {
    componentDidMount(){
        this.props.menuRequested();//вызываем экшон который делает стейт лоадингом
        const {RestoService} = this.props;// этот пропс приходит от компонента высшего порядка
    RestoService.getMenuItems()
    .then(res => this.props.menuLoaded(res))// res запишется в пейлоад а затем в стейт
    .catch(error => this.props.menuError())
}

    render() {
        const {menuItems, loading, error, addedToCart} = this.props//это массив с сервера
        if(error){
            return <Error/>
        }

        
        if(loading){
            return <Spinner/>
        }

       
        return (
            <ul className="menu__list">
               { 
                    menuItems.map(menuItem => {//для каждого элемента массива возвращаем компонент MenuListItem с айдишником и переданными даннами для рендера menuItem
                        return <MenuListItem 
                        onAddToCart={() => addedToCart(menuItem.id)}//этот обработчик будет висеть на каждой кнопке.addedToCart приходит из редьюсера
                         key={menuItem.id} 
                         menuItem={menuItem}/>
                    })
               }
            </ul>
        )
    }
};

const mapStateToProps = (state) =>{// это первая функция которая переделывает стейты из редакса в пропсы компонента
    return{
        menuItems: state.menu,//menuItems- пропс который будет создан.state.menu - что будет записано в этот пропс
        loading: state.loading,
        error: state.error
    }
}
////есть еще настройка экшонсов в пропсы

//1 вариант
// const mapDispatchToProps = (dispatch) => {
//     return{
//         //menuLoaded- просто название 
//         menuLoaded: (newMenu) => {
//             dispatch({
//                 type: 'MENU_LOADED',
//                 payload: newMenu//payload будет записываться в стейт через редьюсер
//             })
//         }
//     }
// }


//2 Вариант
// const mapDispatchToProps = (dispatch) => {
//     return{
//         //menuLoaded- просто название 
//         menuLoaded: (newMenu) => {
//             dispatch(menuLoaded(newMenu))
//         }
//     }
// }


//3 это чито вариант где в коннект можно передать просто объект и он все сделает за нас
const mapDispatchToProps = {
    menuLoaded,//название и функция которая будет выполняться совпадают
    menuRequested,//акшон для лоадинга
    menuError,
    addedToCart
};


//если обернуть в коннект компонент то он будет связан с редаксом
//у этого компонента появятся пропсы вытащенные из редакса
export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));
//WithRestoService добавит в пропсы этого компонента получалку с сервера







