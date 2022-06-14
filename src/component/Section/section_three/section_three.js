import React from 'react';
import './section_three.css';
import Coin from '../../../assets/img/koin.png';
import Pickup from '../../../assets/img/pickup.png';
import Layanan from '../../../assets/img/layanan.png';

function SectionThree() {
	return (
		<div className="section_three">
			<div className="layout">
				<div className="content">
					<h1>Layanan</h1>
					<div className="content-grup">
						<div className="grup-layanan">
							<img src={Layanan} alt="img-plane" />
							<div className="deskripsi">
								<p className="title">Beragam Ekspedisi</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
							</div>
						</div>
						<div className="grup-layanan">
							<img src={Coin} alt="img-plane" />
							<div className="deskripsi">
								<p className="title">Pencarian Tarif Murah</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
							</div>
						</div>
						<div className="grup-layanan">
							<img src={Pickup} alt="img-plane" />
							<div className="deskripsi">
								<p className="title">Gratis Antar Jemput</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default SectionThree;
