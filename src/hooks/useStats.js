import { useTranslation } from 'react-i18next';
import { stats } from '../constants/stats'

export const useStats = () => {
    const { t } = useTranslation();

    return stats.map(stat => ({
        ...stat,
        title: t(stat.titleKey),
        id: stat.id,
        value: stat.value,
    }));
};
