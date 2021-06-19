import React from 'react';
import { AppBar, Toolbar, Typography, Button, Grid, Box, FormControl, InputLabel, MenuItem, Select, withStyles, InputBase, createStyles, Theme } from '@material-ui/core';
import { NavLink, useHistory, useLocation } from 'react-router-dom';

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(2),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }),
)(InputBase);

const NavBar: React.FC = () => {

  const history = useHistory();
  const location = useLocation();
  const [value, setValue] = React.useState();

  const handleChange = (event: React.ChangeEvent<{ value: any }>) => {
    setValue(event.target.value)
  }

  const handleClick = (path: string) => {
    history.push(path);
  }

  return (

    <AppBar style={{ backgroundColor: '#2196f3' }} position="static">
      <Toolbar style={{ maxWidth: 1110, width: "100%", margin: "0 auto" }}>
        <Grid container justify="space-between" alignItems="center" xs={12} >
          <Typography variant="h6">
            React + TypeScript
          </Typography>
          {window.innerWidth > 600 ?
            <div style={{ display: 'flex' }}>
              <Box mr={1}>
                <NavLink style={{ color: '#fff', textDecoration: 'none' }} to="/">
                  <Button className="nav-btn" variant={'outlined'} color="inherit">
                    <span>Список дел</span>
                  </Button>
                </NavLink>
              </Box>
              <NavLink style={{ color: '#fff', textDecoration: 'none' }} to="/about">
                <Button className="nav-btn" variant={'outlined'} color="inherit">
                  <span>Информация</span>
                </Button>
              </NavLink>
            </div>
            :
            <FormControl>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={location.pathname}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                <MenuItem onClick={handleClick.bind(null, '/')} value="/">Список дел</MenuItem>
                <MenuItem onClick={handleClick.bind(null, '/about')} value="/about">Информация</MenuItem>
              </Select>
            </FormControl>
          }

        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar;

