import React, { useState } from 'react';
import Popup from 'reactjs-popup';
//

const ControlledPopup = (props) => {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    return (
        <div>
            <button type="button" className="button" onClick={() => setOpen(isOpen => !isOpen)}>
                {props.children[0]}
            </button>

            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <div className="modal">
                    <a className="close" onClick={closeModal}> &times; Click me</a>
                    {props.children[1]}
                    
                </div>
            </Popup>
        </div>
    );
};

export default ControlledPopup;