import React from 'react'
import './Card.css'
function Card(props) {
    return (
        <div>
            <div className="re-image">
                <img alt="" src={props.img} />
            </div>
            <div className="re-detail">
                <h4>
                    {props.title}
                </h4>
                <p>
                    {props.detail}
                </p>
            </div>
            <div className="btn">
                <a href="/#">
                    Learn more
                </a>
            </div>
        </div>
    )
}

export default Card