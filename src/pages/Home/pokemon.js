import React, { useEffect, useState } from 'react';
import { PokemonCard } from '../../component/pokemonCard/pokemonCard';
import axios from 'axios';
import './home.css';
import PokemonDetail from '../pokemonDetail/pokemonDetails';

function Pokemon({ value }) {
	const [pokemon, setPokemon] = useState();
	const [allPokemons, setAllPokemons] = useState([]);
	const [filterPokemon, setFilterPokemon] = useState([]);
	const [isModal, setIsModal] = useState(false);

	/* eslint-disable */

	useEffect(() => {
		Filter(value);
	}, [value]);

	useEffect(() => {
		if (allPokemons.length === 0) {
			getListPokemon();
		}
	}, []);

	const Filter = value => {
		if (value !== '') {
			const newItem = allPokemons.filter(newVal => {
				return newVal.name.includes(value);
			});
			setFilterPokemon(newItem);
		} else {
			setFilterPokemon([]);
		}
	};

	const createPokemonObject = result => {
		result.forEach(pokemon => {
			axios
				.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
				.then(res => {
					setAllPokemons(currentList => [...currentList, res.data]);
					allPokemons.sort((a, b) => a.id - b.id);
				});
		});
	};

	const getListPokemon = () => {
		axios
			.get(`https://pokeapi.co/api/v2/pokemon?limit=25&offset=0`)
			.then(response => {
				createPokemonObject(response.data.results);
			});
	};

	const getDataPokemon = e => {
		setPokemon(e);
		setIsModal(true);
	};

	return (
		<div className="home">
			{filterPokemon.length === 0
				? allPokemons.map(pokemon => {
						return (
							<PokemonCard
								key={pokemon.id}
								id={pokemon.id.toString().padStart(3, '0')}
								name={pokemon.name.replace(/^./, str => str.toUpperCase())}
								image={pokemon.sprites.other['official-artwork'].front_default}
								type={pokemon.types}
								weight={pokemon.weight}
								height={pokemon.height}
								onEventModal={() => getDataPokemon(pokemon)}
							/>
						);
				  })
				: filterPokemon.map(pokemon => {
						return (
							<PokemonCard
								key={pokemon.id}
								id={pokemon.id.toString().padStart(3, '0')}
								name={pokemon.name.replace(/^./, str => str.toUpperCase())}
								image={pokemon.sprites.other['official-artwork'].front_default}
								type={pokemon.types}
								weight={pokemon.weight}
								height={pokemon.height}
								onEventModal={() => getDataPokemon(pokemon)}
							/>
						);
				  })}
			{isModal && (
				<PokemonDetail
					isModal={isModal}
					onClose={() => setIsModal(false)}
					onModal={() => setIsModal(false)}
					// key={pokemon.id}
					id={pokemon.id.toString().padStart(3, '0')}
					name={pokemon.name.replace(/^./, str => str.toUpperCase())}
					image={pokemon.sprites.other['official-artwork'].front_default}
					stats={pokemon.stats}
					weight={pokemon.weight}
					height={pokemon.height}
					ability={pokemon.abilities}
				/>
			)}
		</div>
	);
}
export default Pokemon;
