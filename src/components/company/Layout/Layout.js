import React from 'react';
import PropTypes from 'prop-types';
import LayoutHeader from 'components/company/LayoutHeader';

import classNames from 'classnames/bind';
import styles from './Layout.module.scss';

const cx = classNames.bind(styles);

const Layout = ({ children, layoutType }) => (
	<>
		<LayoutHeader layoutType={layoutType} />
		<div className={cx('box', { top: layoutType === 'top' })}>
			<div className={cx('contents_area')}>
				{children}
			</div>
		</div>
	</>
);

Layout.propTypes = {
	children: PropTypes.node,
	layoutType: PropTypes.string,
};
Layout.defaultProps = {
	children: null,
	layoutType: null,
};

export default Layout;
