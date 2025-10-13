import { useMediaQuery } from "react-responsive";

function useExtraLarge() {
  const isTablet = useMediaQuery({ query: "(min-width: 1440px)" });
  return isTablet;
}
function useLarge() {
  const isTablet = useMediaQuery({ query: "(min-width: 1366px)" });
  return isTablet;
}
function useTablet() {
  const isTablet = useMediaQuery({ query: "(min-width: 1024px)" });
  return isTablet;
}
function useMobile() {
  const isTablet = useMediaQuery({ query: "(min-width: 740px)" });
  return isTablet;
}

function usePhone() {
  const isPhone = useMediaQuery({ minWidth: 320, maxWidth: 480 });
  return isPhone;
}

export { useExtraLarge, useLarge, useTablet, useMobile, usePhone };
