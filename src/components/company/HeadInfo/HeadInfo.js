import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const HeadInfo = ({
	headTitle, metaDescription, metaKeywords,
}) => (
	<Helmet>
		{
			headTitle && <title>{`${headTitle}, SK엔카닷컴`}</title>
		}
		{
			metaDescription && <meta name="description" content={metaDescription} />
		}
		{
			metaKeywords && <meta name="keyword" content={metaKeywords} />
		}
	</Helmet>
);

HeadInfo.propTypes = {
	headTitle: PropTypes.string,
	metaDescription: PropTypes.string,
	metaKeywords: PropTypes.string,
};
HeadInfo.defaultProps = {
	headTitle: '',
	metaDescription: '',
	metaKeywords: '',
};

export default HeadInfo;
