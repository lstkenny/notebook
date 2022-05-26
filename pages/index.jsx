import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from "../styles/Home.module.css"

export default function Home() {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Memo book</title>
        <meta name="description" content="Memo note book" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <section className={`${styles.void} ${styles.section_left}`}>
        </section>
        <section className={`${styles.cover} ${styles.section_right}`}>
          <h1 className={styles.title}>
            genius
            <br />
            notes
            <span></span>
          </h1>
          <div className={styles.description}>
            <form>
              <h2 className={styles.text_center}>
                Sign in with an email
              </h2>
              <div className={styles.login_form}>
                <div className={styles.form_control}>
                  <label>owner:</label>
                  <input />
                </div>
                <div className={styles.form_control}>/</div>
                <div className={styles.form_control}>
                  <label>password:</label>
                  <input type="password" />
                </div>
                <div className={`${styles.form_control} ${styles.text_center}`}>
                  <button>Sign&nbsp;in</button>
                </div>
              </div>
              <div className={styles.form_links}>
                <Link href="#">
                  <a>Sign up</a>
                </Link>
                <Link href="#">
                  <a>Forgot password</a>
                </Link>
              </div>
              <hr className={styles.or} />
              <div className={`${styles.form_control} ${styles.text_center}`}>
                <button type="button" onClick={() => router.push("/page")}>
                  <span className={styles.google_button}></span> Sign in with Google
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        lstkenny &copy; 2022
      </footer>
    </>
  )
}
