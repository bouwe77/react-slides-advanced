import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# REACT 101 ⚛️
`;
  return (
    <>
      <MarkdownSlide markdown={markdown} />
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
