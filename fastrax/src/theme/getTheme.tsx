import THEME from './constant';
import { DARK, LIGHT } from './presets';

export const getTheme = (themeName: string) => {
     console.log(LIGHT);
     switch (themeName) {
          case THEME.DARK:
               return DARK;
          default:
               return LIGHT;
     }
};
