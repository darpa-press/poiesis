import React from "react";
import dovesWebWoff2 from "./doves-web.woff2";
import universWoff2 from "./ltunivers-webfont.woff";
import mspminchoWoff2 from "./mspmincho-regular-webfont.woff2";
import remingtonWoff2 from "./remington-webfont.woff2";
import schulWoff2 from "./Schulschrift.woff2";
import williamsCaslonWoff2 from "./Williams_Caslon_Text-Regular.woff2";

let fonts = {};

fonts["DovesType"] = {
    caption: "Doves Type",
    baselineAdjust: "1rem",
    size: "2rem",
    fontWeight: 500,
};

fonts["LTCRemingtonTypewriterW05-It"] = {
    caption: "LTC Remington",
    baselineAdjust: "1.1rem",
    size: "1.3rem",
    fontWeight: 600,
};

fonts["MS PMincho"] = {
    caption: "PMincho",
    baselineAdjust: ".85rem",
    size: "1.75rem",
    fontWeight: 500,
};

fonts["Schulschrift"] = {
    caption: "Schulschrift",
    baselineAdjust: "0.8rem",
    size: "2.3rem",
    fontWeight: 500,
};

fonts["LTUnivers-BasicRegular"] = {
    caption: "Univers",
    baselineAdjust: "1rem",
    size: "1.5rem",
    fontWeight: 500,
};

fonts["Williams Caslon"] = {
    caption: "Williams Caslon",
    baselineAdjust: "0.92rem",
    size: "1.8rem",
    fontWeight: 500,
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
