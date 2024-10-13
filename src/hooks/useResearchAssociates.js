import { useTranslation } from 'react-i18next';

import { researchAssociates } from "../constants/reasearchAssociates";

export const useResearchAssociates = () => {
    const { t } = useTranslation();

    return researchAssociates.map(ra => ({
        ...ra,
        name: t(ra.name),
        id: ra.id,
        occupation: t(ra.occupation),
        department: t(ra.department),
        bio: t(ra.bio),
        img: ra.img,
        email: ra.email,
    }));
};

