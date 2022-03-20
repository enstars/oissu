import React from "react";

function Line({ line, icons }) {
  const { speaker, content } = line;
  return (
    <div className="oissu-unit oissu-line">
      {/* {JSON.stringify(line)} */}
      <div className="oissu-line__icon">
        <img src={icons[speaker.toLowerCase()]} />
      </div>
      <div className="oissu-line__name">{speaker}</div>
      <div className="oissu-line__content">
        {content.map((l) => (
          <div key={l} dangerouslySetInnerHTML={{ __html: l }}></div>
        ))}
      </div>
    </div>
  );
}

export default Line;
