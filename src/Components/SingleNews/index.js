import React from "react";
import { Button, Card } from "react-bootstrap";

const SingleNews = ({ singleData }) => {
  return (
    <Card>
      <Card.Img
        src={singleData.urlToImage}
        alt={singleData.title}
        variant="top"
      />
      <Card.Body>
        <Card.Title>{singleData.title}</Card.Title>
        <Card.Text>{singleData.description}</Card.Text>
        <Button variant="outline-success">{singleData.author}</Button>
      </Card.Body>
    </Card>
  );
};

export default SingleNews;
