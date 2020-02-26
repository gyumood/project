import React from 'react';
import classNames from 'classnames/bind';
import styles from './LayoutHeader.module.scss';

const cx = classNames.bind(styles);

const LayoutHeader = () => (
	<>
		<header className={cx('header')}>
			헤더
		</header>
	</>
);

export default LayoutHeader;
