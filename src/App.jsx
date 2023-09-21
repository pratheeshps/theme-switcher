import { Themes } from "./Themes";
import { useTheme } from "./hooks/useTheme";
import { ThemeProvider } from "styled-components";

import "./App.css";
import { GlobalStyles } from "./theme/GlobalStyles";

function App() {
    const { loading, themes, setTheme, theme } = useTheme();

    return (
        <>
            {!loading && (
                <ThemeProvider theme={themes[theme]}>
                    <GlobalStyles />
                    <div className="container">
                        <h1>Theme Switcher</h1>
                        <button className="btn">Themed Button</button>
                        <p>Select your favorite theme from below options.</p>
                        <Themes
                            themes={themes}
                            setTheme={setTheme}
                            selectedTheme={theme}
                        />
                    </div>
                </ThemeProvider>
            )}
        </>
    );
}

export default App;
