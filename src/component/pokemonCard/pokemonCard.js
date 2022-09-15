import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
// import Typography from '@mui/material/Typography';
import './pokemonCard.css';

import ImageNotFound from '../../assest/icons/default.jpg';
import IconPokemon from '../../assest/icons/logo.png';

export const PokemonCard = ({ name, url }) => {
	const navigate = useNavigate();
	const [pokemon, setPokemon] = useState({
		pokemonIndex: '',
		imgUrl: ''
	});
	// const [error, setError] = useState(false);
	const [isCompare, setIsCompare] = useState(true);

	useEffect(() => {
		const pokemonIndex = url.split('/')[url.split('/').length - 2];
		const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIndex}.png`;

		setPokemon({
			imgUrl,
			pokemonIndex
		});
	}, []);
	return (
		<React.Fragment>
			<div className="card" onClick={() => navigate(`/detail/${name}`)}>
				<div className="card-header">
					<img src={IconPokemon} width="40px" />
					<span>{name}</span>
				</div>
				<div className="card-content">
					<img
						src={isCompare ? ImageNotFound : pokemon.imgUrl}
						width="150px"
						height="150px"
						onLoad={() => setIsCompare(false)}
					/>
				</div>
			</div>
		</React.Fragment>
	);
};
