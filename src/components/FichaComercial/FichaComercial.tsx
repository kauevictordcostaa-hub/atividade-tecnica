import styles from "./FichaComercial.module.css";

export default function FichaComercial() {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h1>Cadastro de Imóvel Comercial</h1>

        <form>
          <label>Razão Social</label>
          <input type="text" required />

          <label>Nome Fantasia</label>
          <input type="text" required />

          <label>CNPJ</label>
          <input type="text" required />

          <label>Inscrição Estadual</label>
          <input type="text" required />

          <label>E-mail</label>
          <input type="email" required />

          <label>Nome do Responsável</label>
          <input type="text" required />

          <button type="submit">Enviar dados</button>
        </form>
      </div>
    </main>
  );
}