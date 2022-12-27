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
                href="https://github.com/jungissei/jquery.modal"
                target="_blank"
              >
                <p className={styles.emoji}>&#128276;</p>
                <p className={styles.name}>jquery.modal</p>
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
