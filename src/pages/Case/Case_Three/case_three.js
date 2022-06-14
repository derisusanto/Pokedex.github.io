import React from 'react';
import SectionOne from '../../../component/Section/section_one/section_one';
import SectionTwo from '../../../component/Section/section_two/section_two';
import SectionThree from '../../../component/Section/section_three/section_three';
import SectionFour from '../../../component/Section/section_four/section_four';
import Headers from '../../../component/Header/Navbar';
import Footer from '../../../component/Footer/footer';
import './case_three.css';

function CaseThree(params) {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
			<Headers />
			<div className="case-three">
				<SectionOne />
				<SectionTwo />
				<SectionThree />
				<SectionFour />
			</div>
			<Footer />
		</div>
	);
}
export default CaseThree;
