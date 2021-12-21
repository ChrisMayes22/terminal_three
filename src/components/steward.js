import {React, useState} from "react";
import MusicRow from './musicRow.js';
import './music.css';
import './steward.css';


const Steward = () => {

    const [displayModal, setDisplay] = useState(false);
    const [displayWarning, setWarning] = useState(false);

    const setDisplayButton = () => {
        setDisplay(!displayModal);
    }

    const setDisplayWarning = () => {
        setWarning(true);
    }

    return(
        <div className={'music-flex-root'}>
                <div className={'music-list'}>
                    <h1>STEWARD STATUS</h1>
                    <MusicRow content={"Health: Acceptable"}/>
                    <MusicRow content={"Spellweave Interface: Stable"}/>
                    <MusicRow content={"Psychological State: Flat (diagnostic-word: \"Robot\")"}/>
                    <MusicRow content={""}/>
                    <MusicRow content={"Nettlekiss subsystem detects that Steward’s access to memory banks has manually modified outside standard procedures. Would you like to revert to original system settings?"}/>
                    <button className="steward-button" onClick={() => setDisplayButton()}>
                        REVERT
                    </button>    
                </div>
                {displayModal ?
                    <div className="steward-modal">
                        Are you sure? Records indicate effects of previous Steward restorations have been destructive.
                        <button className="steward-button" onClick={() => setDisplayWarning()}>
                            Yes
                        </button> 
                        <button className="steward-button" onClick={() => setDisplayButton()}>
                            No
                        </button> 
                        {displayWarning
                        ?
                        <span className="warning">ADMIN PERMISSION REQUIRED</span>
                        :
                        null
                        }
                        
                    </div>
                : null}
        </div>
    )
}

export default Steward;