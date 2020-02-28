import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import LayoutGnb from 'components/company/LayoutGnb';
import classNames from 'classnames/bind';
import styles from './LayoutHeader.module.scss';
import jsonData from './LayoutHeader.json';

const cx = classNames.bind(styles);

const LayoutHeader = ({ layoutType }) => {
	const [navToggle, setNavToggle] = useState(false);
	const handleToggle = () => {
		setNavToggle(!navToggle);
	};

	const menuPc = jsonData.map(dep1 => (
		<li key={dep1.text} className={cx('item')}>
			<Link to={dep1.url} className={cx('link', { active: layoutType === dep1.layoutType })}>
				{dep1.text}
			</Link>
		</li>
	));

	return (
		<>
			<Helmet>
				{ navToggle && <body className={cx('noscroll')} /> }
			</Helmet>
			<header className={cx('header', { active: navToggle })}>
				<div className={cx('gnb')}>
					<Link to="/company" className={cx('logo')}>logo</Link>
					<button type="button" className={cx('btn_menu', { active: navToggle })} onClick={handleToggle}>
						<span className={cx('line_top')} />
						<span className={cx('line_middle')} />
						<span className={cx('line_bottom')} />
					</button>
					<nav className={cx('gnb_pc')}>
						<ul>{menuPc}</ul>
					</nav>
					<LayoutGnb navToggle={navToggle} jsonData={jsonData} layoutType={layoutType} />
				</div>
			</header>
		</>
	);
};

LayoutHeader.propTypes = {
	layoutType: PropTypes.string,
};
LayoutHeader.defaultProps = {
	layoutType: null,
};

export default LayoutHeader;
