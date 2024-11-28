import React from 'react';
import styled from 'styled-components';

const Rodape = ({ total }) => (
  <FooterContainer>
    <TotalText>Você pagará R$ {total.toFixed(2)}</TotalText>
    <ContinueButton>Continuar</ContinueButton>
  </FooterContainer>
);

export default Rodape;

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 10px 0;
  border-top: 1px solid #ccc;
`;

const TotalText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const ContinueButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;
