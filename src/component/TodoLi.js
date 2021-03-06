import React from 'react';


const TodoLi = (props) => {
	const onClickRemoveButton = () => {
		props.handleRemoveData();
	};

	return (
		<li>
			<span>{props.todo}</span>
			<span className="btn-container">
					<a href="#" onClick={onClickRemoveButton}>삭제</a>
				</span>
		</li>
	);
};

export default TodoLi;
