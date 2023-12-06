import { Props } from './day.types';

export const Day = ({ meta, puzzle, notes, solutions }: Props) => {
  return (
    <div>
      <h1>{puzzle.title}</h1>
      <p>{meta.createdAt}</p>
    </div>
  );
};
