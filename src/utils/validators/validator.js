export const requireField = (value) => {
    if(value) return undefined
    return "This is Require Field"
}

export const maxLengthCreator = maxLength => (value) => {
    if(value && value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined
}


