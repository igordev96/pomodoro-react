import { SimpleButton } from "./SimpleButton";

export interface IHeader {
  handleDarkTheme(): void;
}

const GITHUB_REPO = "https://github.com/igordev96/pomodoro-react";

export function Header(props: IHeader) {
  const { handleDarkTheme } = props;

  const handleGoToGithub = () => {
    window.open(GITHUB_REPO, "_blank");
  };

  return (
    <div className="flex justify-between items-center mb-12">
      <div>
        <h1 className="font-extrabold dark:text-zinc-200 text-zinc-800 text-4xl">
          Pomodoro
        </h1>
        <h2 className="font-medium dark:text-zinc-400 text-zinc-500 text-xl">
          Manage your time like magic!
        </h2>
      </div>
      <div className="flex items-center gap-2">
        <SimpleButton onClick={handleDarkTheme} type="sun" />
        <SimpleButton onClick={handleGoToGithub} type="github" />
        <SimpleButton
          onClick={() => console.warn("Translation still missing")}
          type="translate"
        />
      </div>
    </div>
  );
}
