import { useEffect, useState } from "react";
import TechnologyNewsArticleBox from "./TechnologyNewsArticleBox";
import axios from "axios";

const TechnologyNews = () => {
  const [initialPost, setPost] = useState([]);
  const URL = "http://localhost:3000/technology/technology-news";
  const allpost = async () => {
    try {
      const response = await axios.get(URL);
      setPost(response.data);
    } catch (err) {
      console.log("unable to get the data ", err);
    }
  };

  useEffect(() => {
    allpost();
  }, []);

  return (
    <>
      {initialPost.map((data, index) => (
        <TechnologyNewsArticleBox key={index} data={data} />
      ))}
    </>
  );
};

export default TechnologyNews;
