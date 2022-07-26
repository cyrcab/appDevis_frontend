import * as SecureStore from 'expo-secure-store';

export const saveItem = async (key, value) => {
  await SecureStore.setItemAsync(key, value);
};

export const getValueFor = async (key) => {
  return await SecureStore.getItemAsync(key);
};

export const deleteItem = async (key) => {
  return await SecureStore.deleteItemAsync(key);
};
