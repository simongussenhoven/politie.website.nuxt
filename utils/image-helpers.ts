import Default from '/assets/img/default.png'

export const getImage = (url: string) => {
    return url && url !== '' ? url : Default
}