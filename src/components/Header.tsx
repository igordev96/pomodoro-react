import { useTranslation } from "react-i18next";
import { SimpleButton } from "./SimpleButton";
import { useState } from "react";

export interface IHeader {
  handleDarkTheme(): void;
}

const GITHUB_REPO = "https://github.com/igordev96/pomodoro-react";

export function Header(props: IHeader) {
  const { handleDarkTheme } = props;

  const [isEnglish, setIsEnglish] = useState(true);
  const { t, i18n } = useTranslation();

  const handleGoToGithub = () => {
    window.open(GITHUB_REPO, "_blank");
  };

  const handleTranslation = () => {
    setIsEnglish((prevState) => !prevState);
    i18n.changeLanguage(isEnglish ? "fr" : "en");
  };

  return (
    <div className="flex max-xl:flex-col max-xl:items-start max-xl:gap-4 justify-between items-center mb-12">
      <div>
        <h1 className="font-extrabold dark:text-zinc-200 text-zinc-800 text-4xl">
          Pomodoro
        </h1>
        <h2 className="font-medium dark:text-zinc-400 text-zinc-500 text-xl">
          {t("manage_time")}
        </h2>
      </div>
      <div className="flex items-center gap-2">
        <SimpleButton onClick={handleDarkTheme} type="sun" />
        <SimpleButton onClick={handleGoToGithub} type="github" />
        <SimpleButton onClick={handleTranslation} type="translate" />
      </div>
    </div>
  );
}
