import { useRef } from "react";

import { useEffect } from "react";

const userPreviuos = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export default userPreviuos;
