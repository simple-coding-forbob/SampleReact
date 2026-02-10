import { useEffect, useState } from "react";

function useIsoDate() {
  const [dateTime, setDateTime] = useState<string>("");

  useEffect(() => {
    const now = new Date();
    const date = now.toISOString();
    setDateTime(date);
  }, []);

  return dateTime;
}

export default useIsoDate;
