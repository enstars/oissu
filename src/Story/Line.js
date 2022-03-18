import React from "react";

function Line({ line }) {
    const { speaker, content } = line;
    return (
        <div class="oissu-unit oissu-line">
            {/* {JSON.stringify(line)} */}
            <div class="oissu-line__name">{speaker}</div>
            <div class="oissu-line__icon">{speaker}</div>
            <div class="oissu-line__content">
                {content.map((l) => (
                    <div key={l} dangerouslySetInnerHTML={{ __html: l }}></div>
                ))}
            </div>
        </div>
    );
}

export default Line;
