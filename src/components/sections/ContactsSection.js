import { useState, useId } from "react";
import Style from "./Styles/Contact.module.css";
import { CONTACT_LINKS, CONTACT_CONTENT } from "../../data/ContactData";

function ContactsSection({ lang = "pt" }) {
  const [activeId, setActiveId] = useState(null);
  const [copied, setCopied] = useState(false);
  const titleId = useId();

  const content = CONTACT_CONTENT[lang] || CONTACT_CONTENT.pt;

  const handleCopyEmail = (id, email) => {
    setActiveId(id);
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section aria-labelledby={titleId} className={Style.section}>
      <h2 id={titleId} className={Style.title}>
        {content.title}
      </h2>

      <div className={Style.options}>
        {CONTACT_LINKS.map((contact) => {
          const isActive = activeId === contact.id;
          const btnClass = `${Style.btn} ${isActive ? Style.btnActive : ""}`;

          if (contact.url) {
            return (
              <a
                key={contact.id}
                id={contact.id}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setActiveId(contact.id)}
                className={btnClass}
              >
                {contact.label}
              </a>
            );
          }

          if (contact.downloadUrl) {
            return (
              <a
                key={contact.id}
                id={contact.id}
                href={contact.downloadUrl}
                download={contact.downloadName}
                onClick={() => setActiveId(contact.id)}
                className={btnClass}
              >
                {content.downloadResume}
              </a>
            );
          }

          return (
            <button
              key={contact.id}
              type="button"
              onClick={() => handleCopyEmail(contact.id, contact.email)}
              className={btnClass}
            >
              {copied ? content.copiedEmail : content.copyEmail}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default ContactsSection;
