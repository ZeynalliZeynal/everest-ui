import { Button } from "@everest-ui/geist-button";
import styles from "./page.module.css";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@everest-ui/geist-dropdown-menu";

export default function Page() {
  return (
    <div className={styles.page}>
      <Button>Test</Button>
      <DropdownMenu>
        <DropdownMenuTrigger>popper</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>Label</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Favorite</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Templates</DropdownMenuItem>
                <DropdownMenuItem>Projects</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuItem disabled>Disabled</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
