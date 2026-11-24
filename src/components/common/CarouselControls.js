import React from "react";
import styles from "./CarouselControls.module.css";

function CarouselControls({
  currentIndex,
  totalItems,
  onPrev,
  onNext,
  prevLabel = "←",
  nextLabel = "→",
  prevAriaLabel = "Anterior",
  nextAriaLabel = "Próximo",
  ariaLabel = "Navegação do carrossel",
  showProgress = true,
  className = "",
}) {
  if (!totalItems || totalItems <= 1) return null;

  const formatNumber = (num) => String(num).padStart(2, "0");
  const isFirst = currentIndex <= 0;
  const isLast = currentIndex >= totalItems - 1;
  const progressPercent = ((currentIndex + 1) / totalItems) * 100;

  return (
    <div className={`${styles.controls} ${className}`} aria-label={ariaLabel}>
      <button
        type="button"
        onClick={onPrev}
        disabled={isFirst}
        aria-label={prevAriaLabel}
        className={styles.btn}
      >
        <span>{prevLabel}</span>
      </button>

      <div className={styles.statusGroup}>
        {showProgress && (
          <div className={styles.progressTrack} aria-hidden="true">
            <div
              className={styles.progressFill}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        )}
        <span className={styles.counter}>
          {formatNumber(currentIndex + 1)} / {formatNumber(totalItems)}
        </span>
      </div>

      <button
        type="button"
        onClick={onNext}
        disabled={isLast}
        aria-label={nextAriaLabel}
        className={styles.btn}
      >
        <span>{nextLabel}</span>
      </button>
    </div>
  );
}

export default CarouselControls;
