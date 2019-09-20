import React from "react";
import styled from 'styled-components'

const Card = styled.div``;

const CardName = styled.h1``;

const CardText = styled.p``;

const  CharacterCard = props => {
  return (
    <Card key={props.id}>
      <CardName>{props.name}</CardName>
      <CardText>Status: {props.status}</CardText>
      <CardText>Species: {props.species}</CardText>
      <CardText>Gender: {props.gender}</CardText>
    </Card>
    );
}

export default CharacterCard;
