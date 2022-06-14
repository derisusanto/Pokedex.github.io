import React from 'react';
import Comments from './data';

function CaseTwo() {
	const FindComments = props => {
		const data = props.data.map(i => {
			return (
				<>
					<div>{i.commentContent}</div>
					<div></div>
				</>
			);
		});
		return data;
	};
	return (
		<div className="">
			<FindComments data={Comments} />
		</div>
	);
}
export default CaseTwo;
