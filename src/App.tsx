import { useState } from "react";
import { BigCard } from "./components/BigCard";
import { Header } from "./components/Header";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const handleDarkTheme = () => {
    setIsDarkTheme((prevState) => !prevState);
  };

  return (
    <div className={`${isDarkTheme ? "dark" : ""}`}>
      <div className="dark:bg-zinc-900 bg-zinc-50 flex flex-col items-center">
        <div className="max-w-[1440px] min-h-screen w-screen py-14 px-40 max-md:px-20 max-sm:px-4">
          <Header handleDarkTheme={handleDarkTheme} />
          <div className="flex w-full gap-9 max-xl:flex-col ">
            <BigCard isDarkTheme={isDarkTheme} type="session_data" />
            <BigCard type="tasks_list" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
