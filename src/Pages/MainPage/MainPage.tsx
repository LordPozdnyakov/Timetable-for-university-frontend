import React from 'react';
import InfoCard from '../../Components/InfoCard/InfoCard';
import './MainPage.scss';

const MainPage = () => {
	return (
		<div className="main-page">
			<InfoCard
				title="Всього студентів:"
				content="2547"
				linkTitle="Перейти"
				routeTo="/students"
			/>
			<InfoCard
				title="Всього викладачів:"
				content="34"
				linkTitle="Перейти"
				routeTo="/teachers"
			/>
		</div>
	);
};

export default MainPage;
