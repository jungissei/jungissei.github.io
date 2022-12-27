import styles from "./Header.module.scss";

export function Header() {
  return (
    <div id={styles.template_header} className={styles.page_layout}>
      <div className={styles.layout_inner}>
        <div className={styles.layout_container}>
          <div className={styles.layout_width}>
            <h1 className={styles.page_ttl}>
              <a href="/">FrontEnd UI</a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
