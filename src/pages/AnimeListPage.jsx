import React from "react";
import CardAnime from "../components/CardAnime";
import { Col, Row, Grid } from "antd";

const AnimeLIstPage = () => {
  const animes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const screens = Grid.useBreakpoint();
  const stylePage = {
    padding: "20px",
    maxWidth: "100vw",
    maxHIgth: "100vh",
  };
  return (
    <>
      <div className="mx-auto">
        <Row
          style={stylePage}
          gutter={[16, 16]}
          justify={screens.md ? "start" : "center"}
          align="middle"
        >
          {animes.map((anime) => (
            <Col key={anime} xs={24} sm={12} md={8} lg={6} xl={4}>
              <CardAnime
                title={`Anime ${anime}`}
                description="Some description"
                imageUrl="https://via.placeholder.com/300x400?text=Anime"
              />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};
export default AnimeLIstPage;
