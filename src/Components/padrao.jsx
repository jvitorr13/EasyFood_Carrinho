import React from "react";

const CarrinhoDeCompras = () => {
  return (
    <div style={styles.container}>
      {/* Cabeçalho */}
      <div style={styles.header}>
        <button style={styles.backButton}>←</button>
        <h2 style={styles.title}>Carrinho de compras</h2>
        <div style={styles.cartIcon}>🛒</div>
      </div>

      {/* Lista de Produtos */}
      <div style={styles.productsContainer}>
        {/* Produto 1 */}
        <div style={styles.product}>
          <input type="radio" name="product" style={styles.radioButton} />
          <img
            src="https://via.placeholder.com/80"
            alt="Produto"
            style={styles.productImage}
          />
          <div style={styles.productDetails}>
            <h3 style={styles.productTitle}>Pastel de Carne</h3>
            <p style={styles.productPrice}>R$ 8,00</p>
          </div>
        </div>

        {/* Produto 2 */}
        <div style={styles.product}>
          <input type="radio" name="product" style={styles.radioButton} />
          <img
            src="https://via.placeholder.com/80"
            alt="Produto"
            style={styles.productImage}
          />
          <div style={styles.productDetails}>
            <h3 style={styles.productTitle}>Quipo Framboesa 600 ml</h3>
            <p style={styles.productPrice}>R$ 6,00</p>
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <div style={styles.footer}>
        <p style={styles.totalText}>Você pagará R$ 14,00</p>
        <button style={styles.continueButton}>Continuar</button>
      </div>
    </div>
  );
};

// Estilos
const styles = {
  container: {
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
    border: "1px solid #ccc",
    borderRadius: "12px",
    backgroundColor: "#f9f9f9",
    padding: "10px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "16px",
  },
  backButton: {
    fontSize: "20px",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  title: {
    fontSize: "18px",
    margin: 0,
  },
  cartIcon: {
    fontSize: "24px",
  },
  productsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  product: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "8px",
    backgroundColor: "#fff",
  },
  radioButton: {
    marginRight: "8px",
  },
  productImage: {
    width: "60px",
    height: "60px",
    objectFit: "cover",
    marginRight: "12px",
  },
  productDetails: {
    textAlign: "left",
  },
  productTitle: {
    fontSize: "16px",
    margin: "0 0 4px",
  },
  productPrice: {
    fontSize: "14px",
    margin: 0,
    color: "#555",
  },
  footer: {
    marginTop: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  totalText: {
    fontSize: "14px",
  },
  continueButton: {
    padding: "8px 16px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#6200ee",
    color: "#fff",
    cursor: "pointer",
  },
};

export default CarrinhoDeCompras;
