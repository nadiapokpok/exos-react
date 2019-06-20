//on importe nos dépendances c'est un peu équivalent à var react = require('react);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

//le principe de react c'est de générer du html via jsx
//on va rendre ds notre DOM le component app ds la div qui a comme id 'root'
