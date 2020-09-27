import React from 'react';
import './cart-table.scss';
import {connect} from 'react-redux';// применяется каждый раз когда нужен стейт из редьюсера
import {deleteFromCart} from '../../actions'
//В этот компонент будут передаваться выбранные айтемсы и функция - обработчик вместе с пропсами
const CartTable = ({items, deleteFromCart, onApplyOrder}) => {// айтемсы будем получать из редьюсера
    const applyBtn = (items.length > 0)? <button onClick={() => onApplyOrder()} className="cart__apply">Подтвердить заказ</button> : <h2 className="cart__empty">Список товаров пуст</h2>
    
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item=>{//из перебора айтемсов динамически будут формироваться эти элементы
                        const {title,price,url,id, amount} = item;

                        
                        return(
                            <div key={id} className="cart__item">
                            <div className="cart__amount">{amount}</div>
                            <img src={url} className="cart__item-img" alt={title}></img>
                            <div className="cart__item-title">{title}</div>
                            <div className="cart__item-price">{price * amount}$</div>
                            {/* onDelete будет приходить из редьюсера */}
                            <div onClick={() => deleteFromCart(id)} className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }
              
            </div>
            {applyBtn}
            
        </>
    );
};

const mapStateToProps = ({items}) =>{//в аргументы передается стейт тут из него сразу вытащили айтемсы
    return{//записали стейт в пропсы
        items: items
    }
}

// const mapDispatchToProps = () =>{
//     return{//можно передавать сюда вообще не связанные с экшонами вещи. Сейчас это просто функция которая написана сходу
//         onDelete: (id) => {
//             console.log(`Удалили ${id}`)
//         }
//     }
// }

const mapDispatchToProps = {
    deleteFromCart//удалятор приходит из экшонсов. На обработчике он будет запускать редьюсер и передавать в него айди с payload.id
};

export default connect(mapStateToProps,mapDispatchToProps)(CartTable);