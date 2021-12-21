import React from "react";
import { Link } from "react-router-dom";
import MusicRow from './musicRow.js';
import './music.css';

const music = () => {
    return(
        <div className={'music-flex-root'}>
                <div className={'music-list'}>
                    <h1>ADMIN</h1>
                    <Link to="/permissions">
                        <MusicRow content={"REVIEW PERMISSIONS"}/>
                    </Link>
                    <Link to="/steward">
                        <MusicRow content={"REVIEW STEWARD'S STATUS"}/>
                    </Link>
                    <MusicRow content={"CONTACT NETTLEKISS SUBSYSTEM FOR MANUAL REQUEST"}/>
                    <MusicRow content={"SET SECURITY TARGET [admin required]"}/>
                    <MusicRow content={"SELF DESTRUCT [owner required]"}/>
                    <MusicRow content={"CUT STEWARD LIFE SUPPORT [owner required]"}/>
                </div>
        </div>
    )
}

export default music;