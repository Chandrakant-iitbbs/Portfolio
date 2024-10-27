import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import AchievementCard from "./AchievementCard";
import codeChefLogo from "../../assets/codeChefLogo.svg";
import codeForcesLogo from "../../assets/codeforcesLogo.svg";

let Achievement = () => {
    let [cfRating, setCfRating] = useState({
        "rating": 1000,
        "rank": "Newbie"
    });

    useEffect(() => {
        let fetchCfRating = async () => {
            let res = await fetch("https://codeforces.com/api/user.info?handles=Chandrakant64", { method: 'GET' })
                .then(res => res.json());

            if (res.status === "OK") {
                let newratingObj = {
                    "rating": res.result[0].maxRating,
                    "rank": res.result[0].maxRank.charAt(0).toUpperCase() + res.result[0].maxRank.slice(1)
                }
                setCfRating(newratingObj);
            }
            else console.log("Codeforces rating fetch error.");
        }
        fetchCfRating();
    }, [])

    let info = [
        {
            "platLogo": codeChefLogo,
            "platLink": "https://www.codechef.com/users/chandrak2004",
            "platName": "CodeChef",
            "platStats": "(max)⭐️⭐️⭐️ - 1666",
            "achList": [
                "Rank 81 out of 3.5k participants, CodeChef Starters 133 "
            ]
        },
        {
            "platLogo": codeForcesLogo,
            "platLink": "https://codeforces.com/profile/Chandrakant64",
            "platName": "Codeforces",
            "platStats": `(max)${cfRating.rank} - ${cfRating.rating}`,
            "achList": [
                "Rank 3434 out of 30k participants, Codeforces round 906 "
            ]
        }
    ]
    return (
        <div className={styles.achievementsContainer} id="achievements">
            <div className={styles.achievementsSec}>
                <div className={styles.achTitle}>Achievements</div>
                <div className={styles.achDisc}>I'm proud to have achievements  in some of the well-reputed platforms.</div>
                <div className={styles.achListSec}>
                    {info.map((item, index) => {
                        return <AchievementCard key={index} info={item} />
                    }
                    )}
                </div>
            </div>
        </div>
    );
}
export default Achievement;