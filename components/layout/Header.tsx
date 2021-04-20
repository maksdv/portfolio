import { menuItems } from "../../utils/menuItems";
import { LinkButton } from "../common/linkButton/LinkButton";

import styles from "./header.module.css";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        {menuItems.map((item) => {
          const { goTo, name, color, background } = item;
          return (
            <LinkButton
              key={name}
              label={name}
              goTo={goTo}
              textColor={color}
              background={background}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Header;
