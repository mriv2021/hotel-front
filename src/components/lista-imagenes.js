import lunch1 from "../images/home/lunch1.jpg";
import outdoor2 from "../images/home/outdoor2.jpg";
import room2 from "../images/home/room2.jpg";
import room1 from "../images/home/room1.jpg";
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function ListaImagenes() {
  return (
    <ImageList sx={{ textAlign: "center", width: 850, height: 800, marginLeft: "auto", marginRight: "auto"}}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}

            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: `${room1}`,
    title: 'Habitación Standard',
  },
  {
    img: `${room2}`,
    title: 'Habitación Grand Luxe',
  },
  {
    img: `${outdoor2}`,
    title: 'Piscina ',
  },
  {
    img: `${lunch1}`,
    title: 'Excelente Gastronomía',
  },
  
  
];
