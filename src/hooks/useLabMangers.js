import { useTranslation } from 'react-i18next';

import { labManagers } from "../constants/labManagers";

export const useLabMangers = () => {
    const { t } = useTranslation();

    return labManagers.map(m => ({
        ...m,
        name: t(m.name),
        id: m.id,
        occupation: t(m.occupation),
        department: t(m.department),
        bio: t(m.bio),
        img: m.img,
        email: m.email,
    }));
};

