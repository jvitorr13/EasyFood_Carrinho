import React from 'react';
import styled from 'styled-components';
import { FiShoppingCart } from 'react-icons/fi';

const Header = ({ items }) => (
  <HeaderContainer>
    <BackButton>←</BackButton>
    <Title>Carrinho de Compras</Title>
    <CartIconWrapper>
      <FiShoppingCart size={24} />
      <ItemCount>{items.length}</ItemCount>
    </CartIconWrapper>
  </HeaderContainer>
);

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const CartIconWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ItemCount = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-left: 8px;
`;
