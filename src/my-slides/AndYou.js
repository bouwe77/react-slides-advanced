import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# AND YOU? 🤝

📝 Name

🏭 Employer

💻 Daily job

⚛️ React?
    `;
  return <MarkdownSlide markdown={markdown} />;
};
