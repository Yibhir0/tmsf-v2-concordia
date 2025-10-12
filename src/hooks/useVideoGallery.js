import { useTranslation } from 'react-i18next';

export const useVideoGallery = () => {
    const { t } = useTranslation();

    return t('media', { returnObjects: true });

};

