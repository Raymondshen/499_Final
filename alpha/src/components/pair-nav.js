import React from 'react';

import chooseIcon from '../assets/images/icon_choose_font.svg'; 
import sizeIcon from '../assets/images/icon_font_size.svg'; 
import spacingIcon from '../assets/images/icon_spacing.svg'; 
import downloadIcon from '../assets/images/icon_download.svg'; 

import {
	Link,
} from 'react-router-dom';

const PairNav = ({path}) => {
    return (
        <div className="selection-nav-container flex-xs-justify-even position-xs-a flex-xs-parent flex-xs-align-center w-100 bg-dark-transparent">
            <div className="selection-nav-links">
                <Link className="flex-xs-parent flex-xs-vertical hover-underline" to={`${path}/`}>
                    <img src={chooseIcon} alt="Choose font" className="pairing-nav-icon"></img>
                    <span>Choose</span>
                </Link>	
            </div>
            <div className="selection-nav-links">
                <Link className="flex-xs-parent flex-xs-vertical hover-underline" to={`${path}/set-sizes`}>
                    <img src={sizeIcon} alt="Choose font" className="pairing-nav-icon"></img>
                    <span>Font Size</span>
                </Link>
            </div>
            <div className="selection-nav-links">
                <Link className="flex-xs-parent flex-xs-vertical hover-underline" to={`${path}/spacing`}>
                    <img src={spacingIcon} alt="Choose font" className="pairing-nav-icon"></img>
                    <span>Spacing</span>
                </Link>
            </div>
            <div className="selection-nav-links">
                <Link className="flex-xs-parent flex-xs-vertical hover-underline" to={`${path}/download`}>
                    <img src={downloadIcon} alt="Choose font" className="pairing-nav-icon"></img>
                    <span>PDF</span>
                </Link>
            </div>
        </div>
    );
}

export {PairNav};