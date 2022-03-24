import React, { Component } from "react";
import styled from "styled-components";

const Title = styled.h1`
  background-color: black;
  color: cadetblue;
  width: 27%;
  font-size: 40px;
`;

const Container = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aquamarine;
  margin: none;
`;
const Img = styled.img`
  margin-top: 5%;
  width: 80vw;
  height: 60vh;
`;
const Center_Box = styled.div`
  width: 86%;
  height: 100%;
  margin: none;
  padding: 10px;
`;
const Box_Card = styled.div``;
const Card = styled.div``;
const Name = styled.h2`
  text-align: center;
  height: 9vh;
`;
const Color = styled.h3`
  display: flex;
  text-align: center;
  justify-content: center;
  height: 8vh;
  color: blue;
`;
const Price = styled.p`
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 17.5px;
  height: 8vh;
  color: blue;
`;

export default class App extends Component {
  state = {
    PiaList: [
      {
        product: "Pia de Mármore",
        cor: "Verde Ubatuba",
        preco: "270",
        preco1: "300",
        preco2: "380",
        img:
          "https://www.casasaopedro.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/i/pia_rw.jpg"
      },
      {
        product: "Pia de Mármore",
        cor: "Corumba",
        preco: "270",
        preco1: "300",
        preco2: "380",
        img:
          "https://a-static.mlcdn.com.br/1500x1500/pia-de-granito-para-cozinha-levorato-corumba-120x55cm-granito-cinza-corumba-avalon-house/casadosnichos/7773789115/ac06687f6259bfa33dd736e4b0ac53ab.jpg"
      },
      {
        product: "Pia de Mármore",
        cor: "Icaraí",
        preco: "270",
        preco1: "300",
        preco2: "380",
        img:
          "https://http2.mlstatic.com/D_NQ_NP_865272-MLB46306380264_062021-O.webp"
      }
    ],
    PiaCart: []
  };

  render() {
    return (
      <Container>
        <Title>Tamore</Title>
        <h4>Pias de Marmore de alta qualidade</h4>
        <Center_Box>
          <Box_Card>
            {this.state.PiaList.map((item) => (
              <Card>
                <Img src={item.img} alt="Pias" />
                <Name>{item.product}</Name>
                <Color>Cor: {item.cor}</Color>
                <Price>120x50cm - R${item.preco}</Price>
                <Price>150x50cm - R${item.preco1}</Price>
                <Price>180x50cm - R${item.preco2}</Price>
              </Card>
            ))}
          </Box_Card>
        </Center_Box>
      </Container>
    );
  }
}
