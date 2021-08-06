import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./ItemDetailContainer.css";
const ItemDetailContainer = ({ data }) => (
  <Card>
    <Image id="fondocard" src={data.img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{data.title}</Card.Header>
    </Card.Content>
  </Card>
);

export default ItemDetailContainer;
