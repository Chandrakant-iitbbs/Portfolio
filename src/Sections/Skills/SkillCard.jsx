import styles from "./styles.module.css";

const SkillCard = (props) => {
    const { skill, isLast } = props;

    return (
        <div className={styles.skillContainer} style={{ borderWidth: `${isLast ? "0px" : "1px"}` }}>
            <div className={styles.skillLogo}>
                <img src={skill.Logo} alt="logo" style={{ width: "100%" }} />
            </div>
            <div className={styles.skillTitle}>{skill.Title}</div>
            <div className={styles.skillListImgs}>
                {skill.skillImgs.map((image, index)=>{
                    return <img key={index} src={image.url} alt={image.altText} style={{width:"100px", margin:"10px"}} />
                })}
            </div>
        </div>
    );
}

export default SkillCard;
