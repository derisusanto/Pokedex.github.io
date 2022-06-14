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
		const length = data.length;
		return (
			<div>
				<p>Jumlah :{length}</p>
				{data}
			</div>
		);
	};
	return (
		<div className="m-5">
			<FindComments data={Comments} />
			<b>Bingung Udah Malem</b>
		</div>
	);
}
export default CaseTwo;
