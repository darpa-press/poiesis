const CHANGE_OPTION = "CHANGE_OPTION";
const TOGGLE_OPTION = "TOGGLE_OPTION";

export const changeOption = (option, setting) => ({
    type: CHANGE_OPTION,
    option,
    setting
});

export const toggleOption = option => ({
    type: TOGGLE_OPTION,
    option
});
