export function makeID(length = 10) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result.toUpperCase();
}

export function getToday() {
  const addPrefix0 = (value:number) =>
    (value < 10 ? '0' + value : value ).toString();

  let date = new Date()
  let day:string = addPrefix0(date.getDate());
  let month: string = addPrefix0(date.getMonth()+1);
  let year = date.getFullYear();

  return `${year}/${month}/${day}`;
}
