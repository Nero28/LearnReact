import React from 'react'
import Article from './Article'

export default function ArticleList({articles}){
    const articleElements=articles.map(article=>
        <li key={article.id}><Article article={article}/></li>  //добавление идентификатора key
    )
        return (
    <ul>
    {articleElements}
    </ul>
)
       }