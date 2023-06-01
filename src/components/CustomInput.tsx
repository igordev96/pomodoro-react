export interface ICustomInput
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export function CustomInput(props: ICustomInput) {
  const { ...rest } = props;
  return (
    <input
      className="flex-1 dark:bg-zinc-800 bg-zinc-100 rounded text-sm dark:text-zinc-300 text-zinc-600 dark:placeholder:text-zinc-500 placeholder:text-zinc-400 font-medium outline-none px-2"
      {...rest}
    />
  );
}
