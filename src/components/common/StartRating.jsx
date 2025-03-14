import styled from "styled-components";

const StartRating = () => {
  return <StartRatingWrapper></StartRatingWrapper>;
};

export default StartRating;

const StartRatingWrapper = styled.div`
  position: absolute;
  right: 18px;
  bottom: 10px;
  z-index: 1;

  li {
    padding: 0 2px;
    font-size: 14px;
  }
`;
