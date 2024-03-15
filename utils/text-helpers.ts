export const splitParagraphs = (string: string) => {
    const splitPars = string.split('</p>')
    return splitPars.map((par: string) => {
        return par.replace('<p>', "")
    })
}

export const getMaxChars = (string: string) => {
    return string.length > 200 ? `${string.substring(0, 200)}...` : string
}