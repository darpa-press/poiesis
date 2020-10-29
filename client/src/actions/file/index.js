import { saveFile, openFile } from "Helpers/files";

const SAVE_FILE = "SAVE_FILE";
const OPEN_FILE_CHOOSER = "OPEN_FILE_CHOOSER";
const UPDATE_FROM_FILE = "UPDATE_FROM_FILE";

export const handleOpen = fileElement => {
    fileElement.click();
    return {
        type: OPEN_FILE_CHOOSER
    };
};

export const handleFileInput = event => async dispatch => {
    // TODO: what if not txt
    let content = await openFile(event.target.files[0]);
    let lines = content.split(/[\n\r]/g);
    return dispatch({
        type: UPDATE_FROM_FILE,
        lines: lines
    });
};

export const handleSave = saveLines => {
    saveFile(saveLines.join("\n"));
    return {
        type: SAVE_FILE
    };
};
