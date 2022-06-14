import React from 'react';
import Fruits from './data';
import './case_one.css';

function CaseOne(params) {
	//case one
	const CekNameFruits = props => {
		const lowercased = props.data.map(i => i.fruitName.toLowerCase());
		const removeDuplicate = lowercased.filter(
			(item, index) => lowercased.indexOf(item) == index
		);
		var data = removeDuplicate.map((buah, index) => {
			return (
				<div className="fruit" key={index}>
					{buah}
				</div>
			);
		});
		return <div className="list_fruits">{data}</div>;
	};

	//casetwo
	const FilterFruit = props => {
		//filtering
		const filterImports = props.data.filter(
			fruit => fruit.fruitType === 'IMPORT'
		);
		const filterLocals = props.data.filter(
			fruit => fruit.fruitType === 'LOCAL'
		);
		//join data
		const Join = [...filterImports, ...filterLocals];
		//set lowercase
		const lowerImports = Join.map(i => ({
			name: i.fruitName.toLowerCase(),
			stock: i.stock
		}));
		//mapping
		const dataFruits = [
			...new Map(
				lowerImports.map(item => [JSON.stringify(item.name), item])
			).values()
		].map((data, index) => {
			return (
				<div className="wadah" key={index}>
					<p> wadah : {index + 1} </p>
					<div className="">{data.name}</div>
				</div>
			);
		});

		const length = dataFruits.length;
		return (
			<>
				<p> Jumlah Wadah : {length}</p>
				<div className="list_fruits">{dataFruits}</div>
			</>
		);
	};

	const CaseThree = props => {
		const lowerImports = props.data.map(i => ({
			name: i.fruitName.toLowerCase(),
			stock: i.stock
		}));

		let items = [...lowerImports];
		let loopData = [];
		items.forEach(x => {
			let find;
			if ((find = loopData.find(y => y.name === x.name))) {
				find.stock = Array.isArray(find.stock) ? null : find.stock + x.stock;
			} else {
				loopData.push(x);
			}
		});
		var listData = loopData.map((data, index) => {
			return (
				<div className="stock">
					<p>Wadah : {index + 1}</p>
					<p>Nama Buah : {data.name}</p>
					<p>Stock Buah : {data.stock}</p>
				</div>
			);
		});
		return <div className="list_fruits">{listData}</div>;
	};

	return (
		<div className="case_one">
			<div className="content">
				<div className="point">
					<label className="mb-2">Soal No 1 : Nama Buah</label>
					<CekNameFruits data={Fruits} />
				</div>
				<div className="point">
					<label className="mb-2">Soal No 2 : Misahin per Wadah</label>
					<FilterFruit data={Fruits} />
				</div>
				<div className="point">
					<label className="mb-2">Soal No 3 : Stock Buah di Wadah</label>
					<CaseThree data={Fruits} />
				</div>
				<div className="point">
					<label className="mb-2">Soal No 4 : Pertanyaan</label>
					Lumayan Pusing
				</div>
			</div>
		</div>
	);
}
export default CaseOne;
