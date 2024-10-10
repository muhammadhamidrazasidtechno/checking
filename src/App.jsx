import { useRoutes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { routes } from "./routes";
import { createTheme } from "./theme";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "simplebar-react/dist/simplebar.min.css";
import "./index.css";
export const App = () => {
  const element = useRoutes(routes);
  const theme = createTheme({
    colorPreset: "green",
    contrast: "high",
  });

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        {element}
      </Provider>
    </ThemeProvider>
  );
};
