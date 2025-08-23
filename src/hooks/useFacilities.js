import { useTranslation } from 'react-i18next';

export const useFacilities = () => {
    const { t } = useTranslation();

    return t('facility_list', { returnObjects: true });

};

