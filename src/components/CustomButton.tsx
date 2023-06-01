export interface ICustomButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function CustomButton(props: ICustomButton) {
  const { title, ...rest } = props;
  return (
    <button
      className="bg-lime-500 text-white font-semibold text-sm py-2 px-3 rounded"
      {...rest}
    >
      {title}
    </button>
  );
}
