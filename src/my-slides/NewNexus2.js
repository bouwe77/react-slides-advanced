import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# Wie we zijn? 

Sociaal ondernemerschap door te DELEN:

* Winst: Ik, wij en zij

* Kennis: intern en extern

* DEELname in het bedrijf: meedenken

`;
  return <MarkdownSlide markdown={markdown} />;
};
