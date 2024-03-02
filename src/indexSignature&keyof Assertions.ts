//index signatures
interface Options {
  [key: string]: string | number | boolean; //[key]: value
  timeout: number;
}
const options: Options = {
  timeout: 1000,
  timeoutMessage: "The request timed out!",
  isFileUpload: false,
  penalty: 100,
};
