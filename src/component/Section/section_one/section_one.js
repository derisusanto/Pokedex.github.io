import React from 'react';
import './section_one.css';
import Background from '../../../assets/img/home_background.png';
import RightImg from '../../../assets/img/Home.png';

function SectionOne() {
	return (
		<div className="section_one">
			<img
				className="background img-fluid"
				alt="background-home"
				src={Background}
			/>
			<div className="row layout vw-100">
				<div className="col-md-6">
					<div className="home-content-left">
						<p>Lorem ipsum dolor sit amet</p>
						<h1>Lorem ipsum dolor sit amet, cons</h1>
						<span>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam
						</span>
					</div>
					<button className="btn-default">Mulai Kirim</button>
				</div>
				<div className="col-md-6">
					<div className="home-content-right">
						<img src={RightImg} alt="img-home" className="img-fluid" />
					</div>
				</div>
			</div>
		</div>
	);
}
export default SectionOne;
