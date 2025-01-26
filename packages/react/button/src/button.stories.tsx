import { Button } from "./button";
import styles from "./button.module.css";

export default { title: "Button" };

export function Variants() {
  return (
    <div className={styles.variantsContainer}>
      <Button>primary</Button>
      <Button>secondary</Button>
    </div>
  );
}
