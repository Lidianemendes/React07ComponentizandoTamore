import React from "react";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: none;
  list-style: none;
  background-color: cadetblue;
  font-size: 1.3em;
  height: 7vh;
  font-weight: bold;
`;

const ListItem = styled.li`
  color: #000;

  &:hover {
    color: aquamarine;
  }
`;

function Footer() {
  return (
    <List>
      <ListItem>Contato</ListItem>
      <ListItem>Endereço</ListItem>
      <ListItem>Voltar</ListItem>
    </List>
  );
}
export default Footer;
