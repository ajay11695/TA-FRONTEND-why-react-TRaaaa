import propTypes from 'prop-types'
import articles from '../data'

function Articles() {
    // console.log(articles)
    return (
        <>
            <div className=' wrap'>
                {articles.map((article) => <Article key={article.publishedAt} articleInfo={article} />)}
            </div>

        </>
    )
}

function Article(props) {
    // console.log(props)
    return (
        <>
            <div className='article'>
                <figure>
                    <img src={props.articleInfo.urlToImage} alt="" />
                    <figcaption>
                        <h3>{props.articleInfo.title}</h3>
                    </figcaption>
                </figure>
                <div className='content'>
                    <p>{props.articleInfo.description}  </p>
                    <h2>{props.articleInfo.author}</h2>
                    <h3>
                        Content:
                        <p>{props.articleInfo.content}</p>
                        <a href={props.articleInfo.url}>know more</a>
                    </h3>
                    <strong>{props.articleInfo.publishedAt}</strong>
                </div>
            </div>
        </>
    )
}

Article.prototype={
    urlToImage:propTypes.string.isRequired,
    url:propTypes.string.isRequired,
    description:propTypes.string.isRequired,
    title:propTypes.string.isRequired,
    publishedAt:propTypes.number.isRequired,
    author:propTypes.string.isRequired
}

export default Articles