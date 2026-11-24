import React from "react";
import Style from "./Styles/SectionBanner.module.css";

function SectionBanner({
  stepBadge,
  title,
  subtitleStart,
  subtitleHighlight,
  subtitleMiddle = "",
  subtitleCode = "",
  subtitleEnd = "",
  children,
}) {
  const hasArt = Boolean(children);

  return (
    <div className={Style.banner}>
      <div
        className={`${Style.textContent} ${
          hasArt ? Style.textContentWithArt : Style.textContentFull
        }`}
      >
        <span className={Style.stepBadge}>{stepBadge}</span>

        <h2 className={Style.title}>{title}</h2>

        <p className={Style.subtitle}>
          {subtitleStart}
          {subtitleHighlight && <b>{subtitleHighlight}</b>}
          {subtitleMiddle}
          {subtitleCode && (
            <code className={Style.inlineCode}>{subtitleCode}</code>
          )}
          {subtitleEnd}
        </p>
      </div>

      {hasArt && <div className={Style.artSlot}>{children}</div>}
    </div>
  );
}

export default SectionBanner;
