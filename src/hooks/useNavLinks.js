import { useTranslation } from 'react-i18next';
import { navLinks } from '../constants/navLinks'

export const useNavLinks = () => {
    const { t } = useTranslation();

    return navLinks.map(link => ({
        ...link,
        title: t(link.titleKey),
        id: link.id
    }));
};
