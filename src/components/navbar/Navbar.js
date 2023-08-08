import styles from "./navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo} onClick={() => window.location.replace("/")}>
        <img src="https://th.bing.com/th/id/R.3bf184780cfaf48cf5c8c7a7be6a7960?rik=5Lx7FwViZLDDXQ&riu=http%3a%2f%2fcliparting.com%2fwp-content%2fuploads%2f2016%2f05%2fAnimated-cameras-clipart-danaamfa-top-2.png&ehk=%2bg7hdPgiD%2blIHTlfiMB5pZzrk11AHk38RyxKeTvqVqs%3d&risl=&pid=ImgRaw&r=0" alt="logo" />
        <span>PhotoAlbums</span>
      </div>
    </div>
  );
};
