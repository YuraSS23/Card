import styled from "styled-components";

type StyledBtn = {
    background?: string
    color?: string
}
export const StyledBtn = styled.button<StyledBtn>`
  width: 86px;
  height: 30px;
  border-radius: 5px;
  margin: 10px 0px 0px 20px;
  border: 2px solid #4E71FE;
  color: ${props => props.color || "#3f65fb"};
  background-color: ${props => props.background || "#3f65fb"};
  
  &:hover {
    opacity: .3;
  }
`