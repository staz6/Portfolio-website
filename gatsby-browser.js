import "./src/styles/global.css"
import 'typeface-inter';
export const onRenderBody = ({ setHtmlAttributes }) => {
    setHtmlAttributes({ className: "custom-scrollbar" });
  };