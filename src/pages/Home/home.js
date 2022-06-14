import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home(props) {
	return (
		<div className="home">
			<Link to="/case_one">
				<button className="btn-case">Case 1</button>
			</Link>
			<Link to="/case_two">
				<button className="btn-case">Case 2</button>
			</Link>
			<Link to="/case_three">
				<button className="btn-case">Case 3</button>
			</Link>
		</div>
	);
}
export default Home;
