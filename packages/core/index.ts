import {makeInstaller} from "@gs-ui/utils"
import components from "./components"
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas)
export default makeInstaller(components)

export * from "@gs-ui/components";
