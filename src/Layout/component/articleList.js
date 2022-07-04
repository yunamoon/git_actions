/* eslint-disable */
import react from "react";
import { useState, useRef ,useEffect } from "react/cjs/react.development";
import { Swiper, SwiperSlide } from 'swiper/react';


function ArticleList({ articles: articles }) {


    return (
        <div className='article-wrap' >
        {articles.map((article) => (
        <div className="article-item" key={article.id}>
        <a rel='noopener noreferrer' href={article.rel}>
        <h3 className='title'>{article.title}</h3>
        <span className='press'>{article.press}</span>
         </a>
         </div >
       
        ))}
        </div>    
    );
}

export default ArticleList;