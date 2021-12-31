import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import spa1 from "../../images/home/spa1.jpg";
import spa2 from "../../images/home/spa2.jpg";
import spa3 from "../../images/home/spa3.jpg";

export default function CardList() {
  const cards = [
    {
      img: spa1,
      tittle: "Aromaterapia",
      text:"Antes de comenzar su tratamiento, disfrute de un fragante té y relájese en nuestro sereno lounge. " ,
    },
    { img: spa2,
      tittle: "Hidroterapia",
      text: "También cuenta con bañera de hidromasajes, hidroterapia y sauna. Todos nuestros tratamientos faciales incluyen un suave masaje de manos y brazos.",
     },
    { img: spa3,
      tittle: "Masajes",
      text:"Elija entre un masaje holístico, rollerssage, envolturas corporales, tratamientos exfoliantes y duchas Vichy." },
  ];
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  pt: "56.25%",
                }}
                image={card.img}
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.tittle}
                </Typography>
                <Typography>
                  {card.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
