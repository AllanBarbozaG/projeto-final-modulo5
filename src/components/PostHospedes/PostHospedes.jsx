import { useEffect } from "react";
import { PostRequest } from "../../service/requestHospedes";

function PostHospedes() {
  useEffect(() => {
    PostRequest()
      .then((json) => console.log(json))
      .catch((error) => console.log(error + "deu erro"));
  }, []);
}

export default PostHospedes;
