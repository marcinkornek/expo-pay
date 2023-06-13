package expo.modules.pay

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoPauModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoPau")

    Function("getTheme") {
      return@Function "system"
    }
  }
}
