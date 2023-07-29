const nextMonth = (dateString, months) => {
    let [day, month, year] = dateString.split('/').map(Number);

    const newDate = new Date(year, month, day);

    newDate.setMonth(newDate.getMonth() - 1 + months);

    day = String(newDate.getDate()).padStart(2, '0');
    month = newDate.getMonth();
    year = String(newDate.getFullYear());

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return `${day}/${monthNames[month]}/${year}`;
}

const currentDateFormatted = () => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = currentDate.getMonth();
    const year = String(currentDate.getFullYear());

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return `${day} ${monthNames[month]} ${year}`;
}

const generateDate =() => {
    const currentDate = new Date();

    const day = String(currentDate.getDate()).padStart(2,'0');
    const month = String(currentDate.getMonth() + 1).padStart(2,'0');
    const year = String(currentDate.getFullYear());

    
    return `${day}/${month}/${year}`;
  }

export {generateDate, currentDateFormatted, nextMonth};