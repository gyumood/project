import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './PageTopTitle.module.scss';

const cx = classNames.bind(styles);

const PageTopTitle = ({ text }) => (
	<div className={cx('pagetoptitle_wrap')}>{text}</div>
);

PageTopTitle.propTypes = {
	text: PropTypes.node,
};
PageTopTitle.defaultProps = {
	text: '',
};

export default PageTopTitle;
