import React from 'react'
import './ModalRegistor.css'

function ModalRegistor(props) {
    return (
        <div>
            <div id="register-success" className={"modal fade " + (props.active && 'show')}>
                <a href="/#" className="close-modal">
                    <img alt="" src="assets/img/ico-close.png" />
                </a>
                <div className="modal-content">
                    <h2>{props.title}</h2>
                    <p>{props.detail}<br /><br />
                    </p>
                    <a className="btn" href="/#" onClick={props.handleClick}>
                        OK
                        </a>
                </div>
            </div>
            <div className={"overlay " + (props.active && "show")} onClick={props.handleClick} />
        </div>
    )
}

export default ModalRegistor