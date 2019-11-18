import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# It's a wrap! 😃

Next steps:

* Practice, practice, practice! 💪

* Let's keep in touch! 💌

* Memoization: React.Memo, useMemo, useCallback 🧠

* Cool things to look at: Next.js, Immer, Mobx State Tree 🤩
  `;
  return <MarkdownSlide markdown={markdown} />;
};
