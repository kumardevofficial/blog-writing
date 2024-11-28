import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Strore/AuthContext";

const CreatePost = () => {
  const postHeading = useRef();
  const postImgaeUrl = useRef();
  const fullArticle = useRef();
  const postCategory = useRef();
  const [initialPost, setPost] = useState({});

  const handleSubmit = async () => {
    // const token = Cookies.get("token");
    // console.log(token);
    const thearticle = {};
    thearticle.postHeading = postHeading.current.value;
    thearticle.postImgaeUrl = postImgaeUrl.current.value;
    thearticle.fullArticle = fullArticle.current.value;
    thearticle.postCategory = postCategory.current.value;
    // console.log(thearticle);
    const URL = "http://localhost:3000/create-post";

    try {
      const resonse = await axios.post(URL, thearticle, {
        withCredentials: true,
        // headers: {
        //   Authorization: `Bearer ${yourToken}`, // Add your token here
        // },
      });
      console.log(" the response is ", resonse);
    } catch (err) {
      console.error(" there is some error ", err);
    }
  };

  return (
    <div
      className="w-1/2 bg-blue-200 m-auto mt-5 box-border p-5 rounded-md"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "space-evenly",
        rowGap: "1rem",
      }}
    >
      <div>
        <h4>Post Heading</h4>
        <input
          type="text"
          className="border-solid w-80 rounded-sm"
          ref={postHeading}
        />
      </div>
      <div>
        <label htmlFor="articleImage">Article Image</label>
        {/* <input type="file" /> */}
        <input
          type="text"
          placeholder="enter the image url"
          ref={postImgaeUrl}
        />
      </div>
      <div>
        <label htmlFor="fullarticle">Full Article</label>
        <textarea
          name="fullarticle"
          id="fullarticle"
          cols={70}
          rows={10}
          ref={fullArticle}
        ></textarea>
      </div>
      <div>
        <label htmlFor="postCategory">Post Category :</label>
        <select name="postCategory" id="postCategory" ref={postCategory}>
          <option defaultValue disabled>
            Select any one
          </option>
          <option value="politics">Politics</option>
          <option value="general">General</option>
          <option value="technology">Technology</option>
        </select>
      </div>
      <div>
        <button
          class="rounded bg-blue-600 p-1 text-white font-bold pointer"
          onClick={handleSubmit}
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
