// import axios from 'axios'


export const AUTH_ACTION = 'AUTH_ACTION';

export const authAction = () => ({
    type: AUTH_ACTION
});


// export const registration = async (name, password , telefone) => {
//     try {
//         const response = await axios.post(`https://sunmadebackend.herokuapp.com/api1/v1/register/`, {
//             name,
//             password,
//             telefone
//         })
//         console.log('good')
//         alert(response.data.message)
//         console.log('good');
//     } catch (e) {
//         alert(e.response.data.message)
//     }

// }