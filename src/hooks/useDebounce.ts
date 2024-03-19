import { useState, useEffect } from 'react';
import { debounceTime } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';

type SetValue<T> = (value: T) => void;
type ReturnType<T> = [T, SetValue<T>];

const useDebounce = <T>(time: number, initialValue: T): ReturnType<T> => {
  const [value, setValue] = useState<T>(initialValue);
  const values = useState(() => new Subject<T>())[0]; // Оголошуємо тип Subject<T>

  useEffect(() => {
    const subscription: Subscription = values.pipe(debounceTime(time)).subscribe(setValue);
    return () => subscription.unsubscribe();
  }, [time, values]);

  return [value, (v: T) => values.next(v)];
}

export default useDebounce;