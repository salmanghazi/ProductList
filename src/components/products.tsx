import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import {InputBase} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {useStyles} from './productsStyles';

import AddProduct from './appendProduct';
import {Footer} from './footer';
import {ProductGrid} from './productGrid';


const Products:React.FC = () => { 
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');
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
              inputProps={{'aria-label': 'search'}}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </Toolbar>
      </AppBar>

      <main>
        {<AddProduct/>}
        {/*
          Dynamically fetch products
         */}
        <ProductGrid searchTerm={searchTerm}/>
      </main>
      <Footer/>
    </React.Fragment>

  );
};

export default Products;
