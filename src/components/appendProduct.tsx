import React, { useState } from 'react';
import { Box, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { addProduct } from '../state/action-creators';
import { useDispatch } from 'react-redux';
import { useStyles } from '../hooks/useStyles';

const AddProduct:React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [inventoryDate, setInventoryDate] = useState('');
  const classes = useStyles();
  const dispatch = useDispatch();

  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const today = new Date();
    const dateInFormat = new Date(inventoryDate);
    const item = { name, description, price, inventoryDate };
    if (name === '' || description === '') {
      alert('Kindly fill all of the fields');
    } else if (price === 0) {
      alert('Price can\'t be 0');
    } else if (today < dateInFormat) {
      alert('Kindly add correct date');
    } else {
      dispatch(addProduct(item));
      alert(`${item.name} Added Successfully`);
      setName('');
      setDescription('');
      setPrice(0);
      setInventoryDate('');
    }
  };
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h5" align="center" color="textPrimary" gutterBottom>
        Products List
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
        Here you can view the list of products available at store. Products can be added and searched as well.
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={4} justifyContent="center">
            <form
              className={classes.root}
              noValidate
              onSubmit={onSubmit}
              autoComplete="off">
              <Grid item>
                <div>
                  <TextField
                    id="standard-multiline-flexible"
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    id="standard-multiline-flexible"
                    label="Description"
                    multiline
                    maxRows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </Grid>
              <Grid item>
                <div>
                  <TextField
                    id="standard-multiline-flexible"
                    label="Price ($):"
                    value={price}
                    onChange={(e) => setPrice(+e.target.value)}
                  />
                  <TextField
                    id="standard-multiline-flexible"
                    label=" "
                    type="date"
                    value={inventoryDate}
                    onChange={(e) => setInventoryDate(e.target.value)}
                  />
                </div>
              </Grid>
              <Grid item>
                <Box m={2} pt={1}>
                  <Button
                    data-testid='salman'
                    style={{ margin: '0 auto', display: 'flex' }}
                    variant='contained'
                    color='primary'
                    size='small'
                    type='submit'>
                Add Product
                  </Button>
                </Box>
              </Grid>
            </form>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default AddProduct;
