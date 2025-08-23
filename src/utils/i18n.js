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
import galleryEN from '../locales/en/gallery.json';
import galleryFR from '../locales/fr/gallery.json';
import contactEN from '../locales/en/contact.json';
import contactFR from '../locales/fr/contact.json';

import publicationsEN from '../locales/en/publications.json';
import publicationsFR from '../locales/fr/publications.json';

import facilitiesEN from "../locales/en/facilities.json";
import facilitiesFR from "../locales/fr/facilities.json";

import FooterEn from '../locales/en/footer.json';
import FooterFr from '../locales/fr/footer.json';

import AboutEn from '../locales/en/about.json';
import AboutFr from '../locales/fr/about.json';




// staff

import LabManagerEn from "../locales/en/lab.managers.json";
import LabManagerFr from "../locales/fr/lab.managers.json";

// MAsc Students

import MAscStudentsEn from "../locales/en/masc.students.json";
import MAscStudentsFr from "../locales/fr/masc.students.json";

// PhD Students

import PhDStudentsEn from "../locales/en/phd.students.json";
import PhDStudentsFr from "../locales/fr/phd.students.json";

// Research Associates  

import ResearchAssociateEn from "../locales/en/reasearch.associate.json";
import ResearchAssociateFr from "../locales/fr/reasearch.associate.json";

// Professors

import ProfessorsEn from "../locales/en/department.professors.json";
import ProfessorsFr from "../locales/fr/department.professors.json";



const resources = {
    en: {
        translation: {
            ...linksEN,
            ...headerEN,
            ...statsEN,
            ...peopleEN,
            ...researchEN,
            ...collaboratorsEN,
            ...galleryEN,
            ...contactEN,
            ...publicationsEN,
            ...FooterEn,
            ...facilitiesEN,
            ...AboutEn,
            ...LabManagerEn,
            ...MAscStudentsEn,
            ...PhDStudentsEn,
            ...ResearchAssociateEn,
            ...ProfessorsEn


        }
    },
    fr: {
        translation: {
            ...linksFR,
            ...headerFR,
            ...statsFR,
            ...peopleFR,
            ...researchFR,
            ...collaboratorsFR,
            ...galleryFR,
            ...contactFR,
            ...publicationsFR,
            ...FooterFr,
            ...facilitiesFR,
            ...AboutFr,
            ...LabManagerFr,
            ...MAscStudentsFr,
            ...PhDStudentsFr,
            ...ResearchAssociateFr,
            ...ProfessorsFr

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