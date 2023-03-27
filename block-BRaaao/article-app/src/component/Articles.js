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
                    <p>{props.articleInfo.description}--<br /> <h2>{props.articleInfo.author}</h2></p>
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

export default Articles