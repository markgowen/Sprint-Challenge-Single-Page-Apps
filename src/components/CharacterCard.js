import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  background: #0f0b0d;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 2% auto;
  padding: 1%;
`;

const CardImage = styled.img`
  margin: 30px auto;
`;

const CardName = styled.h1`
  color: #2c8bcf;
`;

const CardText = styled.p`
  color: #ab856e;
  margin-bottom: 2%;
`;

const CharacterCard = props => {
  return (
    <Card key={props.id}>
      <CardImage alt="Rick and Morti Character" src={props.image}></CardImage>
      <CardName>{props.name}</CardName>
      <CardText>Status: {props.status}</CardText>
      <CardText>Species: {props.species}</CardText>
      <CardText>Gender: {props.gender}</CardText>
    </Card>
  );
};

export default CharacterCard;
