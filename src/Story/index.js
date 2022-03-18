import Line from "./Line";

function Story({ lines }) {
  return (
    <div className="oissu-story">
      {lines.map((line) => {
        if (line.type === "line") return <Line line={line} />;
        if (line.type === "block") return <p>{JSON.stringify(line.content)}</p>;
        return <p>Other Unit</p>;
      })}
    </div>
  );
}

export default Story;
