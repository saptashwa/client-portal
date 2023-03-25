import axios from 'axios';

// export const handleLogin = (username,password) => {
//   const loginBody = {
//     username:username,
//     password:password
//   };
//   console.log(loginBody);
//   const loginUrl = "http://localhost:3000/api/users/login";
//     axios.post(loginUrl,loginBody )
//     .then(response => {
//       // handle successful login
//     })
//     .catch(error => {
//       // handle login error
//     });
//   };
  export const handleRegister = (username,password,email,firstname,lastname,contactno) => {
    console.log(username,password,email,firstname,lastname,contactno);
    console.log(constructRegisterBody(username,password,email,firstname,lastname,contactno))
    
    // axios.post('/register', {
    //   username,
    //   password
    // })
    // .then(response => {
    //   // handle successful login
    // })
    // .catch(error => {
    //   // handle login error
    // });
  };
  
  const constructRegisterBody=(username,password,email,firstname,lastname,contactno)=>{
    return (
      {
        email: email,
        password: password,
        username: username,
        firstName:firstname,
        lastName:lastname,
        contactNumber:contactno
      }
    );
  };