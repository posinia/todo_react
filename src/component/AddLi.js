import React from 'react';
import PropTypes from 'prop-types';

const AddLi = (props) => {

	let inputBox = null;

	const onClickAddButton = () => {
		console.log(props);
		props.handleAddedData(inputBox.value); //parent에게 보내기
	};

	return (
		<div className="input-group input-group-lg">
			<input ref={input => { inputBox = input}} type="text" className="form-control" placeholder="할 일을 입력해주세요" />
			<span className="input-group-btn">
					<button onClick={onClickAddButton} className="btn btn-primary" type="button">등록</button>
				</span>
		</div>
	);
};

AddLi.propTypes = {
	handleAddedData: PropTypes.func
};


export default AddLi;