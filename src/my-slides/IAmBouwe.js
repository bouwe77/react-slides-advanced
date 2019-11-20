import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# I am **Bouwe** 👋🧔🏻

🏡 Drachten

👨‍👩‍👧‍👧 Father

🥁 Drumming

🏃‍♂️ Running

⚽️ sc Heerenveen

💻 Software Engineer @ New Nexus

👉 [bouwe.io]

[bouwe.io]: https://bouwe.io
`;
  return <MarkdownSlide markdown={markdown} />;
};
