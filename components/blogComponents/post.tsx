import { useRouter } from "next/router";
import React from "react";

interface Post {
  id: string;
  title: string;
  route: string;
  content: string;
}

export default function PostData() {
  const router = useRouter();
  const postId = router.query.slug;
  const [postData, setPostData] = React.useState<Post>(null);

  const fetchRoutes = async (postId) => {
    const response = await fetch(`/api/postData?postId=${postId}`);
    const data = await response.json();
    setPostData(data);
  };
  React.useEffect(() => {
    fetchRoutes(postId);
  }, []);
  return (
    <>
      <h1
        onClick={(e) => {
          e.preventDefault();
          console.log(router.query.slug);
          fetchRoutes(router.query.slug);
        }}
      >
        Post Data
      </h1>
      {postData === null ? (
        ""
      ) : (
        <div className="flex text-slate-800">
          <h3>{postData.title}</h3>
          <p>{postData.content}</p>
        </div>
      )}
    </>
  );
}
