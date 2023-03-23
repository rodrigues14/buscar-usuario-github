import styled from "styled-components";
import { colorDark, fontColor } from "../../style/variables";

export const SearchStyled = styled.div`
  margin-top: 30px;
  h2 {
    font-size: 18px;
    font-weight:400;
    text-align: center;
  }
  div {
    margin: 20px 15px;
    input, button {
      width: 100%;
      font-size: 16px;
      padding: 8px 5px;
      border: none;
      border-radius: 6px;
    }
    input {
      margin-bottom: 15px;
      color: ${colorDark};
    }
    button {
      background-color: #000;
    }
  }
`;