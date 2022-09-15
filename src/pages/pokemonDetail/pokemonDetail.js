import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import LinearProgress, {
	linearProgressClasses
} from '@mui/material/LinearProgress';

import { styled } from '@mui/material/styles';

import './pokemonDetail.css';

export const PokemonDetail = () => {
	const { name } = useParams();
	const [pokemon, setPokemon] = useState('');

	const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
		height: 10,
		borderRadius: 5,
		[`&.${linearProgressClasses.colorPrimary}`]: {
			backgroundColor:
				theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
		},
		[`& .${linearProgressClasses.bar}`]: {
			borderRadius: 5,
			backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'
		}
	}));

	useEffect(() => {
		showPokemonByName();
	}, [name.toLowerCase()]);

	const showPokemonByName = () => {
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
			.then(response => {
				if (response.status === 200) {
					const r = response.data;
					const data = {
						indexImg: r.id,
						name: r.name,
						id: r.id,
						height: r.height,
						weight: r.weight,
						types: r.types,
						abilities: r.abilities,
						stats: r.stats
					};
					setPokemon(data);
				}
			})
			.catch(e => {
				console.log(e);
			});
	};

	return (
		<div className="d-flex justify-content-center align-items-center">
			<div className="card-modal-detail p-2">
				<div className="row m-0">
					<div className="col-md-5 d-flex justify-content-center align-items-center">
						<img
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.indexImg}.png`}
							alt={`img-${pokemon.name}`}
							width="auto"
							className="img-fluid text-center"
						/>
					</div>
					<div className="col-md-7 text-center">
						<div className="border rounded">
							<div className="text-center border-bottom d-flex justify-content-between p-2">
								<h5>
									No.{pokemon.id} <b>{pokemon.name}</b>
								</h5>
								<div>
									{pokemon &&
										pokemon.types.map((i, index) => {
											return (
												<button className="type" key={index}>
													{i.type.name}
												</button>
											);
										})}
								</div>
							</div>

							<div className="detail-content p-2">
								<div className="d-flex justify-content-between">
									<p>Height</p>
									<p>{pokemon.height}</p>
								</div>
								<div className="d-flex justify-content-between">
									<p>Weight</p>
									<p>{pokemon.weight}</p>
								</div>
								<div className="d-flex justify-content-between">
									<p>Ability</p>
									<p className="d-flex">
										{pokemon &&
											pokemon?.abilities.map((i, index) => {
												return (
													<span key={index}>
														{i.ability.name}
														{index < pokemon?.abilities.length - 1 ? ', ' : ''}
													</span>
												);
											})}
									</p>
								</div>
								{pokemon &&
									pokemon?.stats.map((item, index) => {
										return (
											<div className="stat" key={index}>
												<p>{item.stat.name}</p>
												<BorderLinearProgress
													variant="determinate"
													value={item.base_stat}
												/>
											</div>
										);
									})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
