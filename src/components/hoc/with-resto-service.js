//ЭТО СДЕЛАНО ЧТБЫ ПРИЛЕПЛЯТЬ СВОЙСТВО RestoService К ЛЮБОМУ КОМПОНЕНТУ
import React from 'react';
import RestoServiceContext from '../resto-service-context';
//Компонент высшего порядка это функция которая будет возвращать функцию
//Она будет каr аргумент получать какой то компонент
//WithRestoService будет получать пропсы которые будут применяться к Wrapped
//но консьюмер теперь не надо будет прописывать каждый раз
//WithRestoService будет добавлять ресто сервис как пропс к каждому переданному Wrapped
const WithRestoService = () => (Wrapped) => {//Wrapped это компонент который принимается этим компонентом высшего порядка
    return (props) => {//это пропсы передаваемого объекта
        return(
            <RestoServiceContext.Consumer>
                {
                    (RestoService) => {//это то что приходит из провайдера
                        //Рест оператор развернент все пропсы которые будут переданы с WithRestoService
                        //RestoService приходит не с пропсами а из провайдера
                        return <Wrapped {...props} RestoService={RestoService}/>
                    }
                }
            </RestoServiceContext.Consumer>
        )
    }
};

export default WithRestoService;