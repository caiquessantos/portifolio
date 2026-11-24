import React from "react";
import Contacts from "./ContactsSection";
import MobileCardCarousel from "../common/MobileCardCarousel";
import Style from "./Styles/AboutSection.module.css";
import { ABOUT_CONTENT } from "../../data/AboutData";

function AboutSection({ lang = "pt", spriteSlot = null }) {
  const content = ABOUT_CONTENT[lang] || ABOUT_CONTENT.pt;
  const cards = content.cards || [];
  const hasSprite = Boolean(spriteSlot);

  const renderCard = (card) => (
    <article className={Style.subCard}>
      <span className={Style.subCardBadge}>{card.badge}</span>
      <h3 className={Style.subCardTitle}>{card.title}</h3>
      <div className={Style.subCardBody}>
        {card.paragraphs.map((paragraph, pIndex) => (
          <p key={pIndex} className={Style.paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );

  return (
    <section className="container">
      <div className={Style.box}>
        <div
          className={`${Style.mainLayout} ${
            !hasSprite ? Style.mainLayoutSingle : ""
          }`}
        >
          <MobileCardCarousel
            items={cards}
            renderItem={renderCard}
            getItemKey={(_, index) => index}
            resetKey={lang}
            desktopClassName={Style.cardsGrid}
            prevAriaLabel={lang === "en" ? "Previous card" : "Card anterior"}
            nextAriaLabel={lang === "en" ? "Next card" : "Próximo card"}
            controlsAriaLabel={
              lang === "en" ? "About cards navigation" : "Navegação dos cards"
            }
          />

          {hasSprite && (
            <aside className={Style.sideCol}>
              <div className={Style.spriteCard}>
                {spriteSlot}
                <p className={Style.spriteQuote}>{content.spriteQuote}</p>
              </div>
            </aside>
          )}
        </div>

        {content.highlight && (
          <div className={Style.dashedBox}>
            <span className={Style.dashedLabel}>{content.highlight.badge}</span>
            <p className={Style.dashedText}>{content.highlight.text}</p>
          </div>
        )}

        <div className={Style.contactsWrap}>
          <Contacts lang={lang} />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
