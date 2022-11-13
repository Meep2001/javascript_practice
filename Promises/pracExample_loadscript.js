let loadScript = function (src) {
  const script = document.createElement("script");
  return new Promise(function (resolve, reject) {
    script.src = src;
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`${src} cannot be loaded `));
    document.head.append(script);
  });
};

loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js")
  .then((script) => {console.log(`${script.src} is loaded`); return script})
  .then((script)=>console.log("SCRIPT IN ANOTHER HANDLER",script.src))
  .catch((error) => console.error(error));
