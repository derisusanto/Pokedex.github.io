import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import './pokemonCard.css';

export const PokemonCard = ({ name, image, type, onEventModal }) => {
	const [isCompare, setIsCompare] = useState(false);
	return (
		<>
			<Card sx={{ maxWidth: 250, cursor: 'pointer' }}>
				<CardHeader
					avatar={
						<Avatar sx={{ border: '1px solid black' }} aria-label="recipe">
							<img
								height="50"
								src="https://w7.pngwing.com/pngs/620/521/png-transparent-poke-ball-pokemon-pokemon-rim-mobile-phones-pokemon.png"
								alt="img-ball"
							/>
						</Avatar>
					}
					title={<b onClick={onEventModal}>{name}</b>}
					action={
						isCompare ? (
							<IconButton aria-label="settings">
								<input type="checkbox" />
							</IconButton>
						) : null
					}
				/>

				<CardMedia
					onClick={onEventModal}
					component="img"
					height="auto"
					image={image}
					alt={`img-${name}`}
					style={{
						backgroundImage: `linear-gradient(to right, #8360c3, #2ebf91)`
					}}
				/>
				<CardContent>
					<Typography variant="body2" color="text.secondary" className="d-flex">
						{type.map((i, idx) => (
							<div key={idx} className="list-type">
								{i.type.name}
							</div>
						))}
					</Typography>
				</CardContent>
			</Card>
		</>
	);
};
