import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-J1D1JXVS3Z"); // Replace with your actual GA4 Measurement ID
}

export const trackPageView = (page: string) => {
  ReactGA.send({ hitType: "pageview", page });
}