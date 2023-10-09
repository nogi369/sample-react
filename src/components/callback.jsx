import { useCallback } from "react";

export const Callback = () => {
  const consoleLog = useCallback(() => {
    console.log("テスト");
  }, []);

  return <div>{consoleLog()}</div>;
};

// useCallback
// useCallback(callbackFunction, [deps]);

// https://qiita.com/seira/items/8a170cc950241a8fdb23
