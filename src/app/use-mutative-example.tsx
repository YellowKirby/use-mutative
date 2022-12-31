import { FC } from 'react';
import { useMutative } from 'use-mutative';

export const UseMutativeExample: FC = () => {
  const [state, setState] = useMutative(initState);

  // update with draft in mutable way.
  const handleClick = () =>
    setState((draft) => {
      draft.title = draft.title += ' 🚘';
      draft.cars.push({ text: '🚘' });
    });

  // also can overwrite whole data directly.
  const handleReset = () => setState(initState);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className='text-center'>
        <div className="px-2 py-1 bg-white rounded">{state.title}</div>
        <p className="text-2xl mt-4">{state.cars.length}</p>
      </div>

      <div className="flex gap-4 mt-4">
        <button className="button button-primary" onClick={handleClick}>
          Add
        </button>
        <button className="button button-secondary" onClick={handleReset}>
          rest
        </button>
      </div>
    </div>
  );
};

const initState = {
  title: '🚘',
  cars: [{ text: 'todo' }],
};
