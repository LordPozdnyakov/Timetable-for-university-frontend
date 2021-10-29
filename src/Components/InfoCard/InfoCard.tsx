import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import "./InfoCard.scss";

type InfoCardProps = {
  title: string;
  content: string;
  linkTitle: string;
  routeTo: string;
};

const InfoCard: FC<InfoCardProps> = ({
  title,
  content,
  linkTitle,
  routeTo,
}) => {
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
