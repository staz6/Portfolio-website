import "./src/styles/global.css"
import 'typeface-inter';
export const onRenderBody = ({ setHtmlAttributes }) => {
    setHtmlAttributes({ className: "custom-scrollbar" });
  };

export const onClientEntry = () => {
  if (typeof document !== "undefined") {
    document.documentElement.classList.add("custom-scrollbar")
  }
}
