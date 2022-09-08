import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './component/header/header';
import Home from './pages/Home/pokemon';
import './App.css';

function App() {
	const [state, setState] = useState('');
	return (
		<div className="App">
			<Headers searchValue={e => setState(e)} />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home value={state} />} />
					<Route path="/home" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

export const Coba = props => {
	return <div> {props.data}</div>;
};
