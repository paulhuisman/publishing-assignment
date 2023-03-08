export const truncate = (string: string, maxLength: number = 100) => {
    // return string if its is not long enough
    if (string.length < maxLength) {
        return string
    }

    // trim the string to the maximum length
    let trimmedString = string.substring(0, maxLength)

    // re-trim if we are in the middle of a word
    trimmedString = trimmedString.substring(
        0,
        Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))
    )

    return `${trimmedString}...`
}
