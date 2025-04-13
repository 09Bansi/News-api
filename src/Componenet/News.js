import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'
import Loading from './Loading';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    
    const updateNews  = async ()=> {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=cb93664a11864853b6dddbeb4182d396&page=${page}&pagesize=${props.pagesize}`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - News`;
        updateNews();
        //eslint-disabled-next-line
    }, [])
    

    // const handlePrevClick = async () => {
    //     console.log("Previous");
        // if (this.state.page > 1) {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cb93664a11864853b6dddbeb4182d396&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`;
        // this.setState({ loading: true });
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        //  this.setState({
        //     page: this.state.page - 1,
        //     articles: parsedData.articles,
        //     loading: false
        //  });
        // }
    //     setPage(page-1)
    //     updateNews()
    // }

    // const handleNextClick = async () => {
    //     console.log("Next");
        // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize))) {
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cb93664a11864853b6dddbeb4182d396&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
        //     this.setState({ loading: true });
        //     let data = await fetch(url);
        //     let parsedData = await data.json();
        //     this.setState({
        //         page: this.state.page + 1,
        //         articles: parsedData.articles,
        //         loading: false
        //     });
        // }
    //     setPage(page+1)
    //     updateNews()
    // }

    const fetchMoreData = async () => {
        
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=cb93664a11864853b6dddbeb4182d396&page=${page+1}&pagesize=${props.pagesize}`;
        setPage(page+1)
        // this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        // this.setState({
        //     articles: this.state.articles.concat(parsedData.articles),
        //     totalResults: parsedData.totalResults
        //     // loading: false
        // })
    };

        return (
            <>
                <h1 className="text-center" style={{ margin: '10px 0px', marginTop: '85px' }}>Fresh News - {capitalizeFirstLetter(props.category)} News HeadLines</h1>
                {loading && <Loading/>} 
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Loading />}
                >
                    <div className="container">
                        <div className="row my-3"  >
                            {articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                        < NewsItems title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 90) : ""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                    </div>
                            
                            })}
                        </div>
                    </div>

                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type=" button" className="btn btn-dark " onClick={this.handlePrevClick} > &larr; Previous</button>
                    <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize))} type="button" className="btn btn-dark " onClick={this.handleNextClick} > Next &rarr;</button>
                </div> */}
            </>
        )
    
}
News.defaultProps = {
    country: 'in',
    pagesize: 10,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
}

export default News
