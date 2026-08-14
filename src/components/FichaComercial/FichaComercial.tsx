"use client";

import styles from "./FichaComercial.module.css";

export default function FichaComercial() {
  return (
    <main className={styles.container}>
      <section className={styles.card}>
        <h1>Ficha de Cadastro de Imóvel Comercial</h1>

        <p>
          Preencha os dados abaixo para realizar o cadastro para locação do
          imóvel comercial.
        </p>
      </section>
    </main>
  );
}