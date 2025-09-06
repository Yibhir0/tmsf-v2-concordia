import { useTranslation } from 'react-i18next';

export const useResearch = () => {
    const { t } = useTranslation();

    return t("research_list", { returnObjects: true });
};
