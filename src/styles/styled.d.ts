// styles/styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    text: string;
    primary: string;
    secondary: string;
    accent: string;
    cardBg: string;
    cardShadow: string;
  }
}