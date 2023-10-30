import style from "./header.module.css";
import './Body.js'

function Header() {
    return (
        <>
           <div className={`${style.mainDiv}`}>
                <div className={`${style.part1}`}>
                    <h1>
                            Family Wellness
                    </h1>
                    <p>
                        MASSAGE THEREPY
                    </p>
                </div>
                <div className={`${style.part2}`}>
                    <div><a href="#contact">Home</a></div>
                    <div>About</div>
                    <div>Career</div>
                    <div>FQA</div>
                    <div>Contact</div>
                </div>
           </div>
        </>
    )
}
export default Header;

