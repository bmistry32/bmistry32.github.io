import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Computer Science Graduate",
          "DevOps Engineer",
          "Infrastructure Software Engineer",
          "Site Reliability Engineer",
          "Fine...I Do Stuff With Computers",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
        skipAddStyles: true,
      }}
    />
  );
}

export default Type;
