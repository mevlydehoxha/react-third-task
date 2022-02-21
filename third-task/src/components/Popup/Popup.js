import React, {useState,useRef, useEffect, useCallback} from "react";
import "./Popup.css";
import {SketchPicker} from 'react-color';


export const Popup = ({ showPopup, setShowPopup }) =>{
    const overlayClose = useRef();

    const closePopup = e => {
        if (overlayClose.current === e.target) {
          setShowPopup(false);
        }
      };
      const keyPress = useCallback(
        e => {
          if (e.key === 'Escape' && showPopup) {
            setShowPopup(false);
          }
        },
        [setShowPopup, showPopup]
      );
      useEffect(
        () => {
          document.addEventListener('keydown', keyPress);
          return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
      );

  const [fontColor, setFontColor]=useState("#444444");
  const [showFontColorPicker, setShowFontColorPicker] =useState(false);
  const [bgColor, setBgColor]=useState("#FFFFFF");
  const [showBgColorPicker, setShowBgColorPicker] =useState(false);
  const [buttonColor, setButtonColor]=useState("#2072EF");
  const [showButtonColorPicker, setShowButtonColorPicker] =useState(false);
  const [borderColor, setBorderColor]=useState("#2072EF");
  const [showBorderColorPicker, setShowBorderColorPicker] =useState(false);
  const [hoverColor, setHoverColor]=useState("#0053D1");
  const [showHoverColorPicker, setShowHoverColorPicker] =useState(false);
  
  return ( 
    <div>
        {showPopup ? (
        <div onClick={closePopup} ref={overlayClose} className="popup-background">
            <div showPopup={showPopup} className="popup-container" style={{color:fontColor, backgroundColor:bgColor}}>
                <div className="popup-body">
                    <div className="popup-title">
                    <h4>Theme Color</h4>
                    <button className="theme-button">Change Theme</button>
                    </div>
                    <div className="font-color">
                    <p>Font Color</p>
                    <div>
                        <div className="color-container">
                            <div>
                                <p className="color-value">{fontColor.toUpperCase()}</p>
                            </div>
                            <div>
                                <div className="color" style={{backgroundColor:fontColor,
                                transition:"ease all 500ms"}}
                                onClick={()=>setShowFontColorPicker(showFontColorPicker => !showFontColorPicker)}>
                                    </div>
                                {
                                    showFontColorPicker && (
                                <SketchPicker
                                color={fontColor}
                                onChangeComplete={(fontColor)=>{setFontColor(fontColor.hex)}}
                                className="color-picker"/>
                                    )} 
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="background-color">
                    <p>Background Color</p>
                    <div>
                        <div className="color-container">
                            <div>
                                <p className="color-value">{bgColor.toUpperCase()}</p>
                            </div>
                            <div>
                                <div className="color" style={{backgroundColor:bgColor,
                                transition:"ease all 500ms"}}
                                onClick={()=>setShowBgColorPicker(showBgColorPicker => !showBgColorPicker)}>
                                    </div>
                                {
                                    showBgColorPicker && (
                                <SketchPicker
                                color={bgColor}
                                onChangeComplete={(bgColor)=>{setBgColor(bgColor.hex)}}
                                className="color-picker"/>
                                    )} 
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="button-color">
                    <p>Button Color</p>
                    <div className="color-container">
                            <div>
                                <p className="color-value">{buttonColor.toUpperCase()}</p>
                            </div>
                            <div>
                                <div className="color" style={{backgroundColor:buttonColor,
                                transition:"ease all 500ms"}}
                                onClick={()=>setShowButtonColorPicker(showButtonColorPicker => !showButtonColorPicker)}>
                                    </div>
                                {
                                    showButtonColorPicker && (
                                <SketchPicker
                                color={buttonColor}
                                onChangeComplete={(buttonColor)=>{setButtonColor(buttonColor.hex)}}
                                className="color-picker"/>
                                    )} 
                            </div>
                        </div>
                    </div>
                    <div className="button-border-color">
                    <p>Button Border Color</p>
                        <div className="color-container">
                            <div>
                                <p className="color-value">{borderColor.toUpperCase()}</p>
                            </div>
                            <div>
                                <div className="color" style={{backgroundColor:borderColor,
                                transition:"ease all 500ms"}}
                                onClick={()=>setShowBorderColorPicker(showBorderColorPicker => !showBorderColorPicker)}>
                                    </div>
                                {
                                    showBorderColorPicker && (
                                <SketchPicker
                                color={borderColor}
                                onChangeComplete={(borderColor)=>{setBorderColor(borderColor.hex)}}
                                className="color-picker"/>
                                    )} 
                            </div>
                        </div>
                    </div>
                    <div className="button-mouseover-color">
                    <p>Buttons Mouseover Color</p>
                    <div className="color-container">
                            <div>
                                <p className="color-value">{hoverColor.toUpperCase()}</p>
                            </div>
                            <div>
                                <div className="color" style={{backgroundColor:hoverColor,
                                transition:"ease all 500ms"}}
                                onClick={()=>setShowHoverColorPicker(showHoverColorPicker => !showHoverColorPicker)}>
                                    </div>
                                {
                                    showHoverColorPicker && (
                                <SketchPicker
                                color={hoverColor}
                                onChangeComplete={(hoverColor)=>{setHoverColor(hoverColor.hex)}}
                                className="color-picker"/>
                                    )} 
                            </div>
                        </div>
                    </div>
                    <div className="popup-footer">
                        <button style={{backgroundColor:buttonColor, borderColor:borderColor }} className="save-button">Save</button>
                        <button  onClick={() => setShowPopup(prev => !prev)} className="cancel-button">Cancel</button>
                    </div>
                </div>  
            </div>
         </div>
         ) : null}
    </div>
  );
}

export default Popup;