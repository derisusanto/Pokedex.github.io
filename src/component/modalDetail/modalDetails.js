import LinearProgress, {
	linearProgressClasses
} from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import './modalDetail.css';
const style = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	width: '100%',
	height: '100%'
};

export const ModalDetailsPokemon = ({
	onClose,
	onModal,
	isModal,
	ability,
	height,
	weight,
	stats,
	image,
	name,
	id
}) => {
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

	return (
		<Modal open={isModal} onClose={onClose}>
			<Box sx={style} onClick={onModal}>
				<div className="card-modal-detail p-2">
					<div className="row m-0">
						<div className="col-md-5 d-flex justify-content-center align-items-center">
							<img
								src={image}
								alt={`i-${name}`}
								width="auto"
								className="img-fluid text-center"
							/>
						</div>
						<div className="col-md-7 text-center">
							<div className="border rounded">
								<div className="text-center border-bottom">
									<h4>
										#{id} <b>{name}</b>
									</h4>
								</div>
								<div className="detail-content p-2">
									<div className="d-flex justify-content-between">
										<p>Height</p>
										<p>{height}</p>
									</div>
									<div className="d-flex justify-content-between">
										<p>Weight</p>
										<p>{weight}</p>
									</div>
									<div className="d-flex justify-content-between">
										<p>Ability</p>
										<p className="d-flex">
											{ability.map((i, index) => {
												return (
													<p key={index}>
														{i.ability.name}
														{index < ability.length - 1 ? ', ' : ''}
													</p>
												);
											})}
										</p>
									</div>
									{stats.map((item, index) => {
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
			</Box>
		</Modal>
	);
};
