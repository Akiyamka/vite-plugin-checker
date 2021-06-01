import type { Plugin } from 'vite'

export type CheckerFactory<T = unknown> = (options?: T) => Checker<T>
export type CreateDiagnostic<T = unknown> = (
  config?: T
) => Required<Pick<Plugin, 'config' | 'configureServer'>>

export interface Checker<T = unknown> {
  buildBin: [string, ReadonlyArray<string>]
  createDiagnostic: CreateDiagnostic<T>
}

export interface PluginOptions {
  /**
   * Use `"tsc"` or `"vue-tsc"` or an custom checker
   * @defaultValue `"tcs"`
   */
  checker: 'tsc' | 'vue-tsc' | Checker
  /**
   * Throw in build mode if has error
   * @defaultValue `true`
   */
  enableBuild: boolean
  /**
   * Show overlay when has TypeScript error
   * @defaultValue
   * Same as [Vite config](https://vitejs.dev/config/#root)
   */
  overlay: boolean
  /**
   * [WIP]
   * 'cli': use `tsc --noEmit` or `vue-tsc --noEmit`
   *  - No overlay support
   *  - Original console output
   *
   * 'api': use TypeScript programmatic API
   *  - Support overlay
   *  - Almost the same console output as original
   *
   * @defaultValue
   * if 'vueTsc' is true, then force set to 'cli', otherwise default to 'api'
   */
  // mode: 'cli' | 'api'
  /**
   * Root path to find tsconfig file
   * @defaultValue
   * Same as Vite https://vitejs.dev/config/#root
   */
  root: string
  /**
   * Relative tsconfig path to {@link (PluginOptions:interface).root}
   * @defaultValue `"tsconfig.json"`
   */
  tsconfigPath: string
}
