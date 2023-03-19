import React, {useState} from 'react';
import 'css/itemNote.css'
import Note from 'components/popup/note'
import PropertyItem from './propertyItem'

const NoteItem = ({note}) => {
  //const [showPopup, setShowPopup] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const onClick = (e) => {
    e.preventDefault()
    setShowPopup((prev) => {
      return !prev
    })
  }
  return (
    <>
    <div className="noteItem" onClick={onClick}>
      <p className="title">
      {note.title}
      </p>
      {note.properties.map((property, idx) => 
        <PropertyItem key={idx} property={property}/>
      )}

    </div>
    {showPopup && <Note onClickOutside={() => {setShowPopup(false)}} note={note}/>}
    </>
    
  )
}
export default NoteItem
