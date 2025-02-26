import React, { useContext, useState, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LockIcon from '@mui/icons-material/Lock';
import GroupIcon from '@mui/icons-material/Group';
import { useNavigate } from 'react-router-dom';
import DashboardCurrency from './DashboardCurrency';
import DashBoardBalance from './DashBoardBalance';
import DashBoardFooter from './DashBoardFooter';
import { CryptoContextProvider } from '../context/CryptoContext';
import TopMarket from './TopMarket';
import AuthContext from '../context/AuthContext';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const pages = [
  { name: 'Home', icon: <HomeIcon />, path: '/' },
  { name: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
  { name: 'Deposit', icon: <AccountBalanceIcon />, path: '/deposit' },
  { name: 'WithDrawal', icon: <MoneyOffIcon />, path: '/withdrawal' },
  { name: 'Transactions', icon: <CompareArrowsIcon />, path: '/transactions' },
  { name: 'Profile', icon: <PersonIcon />, path: '/profile' },
  { name: 'Referral', icon: <GroupIcon />, path: '/referral' },
  { name: 'Logout', icon: <LogoutIcon />, path: '' },
];

const SideNavBar = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const { logoutUser } = useContext(AuthContext);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handlePageClick = (path, pageName) => {
    if (pageName === 'Logout') {
      logoutUser(); // Trigger the logout function
    } else {
      navigate(path);
      if (isMobile) {
        handleDrawerClose(); // Close the drawer on mobile after navigation
      }
    }
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: '#1D2B53' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && isMobile && { display: 'none' }), // Hide the icon when the drawer is open on mobile
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            BOBBYGRAM
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          display: isMobile && !open ? 'none' : 'block', // Hide the drawer on mobile when closed
        }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {pages.map((page) => (
            <ListItem key={page.name} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                onClick={() => handlePageClick(page.path, page.name)} // Pass page name to handler
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {page.icon}
                </ListItemIcon>
                <ListItemText primary={page.name} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        style={{
          marginLeft: isMobile ? 0 : open ? drawerWidth : `calc(${theme.spacing(8)} + 1px)`,
          transition: 'margin 0.3s',
          marginTop: '90px', // Adjust this value to push the cards down further
        }}
      >
        <div className='my-8 mx-8 relative'>
          <CryptoContextProvider>
            <DashboardCurrency />
          </CryptoContextProvider>
          <DashBoardBalance />
          <CryptoContextProvider>
            <TopMarket />
          </CryptoContextProvider>
          <DashBoardFooter />

          <div className='absolute inset-x-0 bottom-0 h-16'>
          </div>
        </div>
      </main>
    </>
  );
};

export default SideNavBar;