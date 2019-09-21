/*
 * Parse date
 */
export const parseDate = (date: string) => {
    if (!isNaN(Date.parse(date))) {
        const newDate = new Date(date);
        const returnDate = `${
            newDate.getDate().toString().length === 1
                ? '0' + newDate.getDate().toString()
                : newDate.getDate().toString()
        }.${
            newDate.getMonth().toString().length === 1
                ? '0' + newDate.getMonth().toString()
                : newDate.getMonth().toString()
        }.${newDate.getFullYear().toString()}`;
        return returnDate;
    } else {
        return date;
    }
};
