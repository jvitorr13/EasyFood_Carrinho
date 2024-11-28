import React from 'react';
import styled from 'styled-components';
import ItemImage from './ItemImagem';

const ItemCarrinho = ({ item }) => (
  <ItemCardContainer>
    <ItemImage imageUrl={item.imageUrl} alt={item.name} />
    <ItemInfo>
      <ItemName>{item.name}</ItemName>
      <ItemPrice>R$ {item.price.toFixed(2)}</ItemPrice>
    </ItemInfo>
  </ItemCardContainer>
);

export default ItemCarrinho;

const ItemCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ItemInfo = styled.div`
  flex-grow: 1;
  margin-left: 15px;
`;

const ItemName = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const ItemPrice = styled.p`
  font-size: 14px;
  color: #666;
`;
