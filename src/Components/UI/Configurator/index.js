import styles from "./styles.module.scss";

const Configurator = () => {
  return (
    <div className={styles.config}>
      <div className={styles.config__section}>
        <div className={styles.config__section__title}>Room Configuration</div>
        <div className={styles.config__section__values}>
          <div className={styles.config__section__values__title}>
            <p>Parquet</p>
          </div>
          <div className={styles.items}>
            <div className={styles.item}>
              <div className={styles.item__label}>Walnut</div>
            </div>
            <div className={styles.item}>
              <div className={styles.item__label}>Oak</div>
            </div>
            <div className={styles.item}>
              <div className={styles.item__label}>Santos Mahogany</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Configurator;
