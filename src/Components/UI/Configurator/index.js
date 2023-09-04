import useStore from "@/store/store";
import styles from "./styles.module.scss";
import { Button } from "primereact/button";

const Configurator = () => {
  const selected = useStore((state) => state.selected);
  const setSelected = useStore((state) => state.setSelected);
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
              <Button
                className={styles.item__label}
                onClick={() => setSelected("walnut")}
              >
                Walnut
              </Button>
            </div>
            <div className={styles.item}>
              <Button
                className={styles.item__label}
                onClick={() => setSelected("oak")}
              >
                Oak
              </Button>
            </div>
            <div className={styles.item}>
              <Button
                className={styles.item__label}
                onClick={() => setSelected("mahogany")}
              >
                Santos Mahogany
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Configurator;
