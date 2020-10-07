//Изменение стейта при определенных экшонах
const initialState ={
    menu:[],
    loading: true,
    error: false,
    items: [],// этот массив будет формироваться при добавлении элементов в корзину
    total: 0
}
// редьюсер работает по другому. не как setState 
//Редьюсер полностью перепишет стейт если изменено даже одно свойство
const reducer = (state = initialState, action) => {
    switch(action.type){//Action это объект у которого одно из свойств type
        case 'MENU_LOADED':// записать в стейт то что пришло с сервера(payload)
        //В каждом экшоне надо прописывать все свойства чтобы они не стерлись
        return{
            ...state,//чтобы не переписывать каждый раз весь стейт вель в нем может быть 1000 свойств
            menu: action.payload,
            loading: false,
            error: false
        }
       
        case 'MENU_REQUESTED':
        return{
            ...state,//чтобы не переписывать каждый раз весь стейт вель в нем может быть 1000 свойств
            menu: state.menu,//текущее значение чтобы оно не удалилось
            loading: true,
            error: false
        }

        case 'MENU_ERROR':
            return{
                ...state,//чтобы не переписывать каждый раз весь стейт вель в нем может быть 1000 свойств
                menu: state.menu,//текущее значение чтобы оно не удалилось
                loading: false,
                error: true
            }

        case 'ITEM_ADD_TO_CART':// итак вот мы кликнули на кнопку сработал этот экшон, что мы делаем
            const id = action.payload;//по этому айдишнику надо найти элемент внутри menu
            const item = state.menu.find(item => item.id === id);// перебираем.Ищем совпадение.Совпадение записываем в айтем
            
            let newItem = {//формируем новый объект на основе найденного.Этот объект будем записывать в items: []
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id,
                amount: 1
            }

            const addedItem = state.items.find(item => item.id === newItem.id);

          
            //мой пездюк
            if (addedItem){
                addedItem.amount += 1
                const addedItemIndex = state.items.findIndex(item => item.id === newItem.id)
                    let total = 0
                    state.items.forEach((item) => {
                        total += item.amount * item.price
                    });
                return {
                    ...state,
                    items:[
                        ...state.items.slice(0, addedItemIndex),
                        addedItem,
                        ...state.items.slice(addedItemIndex + 1)
                    ],
                    total: total
                }
            }else {
                return {
                    ...state,
                    items: [
                        ...state.items,
                        newItem
                    ],
                    total: state.total + newItem.price
                }
            }

            

            

        case 'ITEM_REMOVE_FROM_CART':
            const idx = action.payload;// достали значит айдишник из экшона который пришел
            const itemIndex = state.items.findIndex(item => item.id === idx);//перебираем и сравниваем.Узнаем номер элемента В МАССИВЕ для того чтобы его удалить по порядковому номеру
            return {
                ...state,
                //чтобы не нарушать иммутабельность будем брать кусочек массива до элемента который надо вырезать и после него.склеим 2 массива но без удаляемого
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ],
                total:state.total - state.items[itemIndex].price * state.items[itemIndex].amount
            }

        case 'CART_SENT_TO_SERVER':
            return {
                ...state,
                items: [],
                total: 0
            }
            
        default:
            return state;

    }
}

export default reducer;