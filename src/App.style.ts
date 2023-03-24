import styled from "styled-components";
import { colorBlueLight, colorDark, colorDark2 } from "./style/variables";

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  @media (max-width: 600px) {
    flex-direction: column;
  } 
`;

export const UserInfos = styled.div`
  max-width: 330px;
  min-height: 100vh;
  padding-top: 30px;
  padding: 30px 15px 20px;
  background-color: ${colorDark};
  @media (max-width: 600px) {
    min-width: 100%;
    min-height: auto;
  } 
`;

export const Title = styled.h1`
  text-align: center;
  color: ${colorBlueLight};
`;

export const Repositories = styled.section`
  background-color: ${colorDark2};
  width: 100%;
  min-height: 100vh;
  padding: 30px 40px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px 20px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  } 
  @media (max-width: 870px) {
    grid-template-columns: repeat(1, 1fr);
  } 
`;

export const Loarder = styled.div`
  display: block;
  margin-inline: auto;
  margin-top: 20px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border-top: 3px solid rgba(255, 255, 255, 1);
  border-left: 3px solid rgba(255, 255, 255, 1);
  border-right: 3px solid rgba(255, 255, 255, 0);
  animation: spin 1s infinite linear;
  @keyframes spin{
    to {
      transform: rotate(360deg);
    }
  }
`;

