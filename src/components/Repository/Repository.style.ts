import styled from "styled-components";
import { colorBlueLight } from "../../style/variables";

export const RepositoryStyled = styled.div`
  background-color: #404040;
  padding: 20px 30px;
  max-width: 300px;
  border-radius: 15px;
  &:hover {
    transition: .3s;
    transform: scale(1.06);
  }
  h3 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 15px;
    text-align: center;
    color: ${colorBlueLight};
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    svg path {
      fill: #ff0;
    }
  }
  @media (max-width: 870px) {
    min-width: 100%;
  }
`;

export const Stars = styled.p`
  display: flex;
  gap: 5px;
`;