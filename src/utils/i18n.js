import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import linksEN from "../locales/en/links.json";
import linksFR from "../locales/fr/links.json";
import headerEN from "../locales/en/header.json";
import headerFR from "../locales/fr/header.json";
import statsEN from "../locales/en/stats.json";
import statsFR from "../locales/fr/stats.json";

import peopleEN from '../locales/en/people.json';
import peopleFR from '../locales/fr/people.json';
import researchEN from '../locales/en/research.json';
import researchFR from '../locales/fr/research.json';
import collaboratorsEN from '../locales/en/collaborators.json';
import collaboratorsFR from '../locales/fr/collaborators.json';

const resources = {
    en: {
        translation: {
            ...linksEN,
            ...headerEN,
            ...statsEN,
            ...peopleEN,
            ...researchEN,
            ...collaboratorsEN,
        }
    },
    fr: {
        translation: {
            ...linksFR,
            ...headerFR,
            ...statsFR,
            ...peopleFR,
            ...researchFR,
            ...collaboratorsFR

        }
    }
};
i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;