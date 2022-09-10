import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
// import NavBar from './NavBar';


const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const [search, setSearch] = useState('')

    const onChange = () => {
        setSearch(document.getElementById('search').value);
        // console.log(document.getElementById('search').value + "value");
        // console.log(search + "final")
    }

    const updateNews = async () => {
        if (search === '') {
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=27096985012a41c584c05b43681e57e3&page=${page}&pageSize=${props.pageSize}`
            setLoading(true)
            let data = await fetch(url)
            let finalData = await data.json();
            setArticles(finalData.articles)
            setTotalResults(finalData.totalResults)
        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=27096985012a41c584c05b43681e57e3`
            setLoading(true)
            let data = await fetch(url)
            let finalData = await data.json();
            // console.log(finalData.articles)
            // console.log(finalData.articles.filter( element => element.title.includes(search)))
            setArticles(finalData.articles.filter(element => element.title.toLowerCase().includes(search.toLowerCase())))
            setTotalResults(finalData.totalResults)
        }
        setLoading(false)

        // this.setState({ articles: finalData.articles, totalResults: finalData.totalResults, loading: false })
    }

    useEffect(() => {
        updateNews();
    }, [page, search])


    const handleNext = async () => {

        setPage(page + 1);
        updateNews();
        console.log(page + "after")

    }
    const handlePrev = async () => {
        setPage(page - 1);
        updateNews();
    }

    return (

        <div className="container my-3">
            <h2 className="text-center">Top HeadLines</h2>
            <form className="d-flex" >
                <input className="form-control me-2" id="search" type="search" placeholder="Search" aria-label="Search" value={search} onChange={onChange} />
                {/* <button className="btn btn-outline-success" type="submit" to="/Search">Search</button> */}
            </form>
            {loading && <Spinner />}
            <div className="row my-2">
                {!loading && articles.map((element) => {
                    return <div className="col-md-3" key={element.url} >
                        <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                    </div>
                })}
            </div>
            <div className="container d-flex justify-content-between">
                <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrev}> &larr; Previous</button>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button disabled className="btn btn-dark" type="button">Current Page : {page}</button>
                </div>
                <button disabled={(page >= Math.ceil(totalResults / props.pageSize))} type="button" className="btn btn-dark" onClick={handleNext}>Next &rarr;</button>
            </div>

        </div>
    )

}
News.defaultProps = {
    country: 'in',
    pageSize: 4,
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News
