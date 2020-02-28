import React, { useState } from 'react';

const InputForm = () => {
	const [name, setName] = useState('');
	const [nickname, setNickname] = useState('');

	const onChangeName = (e) => {
		setName(e.target.value);
	};
	const onChangeNickname = (e) => {
		setNickname(e.target.value);
	};

	return (
		<>
			<div>
				<input type="text" value={name} onChange={onChangeName} />
				<input type="text" value={nickname} onChange={onChangeNickname} />
			</div>
		</>
	);
};

export default InputForm;
