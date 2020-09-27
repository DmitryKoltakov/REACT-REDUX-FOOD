//ЭТОТ КОМПОНЕНТ ОПРЕДЕЛЯЕТ ГРАНИЦЫ ОШИБОК

import React, {Component} from 'react';
import Error from '../error';

export default class ErrorBoundry extends Component {
    state = {
        error: false
    }
    
    componentDidCatch() {
        this.setState({error:true});
    }
    
    render() {
       if (this.state.error) {
        return <Error/>
       }

       return this.props.children; //если ошибки нет то отрендерим все что будет находиться внутри компонента при вызове
        
    }
}