import * as Checkbox from "@radix-ui/react-checkbox";
import { MdCheck } from "react-icons/md";

export type ICustomCheckbox = Checkbox.CheckboxProps &
  React.RefAttributes<HTMLButtonElement> & {
    bgColor: string;
  };

export function CustomCheckbox(props: ICustomCheckbox) {
  const { bgColor, ...rest } = props;

  return (
    <Checkbox.Root
      className={`w-5 h-5 flex items-center justify-center rounded border dark:border-zinc-700 border-zinc-200 ${bgColor}`}
      {...rest}
    >
      <Checkbox.Indicator className="text-white">
        <MdCheck />
      </Checkbox.Indicator>
    </Checkbox.Root>
  );
}
