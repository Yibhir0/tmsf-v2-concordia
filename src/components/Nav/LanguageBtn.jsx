import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageBtn({ s }) {
    const { i18n } = useTranslation();

    const handleClick = (event) => {
        event.preventDefault(); // Prevent any default button behavior
        if (i18n.language === 'en') {
            i18n.changeLanguage('fr');
        } else {
            i18n.changeLanguage('en');
        }
    };

    return (
        <button
            onClick={handleClick}
            style={{
                padding: "10px 30px",
                background: "transparent",
                border: "none",

                cursor: "pointer",
                fontSize: "16px",
                textAlign: "left",
                outline: "none"

            }}
            className={s}        >
            {i18n.language === 'en' ? 'FR' : 'EN'}
        </button>
    );
}

export default LanguageBtn;
