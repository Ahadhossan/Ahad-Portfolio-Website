import {
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
} from "keep-react";
import { MoonStars, SunDim } from "phosphor-react";
import { useTheme } from "./Theme-provider";
import { Laptop, Moon, Sun } from "lucide-react";

const ThemeSwitcher = () => {
  const { setTheme } = useTheme();

  return (
    <Dropdown placement="bottom-start">
      <DropdownAction asChild>
        <button className="flex items-center justify-between rounded-lg p-2.5  transition-all">
          <MoonStars
            size={20}
            color="white"
            className="hidden transition-all dark:block"
          />
          <SunDim
            size={20}
            color="black"
            className="block transition-all dark:hidden"
          />
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownAction>
      <DropdownContent
        align="start"
        className="w-[220px] bg-[#FAFAFA] dark:bg-[#101115] text-black dark:text-white  shadow-sm dark:shadow-[#363a36] dark:shadow-md shadow-blue-100 rounded-md mt-2 transition-all mr-2"
      >
        <DropdownItem
          onClick={() => setTheme("light")}
          className="px-4 py-2 text-gray-700 transition-all rounded-md hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white "
        >
          <Sun className="w-6 h-6" />
          Light Mode
        </DropdownItem>
        <DropdownItem
          onClick={() => setTheme("dark")}
          className="px-4 py-2 text-gray-700 transition-all rounded-md hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white "
        >
          <Moon className="w-6 h-6" />
          Dark Mode
        </DropdownItem>
        <DropdownItem
          onClick={() => setTheme("system")}
          className="px-4 py-2 text-gray-700 transition-all rounded-md hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white "
        >
          <Laptop className="w-6 h-6" />
          System Theme
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
};

export default ThemeSwitcher;
