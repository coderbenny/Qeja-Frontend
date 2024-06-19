import React from "react";
import ReactTypingEffect from "react-typing-effect";

const ReactTypingEffectDemo = () => {
  return (
    <>
      <ReactTypingEffect
        text={["Properties", "Roommates"]}
        cursorRenderer={(cursor) => <h1 className="text-blue-400">{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1 className="text-blue-400 ml-[240px] text-xl font-semibold mb-5 tracking-widest">
              {text.split("").map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    // style={i%2 === 0 ? { color: 'magenta'} : {}}
                  >
                    {char}
                  </span>
                );
              })}
            </h1>
          );
        }}
      />
    </>
  );
};

export default ReactTypingEffectDemo;
