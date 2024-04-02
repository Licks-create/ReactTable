import { useEffect, useState } from "react";

function getSavedData(key, initial) {
  console.log(key, initial);
  const savedData = JSON.parse(localStorage.getItem(key));

  if (savedData) return savedData;

  if (initial instanceof Function) return initial();
  return initial;
}
const useLocalStorage = (val, initialValue) => {
  const [value, setvalue] = useState(() => {
    return getSavedData(val, initialValue);
  });
  useEffect(()=>{
    console.log(value)
  },[value])
  return [value, setvalue];
};

export default useLocalStorage;
