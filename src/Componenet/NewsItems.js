import React from 'react'

const NewsItems = (props) => {

    let { title, description, imgUrl, newsUrl, author, date, source } = props;
    return (
        <div className="my-3">
            <div className="card" >
                <div style={{
                    justifyContent: 'flex-end',
                    display: 'flex',
                    right: '0',
                    position: 'absolute'
                }
                } >
                    <span class="badge rounded-pill bg-danger">{source}</span>
                </div>

                <img src={!imgUrl ? "https://cdn.ndtv.com/common/images/ogndtv.png" : imgUrl} className="card-img-top" alt="..." />
                <div className="card-body" >
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} On {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More </a>
                </div>
            </div>
        </div>
    )

}

export default NewsItems
