import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from "./stores";
import "../scss/app.scss";

render (
	<Provider store={store}>

		<div className="hello">
		<p className="box blue">asdfasdfa</p>
		<p className="box">asdfasdfa</p>
		<p className="box">asdfasdfa</p>
		<p className="box">asdfasdfa</p>
		<p className="box">asdfasdfa</p>
		<p className="box">asdfasdfa</p>
		<p className="box">asdfasdfa</p>
		<p className="box">asdfasdfa</p>
		<p className="box">asdfasdfa</p>
		<p className="box">asdfasdfa</p>
		<p className="box">asdfasdfa</p>
		<p className="box">asdfasdfa</p>
		<p className="box">asdfasdfa</p>
		<p className="box">asdfasdfa</p>
		<p className="box">asdfasdfa</p>
		hasdfjklasjdfkl;ajsdkl;fjakl;sdjfkl;ajskdlf;jaskdl;fjkla;sdjfkl;ajsdklf;jaskld;fjklas;djfklajsdklf;ajskl;dfjakls;djfkl;asdjfkl;i</div>
	</Provider>,
	document.getElementById('root')
);