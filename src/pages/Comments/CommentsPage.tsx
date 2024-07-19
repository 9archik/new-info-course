import Comments from "../../modules/Comments/Comments";
import { useEffect } from "react";

const CommentsPage = () => {
  useEffect(() => {
    document.body.style.background = "#fcfcfc";
  }, []);
  return (
    <div className="container">
      <Comments />
    </div>
  );
};

export default CommentsPage;
