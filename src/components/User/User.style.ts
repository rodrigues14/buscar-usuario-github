import styled from "styled-components";

export const UserStyled = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h3 {
    font-size: 20px;
    font-weight: 500;
    margin: 20px 0;
  }
  > p {
    margin: 10px 0;
  }
`;

export const UserImage = styled.img`
  max-width: 150px;
  max-height: 150px;
  border-radius: 50%;
`;

export const Social = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 25px;
`;