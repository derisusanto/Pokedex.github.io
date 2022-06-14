import React from 'react';
import './footer.css';
import Logo from '../../assets/img/logo.png';
import IconSocial1 from '../../assets/img/sosial1.png';
import IconSocial2 from '../../assets/img/sosial2.png';
import IconSocial3 from '../../assets/img/sosial3.png';
import IconAppStore from '../../assets/img/App-Store.png';
import IconPlayStore from '../../assets/img/Google-Play.png';

function Footer() {
	return (
		<div className="footer">
			<div className="row">
				<div className="col-md-3">
					<div className="footer-content-1">
						<img
							src={Logo}
							alt="logo-halogistik"
							width={200}
							className="img-logo img-fluid mb-4"
						/>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
					</div>
				</div>
				<div className="col-md-6">
					<div className="footer-content-2">
						<div className="title">
							<ul>
								<li className="span">Tentang</li>
								<li>
									<a href="" href="">
										Layanan Kami
									</a>
								</li>
								<li>
									<a href="">FAQ</a>
								</li>
							</ul>
						</div>
						<div className="title">
							<ul>
								<li className="span">Kemitraan</li>
								<li>
									<a href="">Mitra Logistk</a>
								</li>
							</ul>
						</div>
						<div className="title">
							<ul>
								<li className="span"> Tautan Cepat</li>
								<li>
									<a href="">Cek Ongkir</a>
								</li>
								<li>
									<a href="">Cek Resi</a>
								</li>
								<li>
									<a href="">Cek Mulai Kirim</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="col-md-3">
					<div className="footer-content-3">
						<div className="icon-socialmedia">
							<img src={IconSocial1} alt="img-facebook" />
							<img src={IconSocial3} alt="img-instagram" />
							<img src={IconSocial2} alt="img-twitter" />
						</div>
						<div className="app-download">
							<p className="title-download">Discover our app</p>
							<div className="icon-download">
								<img src={IconPlayStore} alt="img-playstsore" />
								<img src={IconAppStore} alt="img-appstsore" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Footer;
