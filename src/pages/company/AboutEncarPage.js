import React from 'react';
import Layout from 'components/company/Layout';
import PageTopTitle from 'components/company/PageTopTitle';

const AboutEncarPage = () => (
	<Layout layoutType="about">
		<PageTopTitle
			text={<>오랜경험과 신뢰를 바탕으로<br />자동차 생활에 혁신을<br />만들어온 <strong>SK엔카닷컴</strong></>}
		/>
	</Layout>
);

export default AboutEncarPage;
