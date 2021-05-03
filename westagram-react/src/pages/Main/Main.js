import React from "react";
import { Link } from "react-router-dom"
import "./Main.scss"
import "../../styles/common.scss"
import Nav from "../../component/nav/Nav"
import Feed from "../../component/feed/Feed"
import Aside from "../../component/aside/Aside"


class Main extends React.Component {
    render() {
        return (
            <>
                <Nav />
                <main className="mainArea">
                    <Feed />
                    <Aside />
                </main>
            </>
        );
    }
}

export default Main;