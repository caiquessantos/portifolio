import React, { useEffect, useRef, useState } from "react";
import CarouselControls from "./CarouselControls";
import styles from "./MobileCardCarousel.module.css";

function MobileCardCarousel({
  items = [],
  renderItem,
  renderDesktopItem,
  getItemKey,
  resetKey = "",
  initialIndex = 0,
  desktopClassName = "",
  mobileClassName = "",
  controlsClassName = "",
  prevAriaLabel = "Anterior",
  nextAriaLabel = "Próximo",
  controlsAriaLabel = "Navegação dos cards",
  showProgress = true,
}) {
  const totalItems = items.length;
  const touchStartXRef = useRef(null);

  const clampIndex = (idx, count) => {
    if (count <= 0) return 0;
    return Math.max(0, Math.min(idx, count - 1));
  };

  const [activeIndex, setActiveIndex] = useState(() =>
    clampIndex(initialIndex, totalItems),
  );

  useEffect(() => {
    setActiveIndex(clampIndex(initialIndex, totalItems));
  }, [resetKey, totalItems, initialIndex]);

  const goToSlide = (targetIndex) => {
    if (totalItems <= 0) return;
    setActiveIndex(clampIndex(targetIndex, totalItems));
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      touchStartXRef.current = e.touches[0].clientX;
    }
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null || !e.changedTouches.length) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    touchStartXRef.current = null;

    if (Math.abs(deltaX) < 45) return;
    if (deltaX < 0 && activeIndex < totalItems - 1) {
      goToSlide(activeIndex + 1);
    } else if (deltaX > 0 && activeIndex > 0) {
      goToSlide(activeIndex - 1);
    }
  };

  if (totalItems === 0) return null;

  const activeItem = items[activeIndex] || items[0];
  const renderDesktop = renderDesktopItem || renderItem;
  const slideKey = getItemKey
    ? `${resetKey}-${activeIndex}-${getItemKey(activeItem, activeIndex)}`
    : `${resetKey}-${activeIndex}`;

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.desktopList} ${desktopClassName}`}>
        {items.map((item, index) => (
          <React.Fragment key={getItemKey ? getItemKey(item, index) : index}>
            {renderDesktop(item, index)}
          </React.Fragment>
        ))}
      </div>

      {activeItem && (
        <div
          className={`${styles.mobileStage} ${mobileClassName}`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div key={slideKey} className={styles.slideEnter}>
            {renderItem(activeItem, activeIndex)}
          </div>
        </div>
      )}

      <CarouselControls
        currentIndex={activeIndex}
        totalItems={totalItems}
        onPrev={() => goToSlide(activeIndex - 1)}
        onNext={() => goToSlide(activeIndex + 1)}
        prevAriaLabel={prevAriaLabel}
        nextAriaLabel={nextAriaLabel}
        ariaLabel={controlsAriaLabel}
        showProgress={showProgress}
        className={`${styles.controls} ${controlsClassName}`}
      />
    </div>
  );
}

export default MobileCardCarousel;
