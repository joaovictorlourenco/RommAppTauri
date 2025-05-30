import {
  MinusIcon,
  Square2StackIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { useState } from "react";

export const Header = () => {
  const appWindow = getCurrentWindow();
  const [isMaximized, setIsMaximized] = useState(false);

  const handleMinimize = () => {
    // Minimize the window using Tauri's API
    appWindow.minimize();
  };

  const handleMaximize = () => {
    // Toggle between maximizing and restoring the window
    if (isMaximized) {
      appWindow.unmaximize();
    } else {
      appWindow.maximize();
    }

    // Update the state to reflect the current maximized state
    setIsMaximized(!isMaximized);
  };

  const handleClose = () => {
    appWindow.close();
  };

  return (
    <header
      className="flex items-center justify-between h-9 bg-gray-800 text-white select-none"
      data-tauri-drag-region
    >
      {/* Logo/Title */}
      <div className="flex items-center px-3">
        <span className="text-sm font-medium">Game Hub Room</span>
      </div>

      {/* Window Controls */}
      <div className="flex">
        <button
          onClick={handleMinimize}
          className="h-8 w-12 flex items-center justify-center hover:bg-gray-700 transition-colors"
          data-tauri-drag-region="false"
        >
          <MinusIcon className="w-4 h-4" />
        </button>

        <button
          onClick={handleMaximize}
          className="h-8 w-12 flex items-center justify-center hover:bg-gray-700 transition-colors"
          data-tauri-drag-region="false"
        >
          <Square2StackIcon className="w-3 h-3" />
        </button>

        <button
          onClick={handleClose}
          className="h-8 w-12 flex items-center justify-center hover:bg-red-600 transition-colors"
          data-tauri-drag-region="false"
        >
          <XMarkIcon className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};

export default Header;
