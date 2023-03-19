import React from 'react';
import 'css/popup-note.css';
import PopupProperty from 'components/popupProperty'
import {useRef, useContext } from 'react';
import {useClickOutside} from 'hooks/useClickOutside'
const Note = ({onClickOutside, note}) => {
  const ref = useRef(null);
  useClickOutside(onClickOutside, ref)

  return (
    <div className="popup-container">
      <div ref={ref} className="popup">
      <h1 className="title">
        {note.title}
      </h1>
      <div className="main-modal">
        {note.properties.map((property, idx) => 
          <PopupProperty key={idx} property={property}/>
        )}
      <div className="comment">
        <p>
        Добавить коментарий
        </p>
      </div>
      </div>
    </div>
    </div>
  )

}
export default Note