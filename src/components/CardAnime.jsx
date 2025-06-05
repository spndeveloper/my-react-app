import React from "react";
import { Card } from "antd";
const { Meta } = Card;

const CardAnime = ({ title, description, imageUrl }) => {
  const cardStyle = {};
  return (
    <Card
      hoverable
      className="border border-red-500 border-40"
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  );
};

export default CardAnime;
