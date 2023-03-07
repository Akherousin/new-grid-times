import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <ActionGroupLaptop>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroupLaptop>
        <Logo />
        <SubscriptionGroup>
          <Button>Subscribe</Button>
          <Link href="">Already a subscriber?</Link>
        </SubscriptionGroup>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media (${QUERIES.laptopAndUp}) {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const ActionGroupLaptop = styled(ActionGroup)`
  display: none;

  @media (${QUERIES.laptopAndUp}) {
    display: flex;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media (${QUERIES.tabletAndUp}) {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media (${QUERIES.laptopAndUp}) {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    margin-top: 16px;
    margin-bottom: 83px;
  }
`;

const SubscriptionGroup = styled.div`
  position: relative;
  display: none;
  justify-self: end;
  align-items: center;
  gap: 8px;

  @media (${QUERIES.laptopAndUp}) {
    display: revert;
  }
`;

const Link = styled.a`
  position: absolute;

  font-size: calc(14rem / 16);
  text-decoration: underline;
  font-style: italic;
  color: var(--color-gray-900);

  width: 100%;
  text-align: center;
  margin-block-start: 8px;
`;

export default Header;
