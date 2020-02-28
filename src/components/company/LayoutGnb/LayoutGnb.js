import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './LayoutGnb.module.scss';

const cx = classNames.bind(styles);

const LayoutGnb = ({ navToggle, jsonData, layoutType }) => {
	const menu = jsonData.map((dep1) => {
		const subs = dep1.sub.map(dep2 => (
			<li key={dep2.text}>
				<NavLink to={dep2.url} className={cx('dep2')} activeClassName={cx('active')}>
					{dep2.text}
				</NavLink>
			</li>
		));
		return (
			<li key={dep1.text} className={cx('item', { active_pc: layoutType === dep1.layoutType })}>
				<span className={cx('dep1')}>{dep1.text}</span>
				<ul className={cx('sub')}>
					{subs}
				</ul>
			</li>
		);
	});

	return (
		<nav className={cx('nav', { active: navToggle })}>
			<ul className={cx('gnb')}>
				{menu}
			</ul>
		</nav>
	);
};

LayoutGnb.propTypes = {
	navToggle: PropTypes.bool,
	layoutType: PropTypes.string,
	jsonData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
LayoutGnb.defaultProps = {
	navToggle: null,
	layoutType: null,
};

export default LayoutGnb;
