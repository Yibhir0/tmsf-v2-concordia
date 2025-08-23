import { useTranslation } from 'react-i18next';

export const useNavLinks = () => {
    const { t } = useTranslation();

    return t('nav_links', { returnObjects: true });
};
