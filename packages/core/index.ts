import {makeInstaller} from "@gs-ui/utils"
export * from "@gs-ui/components"
import components from "./components"
import "@gs-ui/theme/index.css"

export default makeInstaller(components)
