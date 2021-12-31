import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';

export function PageHabitaciones() {
  const tiers = [
    {
      title: 'Standard',
      price: '50',
      description: [
        'Incluye desayuno para 2 huéspedes todos los días',
        'WI-FI',
        'Salida Tardía 16:00 hs',
        'Estacionamiento sin valet',
      ],
     
    },
    {
      title: 'Deluxe',
      subheader: 'Most popular',
      price: '100',
      description: [
        'Incluye desayuno para 2 huéspedes todos los días',
        'WI-FI',
        'Salida Tardía 18:00 hs',
        'Estacionamiento con valet',
      ],
     
    },
    {
      title: 'Grand Deluxe',
      price: '180',
      description: [
        'Incluye desayuno para 2 huéspedes todos los días',
        'WI-FI',
        'Salida Tardía 18:00 hs',
        '1 botella de vino espumante',
        'Estacionamiento con valet',
      ],
    
    },
  ];
  
  return (
    <div className="page-habitaciones">
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Nuestras Habitaciones
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
        Nuestras 301 versátiles habitaciones y suites son un refugio moderno del estrés de la bulliciosa ciudad a sus pies. Cada una de nuestras habitaciones cuenta con ventanas del piso al techo que ofrecen una luz natural.
        </Typography>
      </Container>

      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul style={{paddingLeft:"0px"}}>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
