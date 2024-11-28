import { Link } from "react-router-dom";
const PoliticsNewsArticleBox = ({ data, key }) => {
  const { postHeading, fullArticle, postImgaeUrl, postCategory, _id } = data;
  return (
    <div class="mt-5 py-8 px-8 w-3/4 mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img
        class="block mx-auto h-24  sm:mx-0 sm:shrink-0"
        src={postImgaeUrl}
        alt="Woman's Face"
      />
      <div class="text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
          <p class="text-lg text-black font-semibold">{postHeading}</p>
          <p class="text-slate-500 font-medium">{`${fullArticle.slice(
            0,
            150
          )} ....................`}</p>
        </div>
        <div
          className="w-56"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <Link
            to={`/article/posts/${_id}`}
            className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          >
            Read More..
          </Link>
          <Link
            to={`http://localhost:5173/${postCategory}-news`}
            className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          >
            {postCategory}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PoliticsNewsArticleBox;
