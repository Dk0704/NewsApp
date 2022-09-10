import React from 'react'

const NewsItem = (props) =>  {
 
        let {title, description, imgUrl, newsUrl, author, date} = props;
        return (
            <div>
                <div className="card">
                    <img src={imgUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    
}

export default NewsItem
