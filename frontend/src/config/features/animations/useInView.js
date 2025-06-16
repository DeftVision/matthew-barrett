import { useEffect, useRef, useState } from 'react';

export function useInView(options = { threshold: 0.1 }) {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
            }
        }, options);

        observer.observe(element);

        return () => observer.disconnect();
    }, [options]);

    return [ref, isInView];
}
