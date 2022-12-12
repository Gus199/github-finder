import pdf from "../assets/images/amar.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'
import UploadPage from './UploadPage'
import Tables from "./Tables";
import TestPage from '../pages/TestPage'
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'
import NotFound1 from '../pages/NotFound1';
import NotFound2 from '../pages/NotFound2';
import Head1 from '../components/Head1'
import Head2 from '../components/Head2'
import PageSection from '../PageSection/PageSection'
import PageSection1 from '../PageSection/PageSection1'
import NotFound from "./NotFound";

function Home() {
  return (
    <>
   <Tables />

  
     {/* <div data-aos="fade-up" className="inner-wrapper">
                        <Button variant="primary" href={pdf} target="_blank">
                            <AiOutlineDownload />
                            &nbsp;Download CV
                        </Button>
                    </div> */}
    {/* <UploadPage /> */}
      {/* <UserSearch /> */}
      {/* <UserResults /> */}
    </>
  )
}

export default Home
