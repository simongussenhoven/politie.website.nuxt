export const splitParagraphs = (string: string) => {
    const splitPars = string.split('</p>')
    return splitPars.map((par: string) => {
        return par.replace('<p>', "")
    })
}

export const getMaxChars = (string: string, length: number) => {
    return string.length > length ? `${string.substring(0, length)}...` : string
}

export const stripEmptyTags = (string: string) => {
  return string.replace(/<[^/>][^>]*><\/[^>]+>/, "");
}