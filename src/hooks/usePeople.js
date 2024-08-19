import { useTranslation } from 'react-i18next';

import { people } from "../constants/people";

export const usePeople = () => {
    const { t } = useTranslation();

    return people.map(p => ({
        ...p,
        name: t(p.name),
        id: p.id,
        occupation: t(p.occupation),
        department: t(p.department),
        img: p.img,
        email: p.email,
    }));
};

