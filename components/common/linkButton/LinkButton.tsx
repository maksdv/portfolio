import Link from "next/link";
import styles from "./linkButton.module.css";

type LinkButtonType = {
  label: string;
  goTo: string;
  background?: string;
  textColor: string;
};

export const LinkButton = ({
  label,
  goTo,
  textColor,
  background,
}: LinkButtonType) => {
  return (
    <Link href={goTo}>
      <a className={styles.linkContainer}>{label}</a>
    </Link>
  );
};
