// import React from 'react';
// import {MainPage, CartPage} from '../pages';
// import AppHeader from '../app-header';
// import WithRestoService from '../hoc/with-resto-service';//компонент высшего порядка
// import Background from './food-bg.jpg';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// const App = ({RestoService}) => {// из пропсов который добавил кам компонент высшего порядка достаем фетчер
//     RestoService.getMenuItems()
//         .then( menu => console.log(menu))//вот так покажет уже массив
//         .catch(error => {console.log('Произошла ошибка')})
//     return (
//       <Router>
//         <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
//             <AppHeader total={50}/>
//             {/* Походу рендеритпервыйподъожящий а без него все подходящие */}
//             <Switch>
//                 <Route path='/' exact component={MainPage}/>
//                 <Route path='/cart'  component={CartPage}/>
//                 <Route exact component={MainPage}/>
//             </Switch>
//         </div>
//       </Router>
//     )
// }

// export default WithRestoService()(App);//эта штука обернет App и добавит в него пропс RestoService который внутри WithRestoService вытаскивается из RestoServiceContext.Consumer






//Урок 111 организация работы с сервером
import React from 'react';
import {MainPage, CartPage, ItemPage} from '../pages';
import AppHeader from '../app-header';
import Background from './food-bg.jpg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

const App = ({total}) => {
    return (
      <Router>
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={total}/>
            
            <Switch>
                <Route path='/' exact component={MainPage}/>
                <Route path='/cart' exact component={CartPage}/>
                <Route path = '/:id' component ={ItemPage}/>
            </Switch>
        </div>
      </Router>
    )
}

const mapStateToProps = (state) =>{// это первая функция которая переделывает стейты из редакса в пропсы компонента
  return{
     total: state.total
  }
}
export default connect(mapStateToProps)(App);