import styles from "./styles.module.css";
import frontendLogo from "../../assets/frontendLogo.svg";
import backendLogo from "../../assets/backendLogo.svg";
import devToolsLogo from "../../assets/devToolsLogo.svg";
import programming from "../../assets/programming.jpg"
import database from "../../assets/database.png"
import SkillCard from "./SkillCard";

let Skills = () => {
  const skills = [
    {
      Title: "Frontend",
      Logo: frontendLogo,
      skillImgs: [
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
          altText: "HTML"
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
          altText: "CSS"
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          altText: "Java Script"
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
          altText: "ReactJS"
        },
        {
          url:"https://beecrowd.com/wp-content/uploads/2024/04/2022-04-12-React-Native.jpg",
          altText: "React Native"
        }
      ],
    },
    {
      Title: "Backend",
      Logo: backendLogo,
      skillImgs: [
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
          altText: "C++"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
          altText: "Java"
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
          altText: "ExpressJS"
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
          altText: "NodeJS"
        }
      ],
    },
    {
      Title: "Programming Languages",
      Logo: programming,
      skillImgs: [
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
          altText: "C++"
        },
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNgpskDsuUlZZudeIpE0jqKG1ARZVJHASTdw&s",
          altText: "C"
        },
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSGcnD9w4iAUeuaR7Gt-0XDyWK7PwuRrbWWQ&s",
          altText: "SQL"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
          altText: "Java"
        },
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
          altText: "Python"
        },
      ],
    },
    {
      Title: "Database",
      Logo: database,
      skillImgs: [
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsFMevX225u-NIiaO8hLCc6Des3gkOjUJg3g&s",
          altText: "SQL Database"
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
          altText: "MongoDB"
        }
      ],
    },
    {
      Title: "Dev-Tools",
      Logo: devToolsLogo,
      skillImgs: [
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
          altText: "Git"
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
          altText: "Github"
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
          altText: "VS Code"
        }

      ],
    },


  ];
  return (
    <div className={styles.skillsContainer} id="skills">
      <div className={styles.skillsSection}>
        <div className={styles.skillsTitle}>Skills</div>
        <div className={styles.skillsDescription}>
          I love building <span>Full stack applications</span>, and
          participating in <span>competitive programming</span>.<br />I have
          experience with these technologies.
        </div>
        <div className={styles.skillListContainer}>
          {skills.map((skill, index) => {
            return < SkillCard skill={skill} key={index} isLast={index === skills.length - 1} />
          })}
        </div>
      </div>
    </div>
  );
};
export default Skills;
