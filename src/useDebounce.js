import { useEffect, useState } from "react";

export function useDebounce(value, time) {

    const [debounce, setDebounce] = useState(value)

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setDebounce(value);
        }, time);

        return () => {
            clearTimeout(timeOut);
        }

    }, [value, time])

    return debounce;
}