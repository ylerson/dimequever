import './style.css';
import {App} from './src/app';

document.querySelector('#app').innerHTML = App();

setupCounter(document.querySelector('#counter'));
