export const Themes = ({ themes, setTheme, selectedTheme }) => {
    if (!themes) return null;
    const themeList = Object.keys(themes).map((theme) => themes[theme]);
    return (
        <ul className="theme-list">
            {themeList.map((theme) => (
                <li
                    key={theme.id}
                    className={`${
                        selectedTheme === theme.id ? "selected" : ""
                    }`}
                    onClick={() => setTheme(theme.id)}
                >
                    <b>{theme.name}</b>
                </li>
            ))}
        </ul>
    );
};
