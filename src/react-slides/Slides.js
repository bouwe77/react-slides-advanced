import React from "react";
import PropTypes from "prop-types";

import useSlides from "./useSlides";
import ButtonNavigation from "./ButtonNavigation";
import KeyboardNavigation from "./KeyboardNavigation";

function Slides({ config, children: slides }) {
  const localStorageKey = config.appId + "-currentSlideIndex";
  const [CurrentSlide, goToPrev, goToNext] = useSlides(slides, localStorageKey);

  return (
    <>
      <KeyboardNavigation goToPrev={goToPrev} goToNext={goToNext} />
      {config.showButtonNavigation ? (
        <ButtonNavigation goToPrev={goToPrev} goToNext={goToNext} />
      ) : null}
      <CurrentSlide />
    </>
  );
}

Slides.defaultProps = {
  config: { appId: "myApp", showButtonNavigation: false }
};

Slides.propTypes = {
  config: PropTypes.exact({
    appId: function(props, propName, componentName) {
      if (!/^[a-zA-z]{1,12}$/.test(props[propName])) {
        return new Error(
          "If you provide the optional appId prop, please use letters only, max 12 characters."
        );
      }
    },
    showButtonNavigation: PropTypes.bool
  }),
  children: PropTypes.array.isRequired
};

export default Slides;
