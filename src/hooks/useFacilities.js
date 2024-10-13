import { useTranslation } from 'react-i18next';

import { facilities } from "../constants/facilities";

export const useFacilities = () => {
    const { t } = useTranslation();

    return facilities.map(f => ({
        ...f,
        name: t(f.name),
        description: t(f.description),
        img: f.img,
    }));
};

