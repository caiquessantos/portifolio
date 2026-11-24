import React, { useState } from "react";
import Style from "./Styles/Stack.module.css";
import { STACK_GROUPS, STACK_CONTENT } from "../../data/StackData";

function StackSection({
  lang = "pt",
  selectedTech: externalTech,
  onSelectTech,
}) {
  const [internalTech, setInternalTech] = useState(null);

  const content = STACK_CONTENT[lang] || STACK_CONTENT.pt;
  const selectedTech = externalTech !== undefined ? externalTech : internalTech;

  const getTechLabel = (tech) =>
    lang === "en" && tech.enLabel ? tech.enLabel : tech.label;

  const handleSelectTech = (id) => {
    const next = selectedTech === id ? null : id;
    if (onSelectTech) onSelectTech(next);
    else setInternalTech(next);
  };

  const handleClearTech = () => {
    if (onSelectTech) onSelectTech(null);
    else setInternalTech(null);
  };

  const activeTech = STACK_GROUPS.flatMap((s) => s.tecnologias).find(
    (t) => t.id === selectedTech,
  );

  return (
    <div id="Stack" className="container">
      <div className={Style.stack_options}>
        <div className={Style.header}>
          <h2 className={Style.title}>{content.title}</h2>

          {activeTech && (
            <button
              type="button"
              onClick={handleClearTech}
              className={Style.clearBtn}
            >
              ✕ {content.clearBtn} ({getTechLabel(activeTech)})
            </button>
          )}
        </div>

        {STACK_GROUPS.map((stack) => (
          <div key={stack.id} className={Style.categoryGroup}>
            <p className={Style.categoryTitle}>
              {content.groupTitles[stack.id]}
            </p>

            <div className={Style.techList}>
              {stack.tecnologias.map((tecnologia) => {
                const isActive = selectedTech === tecnologia.id;

                return (
                  <button
                    key={tecnologia.id}
                    type="button"
                    onClick={() => handleSelectTech(tecnologia.id)}
                    className={`${Style.techBtn} ${
                      isActive ? Style.techBtnActive : ""
                    }`}
                  >
                    {getTechLabel(tecnologia)}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StackSection;
