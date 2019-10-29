import React from 'react'
import './ModalVideo.css'

function ModalVideo(props) {
    return (
        <div id={props.id} className="modal modal-video fade">
            <a href='/#' className="close-modal">
                <img src={props.img} alt=''/>
            </a>
            <div className="modal-content">
                <video controls>
                    <source src={props.vdo} type="video/mp4" />
                    Your browser does not support HTML5 video.
            </video>
            </div>
        </div>
    )
}

export default ModalVideo