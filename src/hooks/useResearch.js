import { useTranslation } from 'react-i18next';

import { research } from '../constants/research';

export const useResearch = () => {
    const { t } = useTranslation();

    return research.map(r => ({
        ...r,
        title: t(r.title),
        text: t(r.text),
        tag: t(r.tag),
        author: t(r.author),

    }));
};
