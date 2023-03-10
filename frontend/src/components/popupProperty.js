import React from 'react';
import 'css/popup-note.css';
import PropertyItem from 'components/propertyItem'

const PopupProperty = ({property}) => {
        return (
          <div className="property">
          <button className="note-property" >
            {property.property_title}
          </button>
          <button className="note-property">
            <PropertyItem property={property}/>
          </button>
        </div>
        )
}
export default PopupProperty
