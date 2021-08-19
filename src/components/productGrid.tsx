import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {useStyles} from '../hooks/useStyles';
import {useTypedSelector} from '../hooks/useTypedSelector';

interface Props {
  searchTerm: string;
}

export const ProductGrid:React.FC<Props> = ({searchTerm}) => {
  const classes = useStyles();
  const {allProducts} = useTypedSelector((state) => (state));
  return (
    <Container className={classes.cardGrid} maxWidth='md'>
      <Grid container spacing={4}>
        {allProducts.filter((item) => {
          if (searchTerm === '') {
            return item;
          } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return item;
          }
        }).map((item, card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  <Button variant="contained" color="primary">
                    {item.name}
                  </Button>
                </Typography>
                <Typography>
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                Price: ${item.price}
                </Button>
                <Button size="small" color="primary">
                  Date: {item.inventoryDate}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
