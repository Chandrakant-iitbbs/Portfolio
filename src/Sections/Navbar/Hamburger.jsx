import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import {useState} from "react";

let Hamburger = (props) => {
    const sections = props.sections;
    const [showMenu, setShowMenu] = useState(true);

    const show = () => {
        setShowMenu(false);
        let ele = document.getElementById("HamMenuList");
        ele.style.display = "block"
    }

    const close = () => {
        setShowMenu(true);
        let ele = document.getElementById("HamMenuList");
        ele.style.display = "none"
    }
    
    return (
        <div className={styles.HamburgerContainer} id="hamBurgerContainer">
            <div className={styles.hamMenuList} id="HamMenuList">
                <ul>
                    {sections.map((section,index) => {
                        return (
                            <li onClick={close} key={index}><Link to={`#${section}`} className={styles.NavbarLinkText}>{section.charAt(0).toUpperCase()+section.substring(1)}</Link></li>
                        );
                    })}
                </ul>
            </div>
            <div >{showMenu?<i className="fa-solid fa-bars" style={{ color: "white" }} onClick={show}></i>:<i className="fa-solid fa-xmark" style={{ color: "white" }} onClick={close}></i>} </div>
        </div>
    );
}

export default Hamburger;
