import { useEffect, useState } from "react";

export function useDateTime() {
  const [dateTime, setDateTime] = useState<string>("");

  useEffect(() => {
    const now = new Date();
    const date = now.toLocaleString();
    setDateTime(date);
  }, []);

  return dateTime;
}
