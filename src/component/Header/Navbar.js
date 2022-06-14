import React from 'react';
import './navbar.css';
import Gambar from '../../assets/img/logo.png';
// import Drawer from '../Drawer/drawer';

function Navbar() {
	return (
		<nav className="nav">
			<div className="ms-3 ">
				<img
					src={Gambar}
					alt="logo-halogistik"
					className="img-logo img-fluid"
				/>
			</div>
			<ul>
				<li>
					<a href="#home">Layanan Kami</a>
				</li>
				<li>
					<a href="#about">Tautan Cepat</a>
				</li>
				<li>
					<a href="#services">Kemitraan</a>
				</li>
				<li>
					<a href="#skills">Tentang Kami</a>
				</li>
				{/* <li>
					<a href="#teams">Mulai Kirim</a>
				</li> */}
				<li>
					<button className="btn-login">Login</button>
				</li>
			</ul>
			{/* <div className="toggle">
				<button className="btn-toggle">
					<Drawer />
				</button>
			</div> */}
		</nav>
	);
}
export default Navbar;
