import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# REACT 101 ⚛️
`;
  return (
    <>
      <MarkdownSlide markdown={markdown} />
      <>
        Component Function Starts with Capital letter &lt;JSX/&gt; &#123;JavaScript Land&#125;
        elements and Components in JSX Rendering Parent/Child relationship between components
        Re-use State useState hook Re-render after state update Props Props from parent to
        child only Pass props as separate variables Props are received as one object
        Conditional rendering
      </>
      <table>
        <tr>
          <td width="300">
            <input type="checkbox" /> <h2>Component</h2>
          </td>
          <td>
            <input type="checkbox" /> <h2>Conditional rendering</h2>
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" /> <h2>JSX</h2>
          </td>
          <td>
            <input type="checkbox" /> <h2>State</h2>
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" /> <h2>Props</h2>
          </td>
          <td>
            <input type="checkbox" /> <h2>(Re)rendering</h2>
          </td>
        </tr>
      </table>
    </>
  );
};
