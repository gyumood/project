import React, { useState } from 'react';

const TestStatic = () => {
	const [value, setValue] = useState(1);
	return (
		<div>
			<p>
				현재 카운터 값은 <b>{value}</b> 입니다.
			</p>
			<button type="button" onClick={() => setValue(value + 1)} style={{ display: 'block', fontSize: '20px' }}>+1</button>
			<button type="button" onClick={() => setValue(value - 1)} style={{ fontSize: '20px' }}>-1</button>
		</div>
	);
};

export default TestStatic;
