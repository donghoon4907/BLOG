import { useState, useCallback, useEffect, ChangeEvent } from "react";
import axios from "axios";

export const useInput: any = (defaultValue: string) => {
  const [value, setValue] = useState<string>(defaultValue);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return { value, onChange, setValue };
};

export const useDebounce: any = (defaultValue: string, delay: number) => {
  const [value, setValue] = useState<string>("");
  const [state, setState] = useState<string>(defaultValue);

  useEffect(() => {
    if (value === state) return;
    const timeout = setTimeout(() => setValue(state), delay);

    return () => clearTimeout(timeout);
  }, [value, state]);

  return [value, setState];
};

export const useLazyAxios: any = () => {
  const [loading, setLoading] = useState(false);

  const call = useCallback(
    async options => {
      const result: any = {};
      setLoading(true);
      try {
        const { data } = await axios(options);
        result["data"] = data;
      } catch (error) {
        result["error"] = error;
      }
      setLoading(false);
      return result;
    },
    [loading]
  );

  return { loading, call };
};
