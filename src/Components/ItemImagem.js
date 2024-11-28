import React from 'react';
import styled from 'styled-components';

const ItemImagem = ({ imageUrl, alt }) => (
  <Image src={imageUrl} alt={alt} />
);

export default ItemImagem;

const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
`;
