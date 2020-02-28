import React from 'react';
import Layout from 'components/company/Layout';
import HeadInfo from 'components/company/HeadInfo';

const TopPage = () => (
	<Layout layoutType="top">
		TopPage
		<HeadInfo
			headTitle="회사소개"
			metaDescription="SK엔카닷컴 회사소개. 우리 엔카는요, 주요 서비스, contact us, 엔카 홍보 관련, 인재 채용 관련"
		/>
	</Layout>
);

export default TopPage;
