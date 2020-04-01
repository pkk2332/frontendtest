import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Grid,Box } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const Home = () => {
    const [Users, setUsers] = useState([])
    const getUsers = async () => {
        const { data: { data } } = await Axios.get('https://reqres.in/api/users')
        //   console.log(data)
        setUsers(data)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <Box mt={5}>
        <Grid container justify='center' spacing={4} >
            {Users.map(u => {
                console.log(u)
                return (
                    <Grid  md={4} sm={12} key={u.id} item>
                        <Card >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image={u.avatar}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {u.first_name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Email : {u.email}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                            </Button>
                                <Button size="small" color="primary">
                                    Learn More
                            </Button>
                            </CardActions>
                        </Card>

                    </Grid>
                  
                )
            })}
        </Grid>
        </Box>
    )
}
export default Home