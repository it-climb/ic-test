import template from './app.component.html';
import controller from './app.controller'
import './app.component.scss';

const AppComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller,
    controllerAs: 'my'
};

export default AppComponent;