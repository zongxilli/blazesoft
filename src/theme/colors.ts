export type ThemeColors = {
  overlay: string;
  whiteDefault: string;
  blackDefault: string;
  systemBackgroundPrimary: string;
  systemBackgroundSecondary: string;
  systemBackgroundTertiary: string;
  elevatedBackgroundPrimary: string;
  elevatedBackgroundSecondary: string;
  elevatedBackgroundTertiary: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  grey1: string;
  grey2: string;
  grey3: string;
  grey4: string;
  grey5: string;
  grey6: string;
  redDefault: string;
};

export const LightColors: ThemeColors = {
  overlay: 'rgba(0, 0, 0, 0.3)',

  whiteDefault: '#ffffff',
  blackDefault: '#000000',

  systemBackgroundPrimary: '#FBFBFB', // regular
  systemBackgroundSecondary: '#F1F1F1', // when hovered, pressed, etc
  systemBackgroundTertiary: '#EEEEEE', // disabled

  elevatedBackgroundPrimary: '#FFFFFF', // regular
  elevatedBackgroundSecondary: '#F8F8F8', // when hovered, pressed, etc
  elevatedBackgroundTertiary: '#EFEFEF', // disabled

  textPrimary: '#000000', // regular
  textSecondary: '#7F7F7F', // captions, subtitles
  textTertiary: '#A8A8A8', // disabled

  grey1: '#FFFFFF',
  grey2: '#F2F2F7',
  grey3: '#E5E5EA',
  grey4: '#AEAEB2',
  grey5: '#8E8E93',
  grey6: '#19191B',

  redDefault: '#FE4141',
} as const;

export const DarkColors: ThemeColors = {
  overlay: 'rgba(0, 0, 0, 0.5)',

  whiteDefault: '#E4E4E4',
  blackDefault: '#000000',

  systemBackgroundPrimary: '#121212',
  systemBackgroundSecondary: '#232323',
  systemBackgroundTertiary: '#272727',

  elevatedBackgroundPrimary: '#1D1D1D',
  elevatedBackgroundSecondary: '#2F2F2F',
  elevatedBackgroundTertiary: '#323232',

  textPrimary: '#E4E4E4',
  textSecondary: '#848484',
  textTertiary: '#4D4D4D',

  grey1: '#171717',
  grey2: '#1C1C1E',
  grey3: '#343434',
  grey4: '#383838',
  grey5: '#6A6A6A',
  grey6: '#E5E5E5',

  redDefault: '#D93838',
} as const;
