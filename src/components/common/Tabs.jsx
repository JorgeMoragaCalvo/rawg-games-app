import styled from "styled-components";

const Tabs = () => {
  return <TabsWrapper></TabsWrapper>;
};

export default Tabs;

const TabsWrapper = styled.div`
  position: relative;
  min-height: 1000px;
  background-color: var(--clr-violet-dark-active);

  .tabs-buttons {
    position: absolute;
    left: 0;
    top: 0;
    width: 286px;
    z-index: 99;
    padding-top: 60px;
    padding-bottom: 60px;
    /* box-shadow: rgba(0, 0, 0, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px; */
    transition: var(--transition-default);

    .tabs-buttons-close {
      position: absolute;
      right: -32px;
      top: 0;
      width: 32px;
      height: 32px;
      display: none;

      &:hover {
        background-color: var(--clr-pink-normal);
        color: var(--clr-white);
      }
    }

    @media screen and (max-width: 1480px) {
      width: 240px;
    }

    @media screen and (max-width: 1380px) {
      width: 200px;
    }

    @media screen and (max-width: 1280px) {
      transform: translateX(-88%);
      width: 286px;

      .tabs-buttons-close {
        display: block;
      }

      &.show {
        transform: translateX(0);
      }
    }
  }

  .tabs-button {
    button {
      padding: 12px 30px;
      font-family: "Barlow";
      font-weight: 500;
      font-size: 18px;
      letter-spacing: 0.1em;
      /* border-bottom: 1px solid rgba(255, 255, 255, 0.03); */
      width: 100%;
      text-align: start;
    }

    &:hover:not(.tabs-active) {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }

  .tabs-active {
    background-color: var(--clr-pink-normal);
    button {
      color: var(--clr-white);
    }
  }

  .tabs-body {
    max-width: 1050px;
    margin-left: auto;
  }
`;
