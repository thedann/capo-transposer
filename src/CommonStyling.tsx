import styled from 'styled-components';
import Color from './Helpers/Colors';
import MediaQueries from './Helpers/MediaQueries';

export const StyledUl = styled.ul`
  height: 8rem;
  width: 100%;
  overflow: auto;
  scroll-behavior: smooth;
  list-style: none;
  padding: 0;

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${Color.LightGrey};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${Color.Grey};
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${Color.DarkGrey};
  }

  @media ${MediaQueries.aboveTablet} {
    height: 10rem;

  }
`;