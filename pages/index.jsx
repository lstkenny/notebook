import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Memo book</title>
        <meta name="description" content="Memo note book" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <section className={styles.void}>
        </section>
        <section className={styles.cover}>
          <h1 className={styles.title}>
            {"  "}Field notes<sup>®</sup>
          </h1>
          <div className={styles.description}>
            <p>Set of three pitch black</p>
            <form className={styles.login_form}>
              <div className={styles.form_control}>
                <label>owner:</label>
                <input />
              </div>
              <div className={styles.form_control}>/</div>
              <div className={styles.form_control}>
                <label>password:</label>
                <input type="password" />
              </div>
            </form>
            <p>48-page memo book</p>
            <hr />
            <p>Proudly printed and manufactured in USA</p>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        lstkenny &copy; 2022
      </footer>
    </>
  )
}
