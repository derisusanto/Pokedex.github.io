import React, { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './component/header/header';
import Home from './pages/Home/pokemon';
import { PokemonDetail } from './pages/pokemonDetail/pokemonDetail';
import './App.css';

function App() {
	return (
		<div className="App">
			<Router>
				<Headers />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/home/:search" element={<Home />} />
					<Route path="/detail/:name" element={<PokemonDetail />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
