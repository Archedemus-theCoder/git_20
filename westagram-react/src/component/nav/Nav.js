import React from "react";
import { Link, withRouter} from "react-router-dom"
import "./Nav.scss"
import "../../styles/common.scss"

class Nav extends React.Component {
    render() {
        return (
            <nav className="navArea">
                    <nav className="navList"> 
                        <img className="instLogo" alt="logo" src="/images/instagram.png"/>
                        <span className="titleFont titleSize">westagram</span>
                    </nav>
                    <nav className="navCenter">
                        <input className="searchTab" type="text" placeholder="검색"/>
                    </nav>
                    <nav className="navRight">
                        <img className="iconCompass" alt="iconCompass" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"/>
                        <img className="iconHeart" alt="iconHeart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
                        <Link to="/"><img className="iconMyPage" alt="iconMyPage" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"/></Link>
                    </nav>
                </nav>
        )
    }
}

export default withRouter(Nav);