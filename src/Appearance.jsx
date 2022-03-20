import Draggable from "react-draggable";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import closeOutline from "@iconify/icons-eva/close-outline";
import { ReactComponent as OissuComfy } from "./assets/oissu_comfy.svg";
import { ReactComponent as OissuCompact } from "./assets/oissu_compact.svg";

import "@fontsource/inter";
import "@fontsource/inter/variable.css";

const WindowWrapper = styled.div`
  /* background: #0005; */
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 2147483647;
  pointer-events: none;
  display: grid;
  place-items: end end;
  font-size: 16px;
  color: #555;
  font-family: "InterVariable", "Inter", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;

  .osx-panel {
    pointer-events: all;
    background: white;
    width: 100%;
    max-width: 300px;
    border: solid 1px #999;
    border-radius: 0.4em;
    box-shadow: 0 0.05em 0.5em hsla(0, 0%, 0%, 0.05),
      0 0.1em 0.2em hsla(0, 0%, 0%, 0.06);
    /* padding: 0.5em; */
    transition: box-shadow var(--os-animation-duration) ease;

    &:hover {
      box-shadow: 0 0.05em 1em hsla(0, 0%, 0%, 0.05),
        0 0.1em 0.5em hsla(0, 0%, 0%, 0.06);
    }
    &--dragging:hover {
      box-shadow: 0 0.05em 1.5em hsla(0, 0%, 0%, 0.09),
        0 0.1em 0.8em hsla(0, 0%, 0%, 0.08);
    }
  }

  .osx-drag {
    padding: 0.3em;
    /* font-weight: 700; */
    user-select: none;
    border-bottom: solid 1px #0003;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: var(--os-animation-duration) ease;
  }

  .osx-panel__label {
    padding: 0.3em 0.5em;
    display: flex;
    line-height: 1;
  }
  .osx-panel__close {
    padding: 0.3em;
    /* background: red; */
    display: flex;
    font-size: 1.1em;
    border-radius: 0.3em;

    &:hover {
      background: #0001;
    }
  }
  .osx-panel__content {
    padding: 0.6em 0.8em;
  }
  .osx-panel__density {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75em;

    svg {
      width: 100%;
      max-width: 100%;
      height: auto;

      border: solid 1.5px #bbb;
      border-radius: 0.3em;
      transition: var(--os-animation-duration) ease;
    }

    & > div {
      font-size: 0.9em;
      transition: var(--os-animation-duration) ease;
      svg {
        opacity: 0.5;
      }

      &.active {
        color: #ff6fa2;
        font-weight: 700;
        svg {
          opacity: 1;
          border-color: #ff6fa2;
        }
      }
    }
  }
`;

const SectionTitle = styled.div`
  font-weight: 700;
  /* font-size: 0.9em; */
  /* text-transform: uppercase; */
  margin-bottom: 0.4em;
`;
const SectionContent = styled.div`
  margin-bottom: 1em;
`;
function Appearance({ setAppearanceOpen, density, setDensity, font, setFont }) {
  function handleCloseWindow() {
    setAppearanceOpen(false);
  }
  return (
    <WindowWrapper>
      <Draggable
        bounds="parent"
        defaultClassName="osx-panel"
        defaultClassNameDragging="osx-panel--dragging"
        defaultClassNameDragged="osx-panel--dragged"
        handle=".osx-drag"
        defaultPosition={{ x: -24, y: -24 }}
      >
        <div>
          <div className="osx-drag">
            <div className="osx-panel__label">Oi~ssu♪ Appearance</div>
            <div className="osx-panel__close" onClick={handleCloseWindow}>
              <Icon icon={closeOutline} />
            </div>
          </div>
          <div className="osx-panel__content">
            <SectionTitle>Density</SectionTitle>
            <SectionContent className="osx-panel__density">
              {[
                { label: "Comfy", image: <OissuComfy />, id: "comfy" },
                { label: "Compact", image: <OissuCompact />, id: "compact" },
              ].map((o) => (
                <div
                  key={o.id}
                  onClick={() => setDensity(o.id)}
                  className={density === o.id ? "active" : null}
                >
                  {o.image}
                  <div>{o.label}</div>
                </div>
              ))}
            </SectionContent>
            <SectionTitle>Font</SectionTitle>
            <SectionContent className="osx-panel__font">
              {[
                {
                  label: "Blog Default",
                  id: "blog",
                  font: "var(--os-font-family)",
                },
                {
                  label: "Sans-Serif",
                  id: "sans",
                  font: "KarlaVariable, Karla",
                },
                {
                  label: "Serif",
                  id: "serif",
                  font: "Bodoni ModaVariable, Bodoni Moda",
                },
                {
                  label: "Custom",
                  id: "custom",
                  font: "var(--os-font-family)",
                },
              ].map((o) => (
                <div
                  key={o.id}
                  onClick={() => setFont(o.id)}
                  className={font === o.id ? "active" : null}
                >
                  <div>{o.label}</div>
                </div>
              ))}
            </SectionContent>
            <SectionTitle>Scale</SectionTitle>
          </div>
        </div>
      </Draggable>
    </WindowWrapper>
  );
}

export default Appearance;
