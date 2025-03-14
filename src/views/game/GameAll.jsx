import styled from "styled-components";

const GameAll = () => {
  return <GameAllWrapper></GameAllWrapper>;
};

export default GameAll;

const GameAllWrapper = styled.div`
  background-color: var(--clr-violet-dark-active);

  .sc-games {
    min-height: 100vh;
    padding-top: 65px;
  }
`;
