import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import IInfoCardProps from '../../Types/IInfoCardProps';
import './InfoCard.scss';

const InfoCard = ({ title, content, linkTitle, routeTo }: IInfoCardProps) => {
	return (
		<div className="info-card">
			<Card>
				<p className="info-card__title">{title}</p>
				<p className="info-card__content">{content}</p>
				<Link to={routeTo}>{linkTitle}</Link>
			</Card>
		</div>
	);
};

export default InfoCard;
