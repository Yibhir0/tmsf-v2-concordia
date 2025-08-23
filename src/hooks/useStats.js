import { useTranslation } from 'react-i18next';

export const useStats = () => {
    const { t } = useTranslation();

    return t('stats_list', { returnObjects: true });
};
