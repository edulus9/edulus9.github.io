import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { When } from 'react-if';
import { Button } from 'react95';
import * as S from '../styles';
import { NavBarMenuItem } from './NavBarMenuItem';

export interface StartMenuProps {}

export const StartMenu: React.FC<StartMenuProps> = () => {
  const [isStartMenuOpen, setIsStartMenuOpen] = React.useState(false);
  const { t } = useTranslation();

  return (
    <>
      <Button onClick={() => setIsStartMenuOpen(!isStartMenuOpen)}>
        {t('layout.startMenu.label')}
      </Button>
      <When condition={isStartMenuOpen}>
        <S.MenuListWrapper onClick={() => setIsStartMenuOpen(false)}>
          <NavBarMenuItem>meow</NavBarMenuItem>
        </S.MenuListWrapper>
      </When>
    </>
  );
};
