import { createContext } from "react";

import { Theme } from "../pages/_app";

export const ThemeContext = createContext<Theme>("light");
