import Line from "./Line";
import Block from "./Block";

function Story({ units, icons }) {
  return (
    <div className="oissu-story">
      {units.map((unit) => {
        const key = JSON.stringify(unit);
        if (unit.type === "line")
          return <Line key={key} line={unit} icons={icons} />;
        if (unit.type === "block") return <Block key={key} block={unit} />;
        return (
          <div
            className="oissu-unit oissu-block"
            dangerouslySetInnerHTML={{ __html: unit.content }}
          ></div>
        );
      })}
    </div>
  );
}

export default Story;
