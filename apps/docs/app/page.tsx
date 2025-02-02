import { Button } from "@everest-ui/geist-button";
import styles from "./page.module.css";
import {
  Popper,
  PopperContent,
  PopperItem,
  PopperTrigger,
} from "@everest-ui/react-popper";

export default function Page() {
  return (
    <div className={styles.page}>
      <Button>Test</Button>
      <Popper>
        <PopperTrigger>popper</PopperTrigger>
        <PopperContent>
          <PopperItem>Profile</PopperItem>
          <PopperItem>Logout</PopperItem>
        </PopperContent>
      </Popper>
    </div>
  );
}
