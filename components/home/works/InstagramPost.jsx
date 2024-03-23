import React, { useEffect } from "react";

const InstagramPost = ({ postId }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.instagram.com/embed.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [postId]);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-captioned
      data-instgrm-permalink={`https://www.instagram.com/p/${postId}/?utm_source=ig_embed&amp;utm_campaign=loading`}
      data-instgrm-version="14"
      style={{
        background: "#FFF",
        border: 0,
        borderRadius: "3px",
        boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
        margin: "1px",
        maxWidth: "540px",
        minWidth: "326px",
        padding: "0",
        width: "99.375%",
        // width: "-webkit-calc(100% - 2px)",
        // width: "calc(100% - 2px)",
      }}
    >
      <h1>holaholaoasada</h1>
    </blockquote>
  );
};

export default InstagramPost;
