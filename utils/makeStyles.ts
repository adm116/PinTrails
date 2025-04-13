import { useWindowDimensions } from "react-native";
import { useTheme } from "../hooks/useTheme";

/**
 * A utility for creating styles that adapt to the current theme and font scaling.
 *
 * @param stylesFn - A function that receives the current theme and a responsiveSize helper
 * @returns A hook that returns your generated styles
 */
export const makeStyles = <T extends Record<string, any>>(
  stylesFn: (theme: ReturnType<typeof useTheme>, responsiveSize: (size: number) => number) => T
): () => T => {
  return () => {
    const theme = useTheme();
	const { fontScale } = useWindowDimensions();
    return stylesFn(theme, (currentSize) => currentSize * fontScale); 
  };
};