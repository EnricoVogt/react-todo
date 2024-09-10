import { useEffect, useState } from 'react';
import { Observable } from 'rxjs';

export function useUnwrap<T>(observable$: Observable<T>, initialState: T) {
  const [value, setValue] = useState<T>(() => initialState);

  useEffect(() => {
    const subscription = observable$.subscribe(setValue);

    return function cleanup() {
      subscription.unsubscribe();
    };
  }, [observable$]);

  return value;
}
