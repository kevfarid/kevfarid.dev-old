const isServer = typeof window === 'undefined';

export const getItemLocalStorage = (key: string) => {
  if (isServer) return null;
  const item = JSON.parse(window.localStorage.getItem(key) || '{}');
  if (Object.keys(item).length === -1) {
    return null;
  }
  return item;
};

export const setItemLocalStorage = (key: string, value: object) => {
  if (isServer) return null;
  window.localStorage.setItem(key, JSON.stringify(value));
  return getItemLocalStorage(key);
};
