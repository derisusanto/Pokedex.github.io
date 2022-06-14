import React from 'react';
import './section_two.css';

function SectionTwo() {
	return (
		<div className="section_two">
			<div className="layout">
				<div className="content">
					<h1>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod
					</h1>
					<div className="input-grup">
						<input placeholder="Pilih asal Kota/Kabupaten"></input>
						<input placeholder="Pilih asal Kota/Kabupaten"></input>
						<input placeholder="Berat(Kg)"></input>
						<button className="btn-default">Cari</button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default SectionTwo;
