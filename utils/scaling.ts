import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Custom baseline for iPhone 16 dimensions
const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

export const scale = (size: number) => (width / guidelineBaseWidth) * size;
export const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = 0.5) =>
    size + (scale(size) - size) * factor;