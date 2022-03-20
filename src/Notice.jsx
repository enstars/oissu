import React from "react";

function Notice({ notice }) {
  const { prompt, content, type } = notice;
  return (
    <div
      className={`oissu-notice oissu-notice__${type}`}
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
}

export default Notice;
