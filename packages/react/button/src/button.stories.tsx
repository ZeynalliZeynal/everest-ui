import { Button } from "./button";
import "@everest-ui/styles/dist/tailwind.css";
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
