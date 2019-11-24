import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# REACT 101 ⚛️ Checklist
`;
  return (
    <>
      <MarkdownSlide markdown={markdown} />
      <table>
        <tr>
          <td width="600">
            <input type="checkbox" /> <h2>Component</h2>
          </td>
          <td>
            <input type="checkbox" /> <h2>Re-use</h2>
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" /> <h2>Function</h2>
          </td>
          <td>
            <input type="checkbox" /> <h2>State</h2>
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" /> <h2>(or class)</h2>
          </td>
          <td>
            <input type="checkbox" /> <h2>useState hook</h2>
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" /> <h2>Component name starts with Capital letter</h2>
          </td>
          <td>
            <input type="checkbox" /> <h2>State update: re-render</h2>
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" /> <h2>&lt;JSX/&gt;</h2>
          </td>
          <td>
            <input type="checkbox" /> <h2>Props</h2>
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" />{" "}
            <h2> JavasScript land: &#123; between curly braces &#125;</h2>
          </td>
          <td>
            <input type="checkbox" /> <h2>Props from parent to child</h2>
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" /> <h2>elements and Components in JSX</h2>
          </td>
          <td>
            <input type="checkbox" /> <h2>Pass props as separate values</h2>
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" /> <h2>Rendering</h2>
          </td>
          <td>
            <input type="checkbox" /> <h2>Props are received as single object</h2>
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" /> <h2>Parent-Child relationship</h2>
          </td>
          <td>
            <input type="checkbox" /> <h2>Conditional rendering</h2>
          </td>
        </tr>
      </table>
    </>
  );
};
