import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NewsCard from '../newsPage/NewsCard'

const NewsCarousel = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/blogs').then((response) => {
      if (response.status === 200) {
        setNews(response.data)
      }
    })
  }, [])

  return (
    <>
      {news.length !== 0 &&
        news.map((el) => {
          return (
            <NewsCard
              key={el.id}
              header={el.title}
              content={`${el.content.substring(0, 250)}...`}
              path='dsff'
            />
          )
        })}
    </>
  )
}

export default NewsCarousel
