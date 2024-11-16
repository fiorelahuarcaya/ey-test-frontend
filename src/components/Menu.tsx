import eyLogo from "../assets/EY.svg";

const Menu = () => {
  return (
    <div style={styles.menu}>
      <div className="wrapper" style={styles.menu}>
        <a href="/">
          <img src={eyLogo} className="logo" alt="EY logo" />
        </a>
        <nav>
          <a href="/">Proveedores</a>
          <a href="/login">Login</a>
        </nav>

      </div>
    </div>
  );
};

export default Menu;

const styles: { [key: string]: React.CSSProperties } = {
  menu: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      backgroundColor: 'var(--background)',
  }
};


