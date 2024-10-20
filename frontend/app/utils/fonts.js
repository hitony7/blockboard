// ./frontend/app/utils/fonts.js

import { Poppins, Roboto } from "next/font/google"

export const headingFont = Poppins({subsets: ["latin"], weight: ["400", "600", "700"]});
export const bodyFont = Roboto({subsets: ["latin"], weight: ["100", "300", "400"]});