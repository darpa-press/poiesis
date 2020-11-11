import { createGlobalStyle } from "styled-components";
import React from "react";
import dovesWebWoff from "./doves-web.woff";
import dovesWebWoff2 from "./doves-web.woff2";
import universWoff from "./ltunivers-webfont.woff";
import universWoff2 from "./ltunivers-webfont.woff";
import mspminchoWoff from "./mspmincho-regular-webfont.woff";
import mspminchoWoff2 from "./mspmincho-regular-webfont.woff2";
import remingtonWoff from "./remington-webfont.woff";
import remingtonWoff2 from "./remington-webfont.woff2";
import schulWoff from "./Schulschrift.woff";
import schulWoff2 from "./Schulschrift.woff2";
import interMedWoff from "./Inter-Medium.woff";
import interMedWoff2 from "./Inter-Medium.woff2";
import interSemiWoff from "./Inter-SemiBold.woff";
import interSemiWoff2 from "./Inter-SemiBold.woff2";
import interVarWoff2 from "./Inter-upright.var.woff2";
import williamsCaslonWoff2 from "./Williams_Caslon_Text-Regular.woff2";

export const FontFaces = createGlobalStyle`  

    @font-face {
        font-family: 'DovesType';
        src: url(${dovesWebWoff2}) format('woff2'),
            url(${dovesWebWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: "MS PMincho";
        src: url(${mspminchoWoff2}) format("woff2"),
            url(${mspminchoWoff}) format("woff");
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: "LTCRemingtonTypewriterW05-It";
        src: url(${remingtonWoff2}) format("woff2"),
            url(${remingtonWoff}) format("woff");
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: "LTUnivers-BasicRegular";
        src: url(${universWoff2}) format("woff2"),
        url(${universWoff}) format("woff");
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Schulschrift';
        src: url(${schulWoff2}) format('woff2'),
            url(${schulWoff}) format('woff');
        font-weight: normal;
        font-style: italic;
    }

    @font-face {
        font-family: 'Williams Caslon';
        src: url(${williamsCaslonWoff2}) format('woff2');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Inter';
        font-style:  normal;
        font-weight: 500;
        src: url(${interMedWoff2}) format("woff2"),
            url(${interMedWoff}) format("woff");
    }

    @font-face {
        font-family: 'Inter';
        font-style:  normal;
        font-weight: 600;
        src: url(${interSemiWoff2}) format("woff2"),
            url(${interSemiWoff}) format("woff");
    }


    @supports (font-variation-settings: normal) {
        @font-face {
            font-family: 'Inter var';
            font-weight: 100 900;
            font-style: normal;
            font-named-instance: 'Regular';
            src: url(${interVarWoff2}) format('woff2');
        }
    }

`;

let fonts = {};

fonts["DovesType"] = {
    caption: "Doves Type",
    baselineAdjust: "1rem",
    size: "2rem",
    fontWeight: 500
};

fonts["LTCRemingtonTypewriterW05-It"] = {
    caption: "LTC Remington",
    baselineAdjust: "1.1rem",
    size: "1.3rem",
    fontWeight: 600
};

fonts["MS PMincho"] = {
    caption: "PMincho",
    baselineAdjust: ".85rem",
    size: "1.75rem",
    fontWeight: 500
};

fonts["Schulschrift"] = {
    caption: "Schulschrift",
    baselineAdjust: "0.8rem",
    size: "2.3rem",
    fontWeight: 500
};

fonts["LTUnivers-BasicRegular"] = {
    caption: "Univers",
    baselineAdjust: "1rem",
    size: "1.5rem",
    fontWeight: 500
};

fonts["Williams Caslon"] = {
    caption: "Williams Caslon",
    baselineAdjust: "0.92rem",
    size: "1.8rem",
    fontWeight: 500
};

export const fontList = fonts;

export const PreloadFonts = () => (
    <>
        <link
            rel="preload"
            href={dovesWebWoff2}
            as="font"
            crossOrigin="anonymous"
        />
        <link
            rel="preload"
            href={universWoff2}
            as="font"
            crossOrigin="anonymous"
        />
        <link
            rel="preload"
            href={mspminchoWoff2}
            as="font"
            crossOrigin="anonymous"
        />
        <link
            rel="preload"
            href={remingtonWoff2}
            as="font"
            crossOrigin="anonymous"
        />
        <link
            rel="preload"
            href={williamsCaslonWoff2}
            as="font"
            crossOrigin="anonymous"
        />
        <link
            rel="preload"
            href={schulWoff2}
            as="font"
            crossOrigin="anonymous"
        />
    </>
);
