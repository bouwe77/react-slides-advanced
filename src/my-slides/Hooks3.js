import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# HOOKS

Today:

* useState

* useReducer

* useEffect

* useContext

* useRef (?)

Others: useCallback, useMemo, useImperativeHandle, useLayoutEffect, useDebugValue
    `;
  return <MarkdownSlide markdown={markdown} />;
};
