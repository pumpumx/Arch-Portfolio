import React, { useState, useEffect, type MouseEvent } from "react";
import { useOpenApp } from "../store/openAppStore";

type ActionItem = {
  label: string;
  onClick: () => void;
};

const ContextMenu: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y : 0 });
  const toggleOpenApp = useOpenApp((state)=>state.toggleApp)
  const actions: ActionItem[] = [
    {
      label: "🔗 Open GitHub",
      onClick: () => window.open("https://github.com/pumpumx", "_blank"),
    },
    {
      label: "🔄 Refresh",
      onClick: () => window.location.reload(),
    },
    {
      label: "🌙 Log Off",
      onClick: () => {},
    },
    {
      label: "👤 About Me",
      onClick: () => toggleOpenApp('About-me',"opened",true),
    },
    {
      label: "🔴 Shutdown",
      onClick: () => window.close(),
    },
  ];

  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    setCoords({ x: e.pageX, y: e.pageY  });
    setVisible(true);
  };

  const handleClick = () => {
    if (visible) setVisible(false);
  };

  useEffect(() => {
    document.addEventListener("contextmenu", handleContextMenu as any);
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu as any);
      document.removeEventListener("click", handleClick);
    };
  }, [visible]);

  return (
    <>
      {visible && (
        <div
          className="absolute z-50 w-48 bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-zinc-700 rounded-lg shadow-xl text-sm text-white overflow-hidden"
          style={{ top: coords.y, left: coords.x }}
        >
          {actions.map((action, index) => (
            <div
              key={index}
              onClick={() => {
                action.onClick();
                setVisible(false);
              }}
              className="px-4 py-2 hover:bg-zinc-700 cursor-pointer transition-colors"
            >
              {action.label}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ContextMenu;
