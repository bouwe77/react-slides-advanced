import createPersistedState from "use-persisted-state";

export default function useSlides(slides, localStorageKey) {
  const useCurrentSlideIndexState = createPersistedState(localStorageKey);
  const [currentSlideIndex, setCurrentSlideIndex] = useCurrentSlideIndexState(0);

  function goToPrev() {
    if (slides.length > 0 && currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  }

  function goToNext() {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  }

  return [slides[currentSlideIndex], goToPrev, goToNext];
}
