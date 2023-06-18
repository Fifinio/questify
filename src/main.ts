import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { invoke } from "@tauri-apps/api";
import { AppModule } from "./app/app.module";

invoke("greet", { name: "World" })
  // `invoke` returns a Promise
  .then((response) => console.log(response));

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
