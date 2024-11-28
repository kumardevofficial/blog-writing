import { useEffect, useState } from "react";
import PoliticsNewsArticleBox from "./PoliticsNewsArticleBox";
import axios from "axios";

const PoliticNews = () => {
  const [initialPost, setPost] = useState([]);
  const URL = "http://localhost:3000/political/political-news";
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
        <PoliticsNewsArticleBox key={index} data={data} />
      ))}
    </>
  );
};

export default PoliticNews;
