import React, { useState } from 'react';
import { ModalDetailsPokemon } from '../../component/modalDetail/modalDetails';

export default function PokemonDetail({ isModal, onModal, closeModal }) {
	const [isModal, setIsModal] = useState(false);
	return (
		<ModalDetailsPokemon
			isModal={isModal}
			onModal={onModal}
			closeModal={closeModal}
			image={iamge}
		/>
	);
}
