import { saveAs } from "file-saver";

function slugify(text) {
    return text
        .toString()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/[^\w-]+/g, "") // Remove all non-word chars
        .replace(/--+/g, "-") // Replace multiple - with single -
        .replace(/^-+/, "") // Trim - from start of text
        .replace(/-+$/, ""); // Trim - from end of text
}

export const saveFile = text => {
    let blob = new Blob([text], {
        type: "text/plain;charset=utf-8"
    });
    let blobName = slugify(
        text.replace(/[\n\r]/gm, "-").replace(/(([^\s]+\s\s*){6})(.*)/m, "$1")
    );
    saveAs(blob, `${blobName}.txt`);
};

export const openFile = file => {
    return new Promise((resolve, reject) => {
        let fr = new FileReader();
        fr.onload = x => resolve(fr.result);
        fr.readAsText(file);
    });
};
