import React from 'react';
import './section_four.css';
import IconCar from '../../../assets/img/car.png';
import ImageIndo from '../../../assets/img/image-indo.png';

function SectionFour() {
	return (
		<div className="section_four">
			<div className="row layout ">
				<div className="col-md-6">
					<div className="home-content-left">
						<h1>Area Jangkauan</h1>
						<div className="content">
							<img src={IconCar} alt="img-icon-car" />
							<div className="deskripsi">
								<p className="title">Indonesia</p>
								<p>
									Bandung, Jakarta, Surabaya, Padang, Bukittinggi, Medan,
									Makasar, Kalimantan, Tasikmalaya, Jambi,{' '}
									<a href="##" target="_blank" className="color">
										<strong>dan segera di kota lainnya!</strong>{' '}
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="justify-content-center col-md-6">
					<div className="home-content-right">
						<img src={ImageIndo} alt="img-indonesi" />
					</div>
				</div>
			</div>
		</div>
	);
}
export default SectionFour;
