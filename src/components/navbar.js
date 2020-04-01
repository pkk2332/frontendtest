import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Button, Typography, Box } from '@material-ui/core';
import { useStore } from '../store/store';


const Navbar = () => {
    const [state,] = useStore(0)
    console.log(state)
    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar >
                    <IconButton edge="start"
                        // className={classes.menuButton} 
                        color="inherit" aria-label="menu">
                        <span className="material-icons">
                            menu
                       </span>
                    </IconButton>
                    <Typography variant="h6"
                    //  className={classes.title}
                    >
                        News
                    </Typography>
                    {
                        !state.user ? (
                            <Box ml="auto">
                                <Button color="inherit">Login</Button>
                            </Box>
                            )
                        :
                        <Box ml="auto">
                        <Button color="inherit">Logout</Button>
                         </Box>
                    }


                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Navbar