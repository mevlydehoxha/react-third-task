import React, { useState } from "react";
import "./PopupPage.css";
import {Popup} from '../components/Popup/Popup';


function PopupPage() {
  const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => {
    setShowPopup(prev => !prev);
  };
  return (
    <div>
        <button className="popup-button" onClick={openPopup}>show popup</button>
        <Popup showPopup={showPopup} setShowPopup={setShowPopup}/>
    </div>
  );
}
export default PopupPage;