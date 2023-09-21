import { useEffect, useState } from "react";
import { DEFAULT_THEME } from "../constants";

export const useTheme = () => {
    const [themes, setThemes] = useState();
    const [theme, setTheme] = useState("light");
    const [loading, setLoading] = useState(true);

    const getTheme = async () => {
        try {
            const res = await fetch("./theme-data.json");
            const data = await res.json();
            setThemes(data);
        } catch (error) {
            setTheme("default");
            setThemes(DEFAULT_THEME);
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getTheme();
    }, []);

    return { theme, themes, setTheme, loading };
};
