import { useEffect, useState } from "react";
import GeneralNewsArticleBox from "./GeneralNewsArticleBox";
import axios from "axios";

const GeneralNews = () => {
  const [initialPost, setPost] = useState([]);
  const URL = "http://localhost:3000/general/general-news";
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
        <GeneralNewsArticleBox key={index} data={data} />
      ))}
    </>
  );
};

export default GeneralNews;
