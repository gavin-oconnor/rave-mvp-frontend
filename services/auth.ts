import axios from 'axios';
export const loginService = (username: string, password: string ) => {
    console.log("logging in")
        axios.put('http://127.0.0.1:5000/auth/login', {
            "email_or_username":username, password
        }, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
        })
      .then(response => {
        console.log('Data:', response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
};

