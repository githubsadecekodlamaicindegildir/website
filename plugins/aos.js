import AOS from "aos";
import "aos/dist/aos.css";

export default ({ app }) => {
  app.AOS = new AOS.init({
    startEvent: 'load',
    disable: true,
    offset: 200,
    duration: 600,
    easing: 'ease-in-out-cubic',
    once: true
  });
};
