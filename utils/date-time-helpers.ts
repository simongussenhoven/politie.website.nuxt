export const getDateTime = (string: string): string => {
    const date = string.split(" ")[0]
    const time = string.split(" ")[1].substring(0, 5)
    return `${date} | ${time}`
}