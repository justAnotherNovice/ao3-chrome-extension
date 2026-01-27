import { useEffect } from "react";

type handler = (message: any) => Promise<void>;

export default function useMessage(listenerHandler: handler) {
  useEffect(() => {
    chrome.runtime.onMessage.addListener(listenerHandler);

    return () => {
      chrome.runtime.onMessage.removeListener(listenerHandler);
    };
  }, []);
}
