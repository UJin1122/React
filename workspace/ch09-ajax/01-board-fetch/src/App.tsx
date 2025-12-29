import { useState } from "react";
import BoardInfo from "@/pages/board/BoardInfo";
import CommentList from "@/pages/board/CommentList";
import CommentNew from "@/pages/board/CommentNew";
import Product from "@/pages/board/product";

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleCommentAdded = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <>
    <h1>01 Fetch API</h1>
    <Product/>
    <BoardInfo/>
    <CommentList key={refreshKey}/>
    <CommentNew onCommentAdded={handleCommentAdded}/>
    </>
  );
}

export default App
