import React, { useEffect, useContext } from 'react';
import { Grid, Card, CardContent, Typography, Box, Divider, Button } from '@mui/material';
import '../styles/CustomCarousel.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const cardItems = [
  {
    title: 'STARTER',
    price: '$500 - $2000',
    text1: 'Minimum Deposit',
    details: [
      'Fx from 1.8* pips & Crypto 1% *',
      'From 1:10 to 1:500',
      'MT5 (Desktop/Mobile/Web)'
    ]
  },
  {
    title: 'STANDARD',
    price: '$3000 - $9000',
    text1: 'Minimum Deposit',
    details: [
      'Fx from 1.2* pips & Crypto 0.8% *',
      'From 1:10 to 1:500',
      'MT5 (Desktop/Mobile/Web)'
    ]
  },
  {
    title: 'ADVANCE',
    price: '$10,000 - $50,000',
    text1: 'Minimum Deposit',
    details: [
      'Fx from 0.2* pips + 6$* on major',
      'From 1:10 to 1:500',
      'MT5 (Desktop/Mobile/Web)'
    ]
  }
];

const TradePlan = () => {
    const { user } = useContext(AuthContext); 
    const navigate = useNavigate(); 

    const handleOnClick = () =>{
        if(user){
            navigate('/deposit')
        }else{
            navigate('/signup')
        }
    }
    

    useEffect(() => {
      AOS.init({ duration: 1000,once: true, });
    }, []);

  return (
    <div className="container mx-auto px-4 my-8" data-aos="fade-up">
      <Grid container spacing={4}>
        {cardItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
            className="card"
              sx={{
                py: { xs: 2, sm: 3, md: 4 },
                bgcolor: '#1D2B53', // Set the card background color
                color: 'white', // Set the card text color
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '16px', // Add border radius
              }}
            >
              <CardContent>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', mt: 2 }}>
                    {item.price}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 2 }}>
                    {item.text1}
                  </Typography>
                </Box>
                <Divider sx={{ my: 2, bgcolor: 'white' }} />
                <Box sx={{ textAlign: 'center' }}>
                  {item.details.map((detail, idx) => (
                    <Typography variant="body2" sx={{ mt: idx === 0 ? 0 : 1 }} key={idx}>
                      {detail}
                    </Typography>
                  ))}
                </Box>
                <Divider sx={{ my: 2, bgcolor: 'white' }} />
                <Box sx={{ textAlign: 'center' }}>
                  <Button variant="contained" color="secondary" className='cursor-pointer' onClick={handleOnClick}>
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
