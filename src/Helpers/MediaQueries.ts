const size = {
  mobile: '320px',
  tablet: '768px',
  laptop: '1024px',
}

export const MediaQueries = {
  aboveMobile: `(min-width: ${size.mobile})`,
  aboveTablet: `(min-width: ${size.tablet})`,
  aboveLaptop: `(min-width: ${size.laptop})`,
};

export default MediaQueries;