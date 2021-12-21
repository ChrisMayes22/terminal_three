import React from "react";
import MusicRow from './musicRow.js';
import './music.css';


const poetry = () => {
    return(
        <div className={'music-flex-root'}>
                <div className={'music-list'}>
                    <h1>CURRENT AUTHORIZATIONS</h1>
                    <MusicRow content={"Owner - Celestia, Luna, manual override"}/>
                    <MusicRow content={"Admin - *s%!j@%’!, Smooze, !#%!#FD, manual override, nettlekiss"}/>
                    <MusicRow content={"Officer - Nettlekiss, manual override"}/>    
                </div>
        </div>
    )
}

export default poetry;