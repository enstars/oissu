/* eslint import/no-webpack-loader-syntax: "off" */
import "@fontsource/karla";
import "@fontsource/karla/variable.css";
import "@fontsource/karla/variable-italic.css";
import "@fontsource/bodoni-moda";
import "@fontsource/bodoni-moda/variable-full.css";
import "@fontsource/bodoni-moda/variable-full-italic.css";
import "@fontsource/lexend";
import "@fontsource/lexend/700.css";
import { useState } from "react";
import useLocalState from "./lib/useLocalState";
import styled from "styled-components";
import Story from "./Story";
import Notice from "./Notice";
import Appearance from "./Appearance";
import "./tomoya.scss";

// import themeSCSS from "!!raw-loader!./tomoya.scss";
import coreSCSS from "!!raw-loader!./core.scss";
import noticeSCSS from "!!raw-loader!./notice.scss";

const OissuStyle = styled.div`
  ${coreSCSS}
  ${noticeSCSS}
`;

function Oissu({ story }) {
  const [density, setDensity] = useLocalState(
    "density",
    "comfy",
  );
  const [font, setFont] = useLocalState("font", "blog");
  const [appearanceOpen, setAppearanceOpen] = useState(false);
  // console.log(themeSCSS);
  return (
    <OissuStyle
      className="oissu-react"
      data-oissu-version="2.0.0"
    >
      {density}
      {/* {density}
      <button
        type="button"
        onClick={() => setDensity(density === "comfy" ? "compact" : "comfy")}
      >
        toggle
      </button> */}
      <button type="button" onClick={() => setAppearanceOpen(!appearanceOpen)}>
        toggle
      </button>

      {appearanceOpen && (
        <Appearance
          setAppearanceOpen={setAppearanceOpen}
          density={density}
          setDensity={setDensity}
          font={font}
          setFont={setFont}
        />
      )}
      {story.notice ? <Notice notice={story.notice} /> : null}

      <Story {...story} />
      {/* {story.links && JSON.stringify(story.links)} */}
    </OissuStyle>
  );
}

export default Oissu;
