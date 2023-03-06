import { useEffect, useState } from 'react';

const useMediaQuery = (query: string) => {
    const [match, setMatch] = useState<boolean>();

    const mediaQueryList = window.matchMedia(query);
    const isMatch = () => setMatch(mediaQueryList.matches);

    useEffect(() => {
        isMatch();
        mediaQueryList.addEventListener('change', isMatch);

        return () => mediaQueryList.removeEventListener('change', isMatch);
    }, [match, setMatch]);

    return match;
};

export default useMediaQuery;
