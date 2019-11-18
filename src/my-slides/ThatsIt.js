import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# It's a wrap! 😃

Next steps:

🧠 Memoization: React.Memo, useMemo, useCallback 

🤩 Cool things to look at: Next.js, Immer, Mobx State Tree 

💪 Practice, practice, practice!

💌 Let's keep in touch! 
`;
  return <MarkdownSlide markdown={markdown} />;
};
