import { hotkey_display } from "react-keyboard-shortcuts";
import { fontList } from "Components/Fonts/Fonts";
import { templateList } from "Components/Templates/templateList";

const availableFonts = Object.keys(fontList);
const availableTemplates = Object.keys(templateList);

export default props => {
    return [
        {
            title: "File",
            sections: [
                [
                    {
                        title: `Conjure a poem`,
                        action: props.fetchPrefill,
                        hotkey: hotkey_display("Ctrl+N")
                    },
                    {
                        title: `Open TXT file…`,
                        action: props.handleOpen,
                        hotkey: hotkey_display("meta+O")
                    },
                    {
                        title: `Save TXT file`,
                        action: props.handleSave.bind(null, props.lines),
                        hotkey: hotkey_display("meta+S")
                    }
                ]
            ]
        },
        {
            title: "View",
            sections: [
                [
                    {
                        title: "Prose poetry",
                        action: props.toggleProse,
                        selectedKey: "isProseMode",
                        selectedValue: true
                    }
                ],
                availableFonts.map(font => {
                    return {
                        title: `Use ${fontList[font].caption}`,
                        action: props.changeFont,
                        selectedKey: "font",
                        selectedValue: font
                    };
                }),
                [
                    {
                        title: `Show analysis`,
                        action: props.toggleAnalysis,
                        selectedKey: "showAnalysis",
                        selectedValue: true,
                        hotkey: hotkey_display("ctrl+a")
                    }
                ]
            ]
        },
        {
            title: "Template",
            sections: [
                [
                    {
                        title: "No template",
                        action: props.changeTemplate,
                        selectedKey: "template",
                        selectedValue: null
                    }
                ],
                availableTemplates.map(template => {
                    return {
                        title: `${
                            templateList[template].name.match(/\/(.*)/)[1]
                        }`,
                        action: props.changeTemplate,
                        selectedKey: "template",
                        selectedValue: template
                    };
                })
            ]
        },
        {
            title: "Help",
            sections: [
                [
                    {
                        title: "About Poiesis",
                        action: props.toggleSidebar
                    }
                ]
            ]
        }
    ];
};
