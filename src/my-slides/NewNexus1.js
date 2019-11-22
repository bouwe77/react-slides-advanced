import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# NEW NEXUS: WAT we doen?

"Iets met IT..."

👨‍💻 IT Detachering

📱 Mobile Solutions

👩‍🔬 Management & Consultancy

📊 Data Solutions

👩‍🎨 Design
    `;
  return <MarkdownSlide markdown={markdown} />;
};
