import React, { useEffect, useState } from 'react';
import { PokemonCard } from '../../component/pokemonCard/pokemonCard';
import axios from 'axios';
import './home.css';
// import PokemonDetail from '../pokemonDetail/pokemonDetails';
import { useParams } from 'react-router-dom';
import { NotFound } from '../../component/notFound/notFound';

function Pokemon() {
	const { search } = useParams();
	const [pokemon, setPokemon] = useState();
	const [allPokemons, setAllPokemons] = useState([]);
	const [filterPokemon, setFilterPokemon] = useState([]);
	const [isModal, setIsModal] = useState(false);

	useEffect(() => {
		getListPokemon();
	}, []);

	// const createPokemonObject = result => {
	// 	result.forEach(pokemon => {
	// 		axios
	// 			.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
	// 			.then(res => {
	// 				setAllPokemons(currentList => [...currentList, res.data]);
	// 				allPokemons.sort((a, b) => a.id - b.id);
	// 			});
	// 	});
	// };

	const getListPokemon = async () => {
		await axios
			.get(`https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0.`)
			.then(response => {
				setAllPokemons(response.data['results']);
			});
	};

	return (
		<div className="home">
			{allPokemons.length !== 0 ? (
				allPokemons
					.filter(pokemon => {
						if (search === undefined || search === '' || search === null) {
							return pokemon;
						} else if (
							pokemon.name.toLowerCase().includes(search.toLowerCase())
						) {
							return pokemon;
						}
					})
					.map(pokemon => {
						return (
							<PokemonCard
								key={pokemon.name}
								url={pokemon.url}
								name={pokemon.name.replace(/^./, str => str.toUpperCase())}
							/>
						);
					})
			) : (
				<h3>Loading ...</h3>
			)}
		</div>
	);
}
export default Pokemon;
