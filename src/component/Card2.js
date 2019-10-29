import React from 'react'
import './Card2.css'


function Card2(props) {
    return (
        <li>
            <div>
                <a href={props.link} target="_blank"  rel="noopener noreferrer">
                    <div className="news-img">
                        <img alt="" src={props.img}/>
                    </div>
                    <div className="news-desc">
                        <h3>
                            {props.title}
                    </h3>
                        <p>
                            {props.detail}
                    </p>
                        <span className="meta">
                            {props.date}
                    </span>
                    </div>
                    <div className="news-more">
                        <h3>
                            {props.title}
                    </h3>
                        <p>{props.detail}</p>
                        <p>{props.detail2}</p>
                        <span className="meta">
                            {props.date}
                    </span>
                    </div>
                </a></div><a href={props.link}>
            </a>
        </li>
    )
}
export default Card2