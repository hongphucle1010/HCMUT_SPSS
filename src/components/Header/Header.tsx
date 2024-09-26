import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Vite + React</h1>
    </header>
  );
};

export default Header;
