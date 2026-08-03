import { useEffect, useState } from "react";

function AnimatedNumber({ end, duration = 1500, decimals = 0, separator = false }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;

    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setValue(start);
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  let output = value.toFixed(decimals);

  if (separator) {
    output = Number(output).toLocaleString();
  }

  return <>{output}</>;
}

export default AnimatedNumber;