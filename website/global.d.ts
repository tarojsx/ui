declare module '@docusaurus/router' {
    export { Redirect } from 'react-router'
}

declare module '@docusaurus/useBaseUrl' {
    export default function useBaseUrl(path: string): string
}
