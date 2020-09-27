//ЭТО ГЛАВНЫЙ ФАЙЛ СЮДА ПОДРУБАЮТСЯ ВСЕ РЕДАКСНЫЕ ИМПОРТЫ
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';//компонент который содержит все остальные компоненты
import {Provider} from 'react-redux';// перекидывает пропсы через уровни
import {BrowserRouter as Router} from 'react-router-dom';//навигация
import ErrorBoundry from './components/error-boundry';//границы ошибок
import RestoService from './services/resto-service'; //фетчер
import RestoServiceContext from './components/resto-service-context';
import store from './store';
import './index.scss';
//ПОСЛЕ ТОГО КАК ВСЕ ИМПОРТЫ ГОТОВЫ ФОРМИРУЕТСЯ ЦЕНТРАЛЬНАЯ ЛОГИКА ПРИЛОЖЕНИЯ

const restoService = new RestoService();
//ЧАЩЕ ВСЕГО ВОТ ТАКАЯ  СТРУКТУРА ВСТРЕЧАЕТСЯ В РЕАЛЬНЫХ ПРИЛОЖЕНИЯХ
ReactDOM.render(
    // Провайдер для стора
    <Provider store={store}>
        {/* Границы ошибок */}
        <ErrorBoundry>
            {/* Провайдер для сервиса(работа с сервером) */}
            <RestoServiceContext.Provider value={restoService}>
                <Router>
                    <App/>
                </Router>
            </RestoServiceContext.Provider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));

