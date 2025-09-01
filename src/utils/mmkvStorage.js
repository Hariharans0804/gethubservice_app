import { MMKV } from "react-native-mmkv";

export const storage = new MMKV();

export const saveToStorage = (key, value) => {
    storage.set(key, JSON.stringify(value));
};

export const getFromStorage = (key) => {
    const value = storage.getString(key);
    return value ? JSON.parse(value) : null;
};

export const removeFromStorage = (key) => {
    storage.delete(key);
};

