import { ModalDetailsPokemon } from '../../component/modalDetail/modalDetails';

export default function PokemonDetail({
	isModal,
	onModal,
	closeModal,
	ability,
	height,
	weight,
	stats,
	image,
	name,
	id
}) {
	return (
		<ModalDetailsPokemon
			isModal={isModal}
			onModal={onModal}
			closeModal={closeModal}
			image={image}
			name={name}
			id={id}
			stats={stats}
			height={height}
			weight={weight}
			ability={ability}
		/>
	);
}
