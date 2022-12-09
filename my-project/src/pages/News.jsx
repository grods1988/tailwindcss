import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { newsdata } from "./NewsData";
import ButtonD from "../assets/ButtonD";
import ButtonR from "../assets/ButtonR";

export default function News() {
  const URL = `https://newsapi.org/v2/everything?q=formula1&language=en&sortBy=publishedAt&pageSize=40&excludeDomains=cryptodaily.co.uk,globenewswire.com&apiKey=706e3f9a85834c848a24dd1ec7f8159f`;

  const [news, setNews] = useState(newsdata);

  const removeArticle = (title) => {
    const newNews = news.filter((article) => article.title !== title);
    setNews(newNews);
  };

  //   const getNews = async () => {
  //     const response = await axios(URL);
  //     console.log(response.data.articles);
  //     setNews(response.data.articles);
  //   };

  //   useEffect(() => {
  //     getNews();
  //   }, []);
  if (news.length < 1) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">No more news</h1>
        <button onClick={() => setNews(newsdata)}>
          <ButtonR>Refresh</ButtonR>
        </button>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h1>News</h1>
      </div>
      <div className="container grid lg:grid-cols-2 gap-8 ">
        {news.map((article, index) => {
          const { author, title, content, description, url, urlToImage } =
            article;
          return (
            <div key={index} className="border-2 rounded-bl-lg p-1">
              <div className="overflow-hidden">
                <img
                  src={urlToImage}
                  alt=""
                  className="hover:scale-[1.3]  transition duration-1000 ease-in-out "
                />
              </div>
              <div className="p-6 text-center ">
                <h1 className="text-2xl font-semibold">{title}</h1>
                {/* <p>{description}</p> */}
                <p className="font-2xl">{description}</p>
                <p className="mt-3 font-semibold">{author}</p>
              </div>
              <div className="flex items-center justify-around">
                <a href={url} target="_blank">
                  <ButtonD>read more</ButtonD>
                </a>
                <button onClick={() => removeArticle(title)}>
                  <ButtonR>Remove</ButtonR>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
