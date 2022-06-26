import { Box, Grid, Typography } from '@mui/material';
import { Slide } from 'react-awesome-reveal';

function Header() {
  return (
    <Slide duration={1500}>
      <Grid
        container
        sx={{
          maxWidth: '900px',
          m: 'auto',
          padding: '1.3rem',
          height: 'fit-content',
          borderRadius: '20px',
          mt: '5rem',
          mb: '2rem',
        }}
      >
        <Grid item xs={12} md={6}>
          <Box sx={{ paddingRight: '2rem' }}>
            <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
              Anyone can belong anywhere
            </Typography>
            <Typography variant="body2" sx={{ mt: '1rem', mb: '1rem' }}>
              A world where anyone can belong anywhere starts with a workplace where you feel welcome and can contribute
              your best work.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              aspectRatio: { xs: '4/3', md: '4/3' },
              width: '100%',
              borderRadius: '20px',
              overflow: 'hiden',
              backgroundPosition: 'right',
              backgroundSize: 'cover',
            }}
          />
        </Grid>
      </Grid>
    </Slide>
  );
}
export default Header;
