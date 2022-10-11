const drugapolovica = (csv, del = ',') => {
    const arr = csv.split(del);
    return arr.slice(Math.floor(arr.length / 2)).join(del).trim();
}

console.log(drugapolovica("javascript ,i ,nije ,toliko ,los"))