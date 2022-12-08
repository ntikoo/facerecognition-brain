import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit})=>{
    return(
        <div>
            <p  className="f3">
                {"This magic brain will detect faces in your pictures. Give it a try"}
            </p> 
            <div className="center">
                    <div className="pa4 br3 shadow-5 form center">
                        <input type='text' className="f4 w-70 pad3 center" onChange={onInputChange} />
                        <button onClick={onButtonSubmit} className="f4 w-30 grow ph3 pv2 link dib white bg-light-purple pointer">Detect</button>
                    </div>
            </div>
       

        </div>
    )
}
export default ImageLinkForm