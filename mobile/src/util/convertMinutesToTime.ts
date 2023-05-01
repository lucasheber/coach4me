export default function convertMinutesToTime(minutes: number) {
    const hours = Math.floor(minutes / 60);
    const min = minutes % 60;

    return hours + ':' + `${min}`.padStart(2, '0');
}