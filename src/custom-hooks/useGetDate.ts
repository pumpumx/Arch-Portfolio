
export function useGetDate() {
    const getDate = new Date;
    const hours = getDate.getHours()
    const minutes = getDate.getMinutes()
    const seconds = getDate.getSeconds()

    const timeString: (string | undefined) = `${hours}:${minutes}:${seconds}`

    return timeString;

} 