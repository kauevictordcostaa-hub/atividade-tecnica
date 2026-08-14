import styles from "./FichaComercial.module.css";

export default function FichaComercial() {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h1>Cadastro de Imóvel Comercial</h1>

        <form>
          <label>Razão Social</label>
          <input
            type="text"
            placeholder="Digite a razão social"
            required
          />

          <label>Nome Fantasia</label>
          <input
            type="text"
            placeholder="Digite o nome fantasia"
            required
          />

          <label>CNPJ</label>
          <input
            type="text"
            placeholder="00.000.000/0000-00"
            required
          />

          <label>Inscrição Estadual</label>
          <input
            type="text"
            placeholder="Digite a inscrição estadual"
            required
          />

          <label>E-mail</label>
          <input
            type="email"
            placeholder="empresa@email.com"
            required
          />

          <label>Nome do Responsável</label>
          <input
            type="text"
            placeholder="Digite o nome do responsável"
            required
          />

          <button type="submit">Enviar dados</button>
        </form>
      </div>
    </main>
  );
}