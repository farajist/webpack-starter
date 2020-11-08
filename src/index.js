// test a js class 
import {
    Header
} from './assets/js/header';

// test svg imports 
import WebpackLogo from './assets/images/webpack-logo.svg';
import './assets/style/main.scss';

console.log('Hello, Webpack !');
let header = new Header();

// test dom manipulation
const p = document.createElement('p');
p.textContent = 'I like Sushi.';

// Create heading node
const heading = document.createElement('h1');
heading.textContent = header.getFirstHeading();


//test svg image 
const image = document.createElement('img');
image.src = WebpackLogo

// Append SVG and heading nodes to the DOM
const app = document.querySelector('#root');
app.append(heading, p, image)