import { PutRequest } from "../../service/requestHospedes";
import { useEffect } from 'react'

function PutHospedes() {
  useEffect(() => {
    PutRequest()
      .then((json) => console.log(json))
      .catch((error) => console.log(error));
  }, []);

  
}

export default PutHospedes