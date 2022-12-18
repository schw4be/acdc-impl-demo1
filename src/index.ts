import { Formatter, BackendAdapter } from "./acdc.modules";

// import { format } from "./adapter/formatToLowerCase";
// console.log(format("TEst"));

// Beispiel mit einer Klasse
const formatter = new Formatter();
console.log(formatter.format("TesT"));


console.log("E-Mail:", new BackendAdapter().getEmail("klein"));
