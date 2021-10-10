import { Dimensions } from 'react-native';
const {width, height} = Dimensions.get("window");

export const COLORS = {

    primary:"#1E1E1E",
    secondary:"#383838",


}

export const SIZES = {
    base:8,
    font:14,
    radius:12,
    padding:24,

    // font-size

    targetTitle:40,
    h1:30,
    h2:22,
    h3:16,
    h4:14,
    h5:12,


    body1:30,
    body2:22,
    body3:16,
    body4:14,
    body5:12,
    
    // app dimension

    width,
    height
}

const appTheme = {SIZES}

export default appTheme