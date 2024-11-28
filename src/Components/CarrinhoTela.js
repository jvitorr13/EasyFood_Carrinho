import React, { useState } from 'react';

const CarrinhoTela = () => {
  // Estado para adicionar itens ao carrinho
  const [itens, setItens] = useState([]);

  const adicionarItem = () => {
    const novoItem = { nome: 'Produto ' + (itens.length + 1), preco: (itens.length + 1) * 10 };
    setItens([...itens, novoItem]);
  };

  return (
<div style={{ textAlign: 'center', margin: '20px', color: '#9a70ed' }}>
  <h2>Carrinho de Compras</h2>
  <button onClick={adicionarItem}>Adicionar Produto</button>
  <ul style={{ listStyleType: 'none', padding: 0 }}>
    {itens.length === 0 ? (
      <p>O carrinho está vazio!</p>
    ) : (
      itens.map((item, index) => (
        <ul
          key={index}
          style={{
            display: 'inline-block',
            margin: '10px',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            cursor: 'pointer',
            textAlign: 'center',
            backgroundColor: '#f9f9f9',
            transition: 'background-color 0.3s ease, transform 0.2s ease',
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#e0e0e0'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#f9f9f9'}
        >
          {item.nome} - R$ {item.preco}
        </ul>
      ))
    )}
  </ul>
</div>
  );
};

export default CarrinhoTela;
