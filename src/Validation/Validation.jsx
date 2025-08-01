
export function NumberValidation(props) {
    const num = [ "1" , "2", "3", "4", "5", "6", "7", "8", "9", "0" ];
    if (props.value === "") {
        return true;
    }
    for (let i = 0; i < props.value.length; i++) {
        if (!num.includes(props.value[i])) {
        return false;
        }
    }
    return true;
}

export function emailValidation(props){
    if (props.value.includes("@gmail.com") || props.value == "")
    {
        return true;
    }
    return false;
}