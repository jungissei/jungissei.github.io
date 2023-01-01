import styles from "./Repository.module.scss";

export function RepositoryTopBlock() {
  return (
    <div id={styles.repositories_block} className={styles.page_layout}>
      <div className={styles.layout_inner}>
        <div className={styles.layout_container}>
          <div className={styles.layout_width}>

            <h2 className={styles.ttl}>jQuery</h2>

            <div className={styles.items}>

              <a
                className={styles.item}
                href="/jquery.modal/"
              >
                <p className={styles.emoji}>&#128276;</p>
                <p className={styles.name}>jquery.modal</p>
              </a>

              <a
                className={styles.item}
                href="/jquery.global_menu/"
              >
                <p className={styles.emoji}>&#128005;</p>
                <p className={styles.name}>jquery.global_menu</p>
              </a>

              <a
                className={styles.item}
                href="/jquery.go_top/"
              >
                <p className={styles.emoji}>&#128660;</p>
                <p className={styles.name}>jquery.go_top</p>
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
