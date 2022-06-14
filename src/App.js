import { Routes, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/home';
import CaseOne from './pages/Case/Case_One/case_one';
import CaseTwo from './pages/Case/Case_Two/case_two';
import CaseThree from './pages/Case/Case_Three/case_three';
import './App.css';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/case_one" element={<CaseOne />} />
					<Route path="/case_two" element={<CaseTwo />} />
					<Route path="/case_three" element={<CaseThree />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

export const Coba = props => {
	return <div> {props.data}</div>;
};
