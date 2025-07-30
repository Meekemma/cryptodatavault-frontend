import React, { useEffect, useContext } from 'react';
import { Grid, Card, CardContent, Typography, Box, Divider, Button } from '@mui/material';
import '../styles/CustomCarousel.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const cardItems = [
  {
    title: 'PILOT',
    price: '$50 - $499.99',
    interest: '5% Monthly ROI',
    benefits: ['Instant Payouts', 'Basic Support'],
  },
  {
    title: 'STARTER',
    price: '$500 - $1999.99',
    interest: '7% Monthly ROI',
    benefits: ['Priority Payouts', 'Dedicated Manager'],
  },
  {
    title: 'STANDARD',
    price: '$2000 - $8999.99',
    interest: '10% Monthly ROI',
    benefits: ['Weekly ROI Reports', 'Advanced Security'],
  },
  {
    title: 'ADVANCE',
    price: '$10,000 - $50,000',
    interest: '15% Monthly ROI',
    benefits: ['Personal Advisor', '24/7 Support', 'VIP Access'],
  },
];

const TradePlan = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleOnClick = () => {
    if (user) {
      navigate('/deposit');
    } else {
      navigate('/signup');
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container mx-auto px-1 sm:px-4 my-8" data-aos="fade-up">
      <Grid container spacing={1} justifyContent="center">
        {cardItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              className="card"
              sx={{
                py: { xs: 1, sm: 3, md: 4 },
                px: { xs: 0.75, sm: 2 },
                bgcolor: '#1D2B53',
                color: 'white',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '16px',
                minWidth: { xs: '95%', sm: 'auto' },
                maxWidth: { xs: '98%', sm: '100%' },
                mx: 'auto',
              }}
            >
              <CardContent>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="h4"
                    component="div"
                    sx={{
                      fontWeight: 'bold',
                      mt: 2,
                      whiteSpace: 'nowrap',
                      fontSize: { xs: '1.5rem', sm: '2rem' },
                    }}
                  >
                    {item.price}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 2 }}>
                    {item.interest}
                  </Typography>
                </Box>
                <Divider sx={{ my: 2, bgcolor: 'white' }} />
                <Box sx={{ textAlign: 'center' }}>
                  {item.benefits.map((benefit, idx) => (
                    <Typography variant="body2" sx={{ mt: idx === 0 ? 0 : 1 }} key={idx}>
                      {benefit}
                    </Typography>
                  ))}
                </Box>
                <Divider sx={{ my: 2, bgcolor: 'white' }} />
                <Box sx={{ textAlign: 'center' }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    className="cursor-pointer"
                    onClick={handleOnClick}
                  >
                    Get Now
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default TradePlan;
