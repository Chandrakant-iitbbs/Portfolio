import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';

const Navbar = () => {
  const sections = ["home", "education", "achievements", "skills", "projects", "contact"];
  return (
    <div className={styles.container}>
      <div className={styles.NavbarName}>
        Chandrakant Gupta
      </div>
      <div className={styles.navBar}>
        {sections.map((section,index) => (
          <div className={styles.NavbarLinks} key={index}>
            <Link to={`#${section}`} className={styles.NavbarLinkText}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </div>
        ))}
      </div>
      <Hamburger sections={sections} />
    </div>
  );
}

export default Navbar;
