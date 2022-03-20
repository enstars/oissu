import React from "react";

function Block({ block }) {
  const { content, blockType } = block;
  return (
    <div className="oissu-unit oissu-block">
      <div
        className={`oissu-block__content${
          blockType ? ` oissu-block__${blockType}` : ""
        }`}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
}

export default Block;
