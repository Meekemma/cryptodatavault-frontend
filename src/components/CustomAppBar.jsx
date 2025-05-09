import React, { useState, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate, useLocation } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import trexiz from '../assets/images/trexiz.png';

const pages = ['Home', 'Markets', 'About-Us', 'Account-Type', 'Partners', 'Contact'];
const settings = ['Dashboard', 'Logout'];

const pageRoutes = {
  Home: '/',
  Markets: '/markets',
  'About-Us': '/about-us',
  'Account-Type': '/account-type',
  Partners: '/partners',
  Contact: '/contact',
  Login: '/login',
  Signup: '/signup',
};

const CustomAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { logoutUser } = useContext(AuthContext);

  const accessToken = localStorage.getItem('access_token');
  const refreshToken = localStorage.getItem('refresh_token');
  const isAuthenticated = accessToken && refreshToken;

  const userDats = JSON.parse(localStorage.getItem('user'));
  const userInitial = userDats?.names?.charAt(0).toUpperCase() || '';

  const currentPage = Object.keys(pageRoutes).find(
    (key) => pageRoutes[key] === location.pathname
  );

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    const route = pageRoutes[page];
    if (route) {
      navigate(route);
    }
  };

  const handleCloseUserMenu = (setting) => {
    setAnchorElUser(null);
    if (setting.toLowerCase() !== 'logout') {
      navigate(`/${setting.toLowerCase().replace(/ /g, '-')}`);
    } else {
      logoutUser();
    }
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1D2B53' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            onClick={handleLogoClick}
            sx={{ cursor: 'pointer', display: { xs: 'none', md: 'flex' }, mr: 2 }}
          >
            <img
              src={trexiz}
              alt="Trexiz Logo"
              style={{
                height: '110px',
              }}
            />
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={() => handleCloseNavMenu('')}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              PaperProps={{
                style: {
                  width: '100%',
                  padding: '2px',
                  backgroundColor: 'rgba(245, 245, 245, 0.95)',
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => handleCloseNavMenu(page)}
                  sx={{ paddingRight: '40px'}}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              {!isAuthenticated && [
                <MenuItem
                  key="Login"
                  onClick={() => handleCloseNavMenu('Login')}
                  sx={{ paddingRight: '40px' }}
                >
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>,
                <MenuItem
                  key="Signup"
                  onClick={() => handleCloseNavMenu('Signup')}
                  sx={{ paddingRight: '40px' }}
                >
                  <Typography textAlign="center">Signup</Typography>
                </MenuItem>,
              ]}
            </Menu>
          </Box>

          {/* Mobile Logo */}
          <Box
            onClick={handleLogoClick}
            sx={{
              cursor: 'pointer',
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              mr: 2,
            }}
          >
            <img
              src={trexiz}
              alt="Trexiz Logo"
              style={{
                height: '110px',
              }}
            />
          </Box>

          {/* Desktop Menu (Centered) */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  fontWeight: currentPage === page ? 'bold' : 'normal',
                  textDecoration: currentPage === page ? 'underline' : 'none',
                  textTransform: 'capitalize',
                }}
              >
                {page.toLowerCase()}
              </Button>
            ))}
          </Box>

          {/* Login/Signup or User Menu (Desktop Only) */}
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {isAuthenticated ? (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar sx={{ bgcolor: '#000', color: '#fff' }}>{userInitial}</Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={() => handleCloseUserMenu('')}
                >
                  {settings.map((setting) => (
                    <MenuItem
                      key={setting}
                      onClick={() => handleCloseUserMenu(setting)}
                    >
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <>
                <Button
                  onClick={handleLoginClick}
                  sx={{
                    backgroundColor: '#000',
                    color: 'white',
                    marginRight: 2,
                    borderRadius: '10px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#000',
                      color: 'white',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    },
                  }}
                >
                  Login
                </Button>
                <Button
                  onClick={handleSignupClick}
                  sx={{
                    backgroundColor: '#000',
                    color: 'white',
                    borderRadius: '10px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#000',
                      color: 'white',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    },
                  }}
                >
                  Signup
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default CustomAppBar;