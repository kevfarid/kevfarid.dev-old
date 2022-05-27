import styled from '@emotion/styled';
import LangIcon from 'components/icons/Lang';
import MyLogo from 'components/icons/MyLogo';
import ThemeIcon from 'components/icons/Theme';
import useConfig from 'hooks/useConfig';
import ITheme from 'models/ITheme';

export default function Header() {
  const { lang } = useConfig();

  return (
    <HeaderStyled>
      <MyLogo witdh={50} />
      <NavStyled>
        {lang.paths?.map((path) => (
          <NavItem key={path.path} href={path.path}>
            {path.title}
          </NavItem>
        ))}
      </NavStyled>
      <ActionsStyled>
        <LangIcon />
        <ThemeIcon />
      </ActionsStyled>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

const NavStyled = styled.nav`
  display: flex;
`;

const ActionsStyled = styled.section`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const NavItem = styled.a`
  text-decoration: none;
  position: relative;
  padding: 0.5rem;
  top: 0;
  filter: drop-shadow(
    0 0 0.5rem ${({ theme }: { theme?: ITheme }) => theme?.colors.primary}
  );
  color: ${({ theme }: { theme?: ITheme }) => theme?.basic.text};
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
