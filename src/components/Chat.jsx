

import React, {useContext, useState} from 'react';
import {ConText} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Avatar, Button, Container, Grid} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import firebase from 'firebase/compat/app';
import { green } from '@material-ui/core/colors';

const Chat = () => {
    const {auth, firestore} = useContext(ConText)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )

    const sendMessage = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
    }

    if (loading) {
        return <Loader/>
    }

    return (
        <Container>
            <Grid container
                  justify={"center"}
                  style={{height: window.innerHeight - 50, marginTop: 20}}>
                <div style={{ backgroundImage: 
 "url('https://pixelbox.ru/wp-content/uploads/2021/09/background-chat-vk-7.png')",width: '80%', height: '60vh', border: '1px solid gray', overflowY: 'auto',backgroundColor:'#007b25'}}>
                    {messages.map(message =>
                        <div style={{
                            margin: 30,
                            backgroundColor: user.uid === message.uid ? '#E1FFC6' : '#eeeeee',
                            borderRadius: '30px 5px 30px',
                            marginLeft: user.uid === message.uid ? 'auto' : '20px',
                            width: 'fit-content',
                            padding: '7px 30px',
                        }}>
                            <Grid container>
                                <Avatar src={message.photoURL}/>
                                <div>{message.displayName}</div>
                            </Grid>
                            <div>{message.text}</div>
                        </div>
                    )}
                </div>
                <Grid
                    container
                    direction={"column"}
                    alignItems={"flex-end"}
                    style={{width: '80%'}}
                >
                    <TextField style={{backgroundColor:'#eeeeee'}} placeholder='НУу пиши..'
                        fullWidth
                        rowsMax={2}
                        variant={"outlined"}
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <Button style={{backgroundColor:' #40E0D0',margin:'10px'}} onClick={sendMessage} variant={"outlined"}>Отправить</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Chat;

// import React, {useContext, useState} from 'react';
// import {ConText} from "../index";
// import {useAuthState} from "react-firebase-hooks/auth";
// import {Avatar, Button, Container, Grid} from "@material-ui/core";
// import TextField from "@material-ui/core/TextField";
// import {useCollectionData} from "react-firebase-hooks/firestore";
// import Loader from "./Loader";
// import firebase from 'firebase/compat/app';


// const Chat = () => {
//     const {auth, firestore} = useContext(ConText)
//     const [user] = useAuthState(auth)
//     const [value, setValue] = useState('')
//     const [messages, loading] = useCollectionData(
//         firestore.collection('messages').orderBy('createdAt')
//     )

//     const sendMessage = async () => {
//         firestore.collection('messages').add({
//             uid: user.uid,
//             displayName: user.displayName,
//             photoURL: user.photoURL,
//             text: value,
//             createdAt: firebase.firestore.FieldValue.serverTimestamp()
//         })
//         setValue('')
//     }

//     if (loading) {
//         return <Loader/>
//     }

//     return (
//         <Container>
//             <Grid container
//                   justify={"center"}
//                   style={{height: window.innerHeight - 50, marginTop: 20}}>
//                 <div className='div' style={{width: '80%', height: '60vh', border: '1px solid red', overflowY: 'auto'}}>
//                     {messages.map(message =>
//                         <div style={{
//                             margin: 10,
//                             border: user.uid === message.uid ? '2px solid green' : '2px dashed red',
//                             marginLeft: user.uid === message.uid ? 'auto' : '10px',
//                             width: 'fit-content',
//                             padding: 5,
//                         }}>
//                             <Grid container>
//                                 <Avatar src={message.photoURL}/>
//                                 <div>{message.displayName}</div>
//                             </Grid>
//                             <div>{message.text}</div>
//                         </div>
//                     )}
//                 </div>
//                 <Grid
//                     container
//                     direction={"column"}
//                     alignItems={"flex-end"}
//                     style={{width: '80%'}}
//                 >
//                     <TextField placeholder='Ну пиши давай...'
//                         fullWidth
//                         rowsMax={2}
//                         variant={"outlined"}
//                         value={value}
//                         onChange={e => setValue(e.target.value)}
//                     />
//                     <Button onClick={sendMessage} variant={"outlined"}>Отправить</Button>
//                 </Grid>
//             </Grid>
//         </Container>
//     );
// };

// export default Chat;