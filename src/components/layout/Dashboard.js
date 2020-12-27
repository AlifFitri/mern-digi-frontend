import React, { useState,useEffect} from 'react';
import {TextField, Container, Card, CardContent} from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Autocomplete } from '@material-ui/lab';
import api from '../../utils/api';


const Dashboard = () => {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#3DB9E9',
      },
    },
  });

    const [usernames, setUsernames] = useState([]);

    useEffect(() => {
        console.log("OnInit");
        getUsername();
      }, []);

    let [selectedUser, setSelectedUser] = useState({ name: '', email: '', id:'' });

    const getUsername = () => {

        const token = localStorage.getItem('token');
        const bearerToken = 'Bearer ' + token;
        console.log(bearerToken);
        api.get('/users/retrieve-all',{
          headers: {
            Authorization: bearerToken,
          }
        }).then((resp) => {
            setUsernames(resp.data)
           });
    }

    return ( 
      <Container maxWidth="sm">
        <div className="autocompleteDashboard" >
        <Autocomplete
        id="combo-box-demo"
        options={usernames}
        onChange={(event, value) => setSelectedUser(value)} 
        getOptionLabel={(option) => option.name}
        style={{ width: 400, marginTop: '4rem' }}
        renderInput={(params) => (
          <ThemeProvider theme={theme}>
          <TextField {...params} color="primary" label="Search User" variant="outlined" />
          </ThemeProvider>
        )}
      />
        </div>
        <div>
          <Card style={{ marginTop: '1rem', marginBottom: '1rem', backgroundColor: '#d6d6d6' }}>
            <CardContent>
              {
                selectedUser ? 
                  <h3><strong>Selected User:</strong> <span>{selectedUser.name}</span></h3> 
                : 
                  <h3><strong>Selected User:</strong> </h3>
              }

              {
                selectedUser ? 
                  <h5><strong>Id:</strong> {selectedUser.id}</h5>
                : 
                  <h5><strong>Id:</strong></h5>
              }

              {
                selectedUser ? 
                  <h5><strong>Email:</strong> {selectedUser.email}</h5>
                : 
                  <h5><strong>Email:</strong></h5>
              }
              
            </CardContent>
          </Card>
        </div>
      </Container>
     );
}
 
export default Dashboard;