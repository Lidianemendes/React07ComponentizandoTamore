import styled from "styled-components";

const ListItem = styled.li`
  color: #000;

  &:hover {
    color: aquamarine;
  }
`;

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

function Header() {
  return (
    <List>
      <ListItem>inicio</ListItem>
      <ListItem>sobre</ListItem>
      <ListItem>galeria</ListItem>
    </List>
  );
}

export default Header;
