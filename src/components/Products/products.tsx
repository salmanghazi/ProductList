import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../state/action-creators';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { alpha, Box, makeStyles, TextField } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import SearchIcon from '@material-ui/icons/Search';
import { InputBase } from '@material-ui/core';
import { Product } from '../../state/reducers/products.reducer';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(120),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const Products:React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [inventoryDate, setInventoryDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const classes = useStyles();
  const dispatch = useDispatch();
  const { allProducts } = useTypedSelector((state) => (state));
  
  const onSearch = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    
  }

  const renderProducts = (allProducts:Product[]) => (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {allProducts.filter((item) => {
          if (searchTerm === ""){
            return item;
          }
          else if(item.name.toLowerCase().includes(searchTerm.toLowerCase())){
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
  )

  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    var today = new Date();
    var dateInFormat = new Date(inventoryDate);
    const item = { name, description, price, inventoryDate };
    if (name === '' || description === ''){
      alert('Kindly fill all of the fields');
    } 
    else if(price === 0){
      alert('Price can\'t be 0');
    }
    else if(today < dateInFormat){
      alert('Kindly add correct date');
    }
    else {
      dispatch(addProduct(item));
      alert(`${item.name} Added Successfully`)
      setName('');
      setDescription('');
      setPrice(0);
      setInventoryDate('');
    } 
  }
  
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <ShoppingBasketIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Products List
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search Products..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
        </Toolbar>
      </AppBar>
    
    <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
        <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
             Products List
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Here you can view the list of products available at store. Products can be searched as well.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                  <form className={classes.root} noValidate onSubmit={onSubmit} autoComplete="off">
                    <Grid item>
                      <div>
                        <TextField
                          id="standard-multiline-flexible"
                          label="Name"
                          value={name}
                          onChange={e => setName(e.target.value)}
                        />
                          <TextField
                          id="standard-multiline-flexible"
                          label="Description"
                          multiline
                          maxRows={4}
                          value={description}
                          onChange={e => setDescription(e.target.value)}
                        />
                      </div>
                    </Grid>
                    <Grid item>
                      <div>
                        <TextField
                          id="standard-multiline-flexible"
                          label="Price ($):"
                          value={price}
                          onChange={e => setPrice(+e.target.value)}
                        />
                        <TextField
                          id="standard-multiline-flexible"
                          label=" "
                          type="date"
                          value={inventoryDate}
                          onChange={e => setInventoryDate(e.target.value)}
                        />
                      </div>
                    </Grid>
                    <Grid item>
                    <Box m={2} pt={1}>
                    <Button style={{margin: '0 auto', display: "flex"}} variant="contained" color="primary" size="small" type="submit">
                        Add Product
                      </Button>
                    </Box>
                     
                    </Grid>
                  </form>
              </Grid>
            </div>
          </Container>
        </div>
        {renderProducts(allProducts)}
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Products List
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Muhammad Salman (FrontEnd Developer Inc.)
        </Typography>
      </footer>
    </React.Fragment>

  );
}

export default Products;