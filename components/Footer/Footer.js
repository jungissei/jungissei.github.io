import styles from './Footer.module.scss'

export function Footer() {
  return (
    <div id={styles.template_footer} className={styles.page_layout}>
      <div className={styles.layout_inner}>
        <div className={styles.layout_container}>
          <div className={styles.layout_width}>

            <p className={styles.txt}>&copy; 2022 Jung Issei</p>

          </div>
        </div>
      </div>
    </div>
  )
}
