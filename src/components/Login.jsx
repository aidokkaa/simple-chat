
import React, {useContext} from 'react';
import {Button, Container, Grid} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {ConText} from "../index";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const Login = () => {
    const {auth} = useContext(ConText)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user)
    }
        
    const myStyle={
        backgroundImage: 
 "url('https://catherineasquithgallery.com/uploads/posts/2021-02/1614441348_9-p-temnii-fon-dlya-chata-12.jpg')",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <Container  >
              
            <Grid container  className='cont1'
                  style={{height: window.innerHeight - 50,backgroundColor:'#00bd39'}}
                  alignItems={"center"}
                  justify={"center"}
                
            >
            
                <Grid className='grid' style={{width:400, background: '#37de6a'}}
                      container
                      alignItems={"center"}
                      direction={"column"}
                >
                      <p className='text'>WELCOME TO MY SIMPLE CHAT!</p>
                    <Box p={5}>
                        <Button onClick={login} variant={"outlined"}>Войти с помощью Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
