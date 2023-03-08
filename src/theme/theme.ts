import { DEVICES } from 'utils/constants'

export const theme = () => {
    return {
        colors: {
            white: '#fff',
            black: '#000',
            orange: '#ff9201',
            mandarin: '#f15c00',
            pink: '#e80d80',
            gray: {
                '50': '#f9fafb',
                '100': '#f3f4f6',
                '200': '#e5e7ea',
                '300': '#d0d4da',
                '400': '#9da2af',
                '500': '#6b7383',
                '600': '#4a5464',
            },
        },
        devices: {
            mobile: `(min-width: ${DEVICES.MOBILE})`,
            tabletPortrait: `(min-width: ${DEVICES.TABLET_PORTRAIT})`,
            tabletLandscape: `(min-width: ${DEVICES.TABLET_LANDSCAPE})`,
            desktop: `(min-width: ${DEVICES.DESKTOP})`,
        },
    }
}
