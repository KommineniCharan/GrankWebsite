import React from "react";
import { render } from "react-dom";

// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import ChangingProgressProvider from "./ChangingProgressProvider";

// Radial separators
import RadialSeparators from "./RadialSeparators";

const percentage = 66;

const CircularProgressBars = () => (
  <div style={{ padding: "40px 40px 40px 40px" }}>
    <Example label="Fully controlled text animation using react-move">
      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={75}
        duration={4}
        easingFunction={easeQuadInOut}
        repeat
      >
        {(value) => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}+`}
              /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
              styles={buildStyles({
                pathTransition: "none",
                // Colors
                pathColor: `#fed501`,
                textColor: "##436fe8",
                trailColor: "#436fe8",
                backgroundColor: "#fff",
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0.25,

                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",

                // Text size
                textSize: "16px",

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 3,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',
              })}
            />
          );
        }}
      </AnimatedProgressProvider>
    </Example>
  </div>
);

function Example(props) {
  return (
    <div>
      <div>
        <div
          style={{
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: "50%",
          }}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default CircularProgressBars;
