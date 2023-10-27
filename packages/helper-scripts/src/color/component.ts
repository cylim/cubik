import { data } from "./data";
import fs from "fs";
function convertToCSS(styles: { [key: string]: string }): string {
  let css = ":root {\n";
  for (const [key, value] of Object.entries(styles)) {
    css += `    ${key}: ${value};\n`;
  }
  css += "}";
  return css;
}

export const createComponentNames = () => {
  const componentColorDump = data.collections.find(
    (e) => e.name === "Component ( Colors )"
  );

  let finalData = {};
  componentColorDump?.modes[0].variables.forEach((e) => {
    if (typeof e.value !== "string") {
      finalData = {
        ["--" + e.name.split("/")[e.name.split("/").length - 1]]: `var(${
          "--" +
          e.value.name
            .split("/")
            [e.value.name.split("/").length - 1].toLowerCase()
        })`,
        ...finalData,
      };
    } else {
      //   if (e.name.split("/").length > 3) {
      //     finalData = {
      //       [e.name]: "--" + e.value.split("/")[4],
      //       ...finalData,
      //     };
      //   } else if (e.name.split("/").length === 3) {
      //     finalData = {
      //       [e.name]: "--" + e.value.split("/")[2],
      //       ...finalData,
      //     };
      //   }
      console.log(e.value);
    }
  });
  fs.writeFileSync(
    "/Users/dhruvraj/Documents/cubik/frontend/cubik/packages/presets/styles/component.style.css",
    convertToCSS(finalData)
  );
};