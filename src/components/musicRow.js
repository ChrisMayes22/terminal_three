import React from "react";
import './musicRow.css';
import { IoIosPlayCircle } from "react-icons/io";

const musicRow = ({content}) => {
    return(
        <div className="music-row-flex">
            <div className="music-row-content">
                {content}
            </div>
        </div>
    )
}

export default musicRow;