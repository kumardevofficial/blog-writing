import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const ShowcompleteArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const URL = `http://localhost:3000/article/posts/${id}`;

  useEffect(() => {
    const artilceSet = async () => {
      try {
        const response = await axios.get(URL);
        setArticle(response.data);
      } catch (err) {
        console.log(" there was some error", err);
      }
    };
    artilceSet();
  }, [URL]);
  return (
    <div style={{ width: "50vw", margin: "auto" }}>
      <h1 className="font-extrabold text-2xl">{article.postHeading}</h1>
      <img src={article.postImgaeUrl} />
      <p>{article.fullArticle}</p>
    </div>
  );
};

export default ShowcompleteArticle;
