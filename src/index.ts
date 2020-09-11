import api from "./infrastructure/entrypoint/api";

(async function() {
  const port = process.env.PORT || 8000;
  api.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
  });
})();


