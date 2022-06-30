import 'core-js/stable';
import 'regenerator-runtime/runtime';
// import './assets/css/style.css';

import LoginForm from './modules/LoginForm';
import ContatoForm from './modules/ContatoForm';

const loginForm = new LoginForm('.validation-login');
const registerForm = new LoginForm('.validation-register');
const contatoForm = new ContatoForm();

loginForm.init();
registerForm.init();
contatoForm.init();