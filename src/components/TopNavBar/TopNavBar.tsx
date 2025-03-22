import * as React from 'react';
import { AppBar, Toolbar, Button, MenuList, MenuListItem, Separator } from 'react95';

export interface TopNavBarProps {}

export const TopNavBar: React.FC<TopNavBarProps> = () => {    
    const [isStartMenuOpen, setIsStartMenuOpen] = React.useState(false);

    return <AppBar
    ><Toolbar style={{ justifyContent: 'space-between' }}>
        <Button
            onClick={() => setIsStartMenuOpen(!isStartMenuOpen)}
        >Start</Button>
                  {isStartMenuOpen && (
            <MenuList
              style={{
                position: 'absolute',
                left: '0',
                top: '100%'
              }}
              onClick={() => setIsStartMenuOpen(false)}
            >
              <MenuListItem>
                <span role='img' aria-label='👨‍💻'>
                  👨‍💻
                </span>
                Profile
              </MenuListItem>
              <MenuListItem>
                <span role='img' aria-label='📁'>
                  📁
                </span>
                My account
              </MenuListItem>
              <Separator />
              <MenuListItem disabled>
                <span role='img' aria-label='🔙'>
                  🔙
                </span>
                Logout
              </MenuListItem>
            </MenuList>
          )}
        </Toolbar>
    </AppBar>;
};

