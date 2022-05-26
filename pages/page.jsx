import Head from "next/head"
import Link from "next/link"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <>
      <Head>
        <title>Memo book page</title>
        <meta name="description" content="Memo note book" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <div className={styles.menu}>
          <ul>
            <li>Home</li>
            <li>Search</li>
            <li>Pages</li>
            <li>Tags</li>
            <li>Settings</li>
          </ul>
        </div>
        <section className={`${styles.cover} ${styles.section_left}`}>
          <div className={`${styles.page} ${styles.page_left}`}>
            <div className={styles.page_title}>
              <h2>My very-very long note title, so long it doesn't fit in one line</h2>
              <span>26 May 2022</span>
            </div>
            <div className={styles.page_content}>
              Our popular “Pitch Black” Memo Book eventually gave us the inspiration we needed: we improved the original dot-graph version, added a ruled version, and further expanded the line to include larger “Note Book” versions.
            </div>
            <div className={styles.page_footer}>
              <div className={styles.page_prev}>
              ⇦
              </div>
              <div className={styles.page_number}>
                Page 4 / 234
              </div>
              <div className={styles.page_next}>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.cover} ${styles.section_right}`}>
          <div className={`${styles.page} ${styles.page_right}`}>
            <div className={styles.page_title}>
              <h2>TODO:</h2>
              <span>28 May 2022</span>
            </div>
            <div className={styles.page_content}>
              <p>This is my made with love tododo list</p>
              <ul>
                <li>
                  <input type="checkbox" checked="checked" /> Collect underpants
                </li>
                <li>
                  <input type="checkbox" /> ...
                </li>
                <li>
                  <input type="checkbox" /> PROFIT!!!1
                </li>
              </ul>
            </div>
            <div className={styles.page_footer}>
              <div className={styles.page_prev}>
              </div>
              <div className={styles.page_number}>
                Page 5 / 234
              </div>
              <div className={styles.page_next}>
                ⇨
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        lstkenny &copy; 2022
      </footer>
    </>
  )
}
