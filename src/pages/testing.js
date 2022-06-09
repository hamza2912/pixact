import React from 'react';
import axios from 'axios';


function Testing() {

    const [response, setresponse] = React.useState("testing");

    React.useEffect(() => {
        axios.post('https://payment-api-10.herokuapp.com/payment', {
            "card": "4242424242424242",
            "cvv": "123",
            "expiry": "12/24"
          })
        .then((res)=> {
            if(res){
                console.log(res.data);
                // setresponse(res.data.user.name)

            }
        })
        .catch(function (error) {
            if (error.response) {
              console.log(error.response.data);
            //   setresponse(error.response.data.msg);
            }
        });
    }, []);

    return (
      
      <div>
        
        {response}
      
      </div>

    );
  }
  
export default Testing;
