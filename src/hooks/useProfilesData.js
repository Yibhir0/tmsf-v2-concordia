import { useTranslation } from 'react-i18next';

export const useProfilesData = (category) => {
    const { t } = useTranslation();

    switch (category) {
        case 'phd_students':
            return t('phd_students', { returnObjects: true });
        case 'masc_students':
            return t('masc_students', { returnObjects: true });
        case 'lab_managers':
            return t('lab_managers', { returnObjects: true });
        case 'postdoctoral_fellow':
            return t('postdoctoral_fellow', { returnObjects: true });
        case 'department_professors':
            return t('department_professors', { returnObjects: true });
        default:
            return [];
    }
};