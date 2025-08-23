import { useTranslation } from "react-i18next";

export const usePublications = () => {
    const { t } = useTranslation();
    const publications = t("publication_list", { returnObjects: true });
    return publications;
};
