declare module 'react' {
  export type ElementType = any;
  export type PropsWithChildren<P = Record<string, unknown>> = P & { children?: any };
  export const createElement: any;
  export function useEffect(effect: any, deps?: any): void;
  export function useMemo<T = any>(factory: () => T, deps?: any): T;
  export function useRef<T = any>(initialValue: T | null): { current: T | null };
  export function useState<T = any>(initialValue: T): [T, (value: T | ((previous: T) => T)) => void];
  const React: any;
  export default React;
}

declare module 'react-dom/client' {
  export const createRoot: any;
}

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare namespace JSX {
  interface IntrinsicAttributes {
    key?: any;
  }

  interface IntrinsicElements {
    [elementName: string]: any;
  }
}
