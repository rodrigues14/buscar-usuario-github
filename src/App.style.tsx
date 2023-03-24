import styled from "styled-components";
import { colorDark, colorDark2 } from "./style/variables";

export const Container = styled.main`
  display: flex;
  flex-direction: row;
`;

export const UserInfos = styled.div`
  max-width: 330px;
  min-height: 100vh;
  padding-top: 30px;
  padding: 30px 15px 20px;
  background-color: ${colorDark};
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Repositories = styled.section`
  background-color: ${colorDark2};
  width: 100%;
  min-height: 100vh;
`;