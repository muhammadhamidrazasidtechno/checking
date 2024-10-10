export const saveDataToLocalStorage = (prefix, data) => {
    let localStorageData = JSON.parse(localStorage.getItem(prefix));
    localStorage.setItem(prefix, JSON.stringify({ ...localStorageData, ...data }));
};
