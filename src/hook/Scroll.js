import react from "react";
import { useEffect , useState } from "react/cjs/react.development";


function Scroll() {

let [scrollValue , setScroll] = useState(0);


function scrollCheck() {
  let position = window.scrollY;
  setScroll(position)
};

useEffect(() => {
    window.addEventListener("scroll",scrollCheck);
    return () => window.removeEventListener("scroll", scrollCheck);
}, []);

  return  scrollValue;
}

export default Scroll;