import Story from "./Story";

function Oissu({ story }) {
  return (
    <div className="oissu-react" data-oissu-version="2.0.0">
      {story.notice ? JSON.stringify(story.notice) : null}
      <br />
      <br />
      <br />
      <br />

      <Story lines={story.lines} />
    </div>
  );
}

export default Oissu;
