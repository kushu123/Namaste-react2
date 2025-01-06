import { useRouteError } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="error-header">
          <div>
           <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600;900&display=swap" rel="stylesheet"></link>
           <script src="https://kit.fontawesome.com/4b9ba14b0f.js" crossorigin="anonymous"></script>
          </div>

     <div class="mainbox">
       <div class="err">4</div>
       <FontAwesomeIcon className="far" icon={faCircleQuestion} />
         <div class="err2">4</div>
         <div class="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go 
           <Link to="/"> Home </Link>and try from there.</p></div>
        </div>
      </div>

    )}

    export default Error;