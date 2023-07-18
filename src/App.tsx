import React from 'react';
import './App.css';
import styled from "styled-components";
import img from "../src/Rectangle.svg"
import {Image} from "./components/Image"
import {Headline} from "./components/Headline";
import {Text} from "./components/Text";
import {StyledBtn} from "./components/StyledBtn";

function App() {
  return (
    <div className="App">
        <Box>
            <Image src={img} className="Img" alt="desert"></Image>
            <Headline>Headline</Headline>
            <Text>Faucibus. Faucibus. Sit sit sapiens it<br/> tempusrisu ut. Sit molestie ornare in venen.</Text>
            <StyledBtn color={"white"} background={"#4E71FE"}>See more</StyledBtn>
            <StyledBtn color={"#4E71FE"} background={"white"}>Save</StyledBtn>
        </Box>
    </div>
  );
}

export default App;

const Box = styled.div`
  width: 300px;
  height: 350px;
  border-radius: 15px;
  background: #FFF;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.10);
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%)
`