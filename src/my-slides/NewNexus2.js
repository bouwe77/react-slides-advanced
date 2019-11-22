import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# NEW NEXUS: WIE we zijn? 

Sociaal ondernemerschap door te DELEN:

* Winst: Ik, wij en zij

* Kennis: intern en extern

* DEELname in het bedrijf: meedenken

_"We zorgen goed voor onszelf_

_en daarom/daarmee ook voor onze omgeving"_
`;
  return <MarkdownSlide markdown={markdown} />;
};
