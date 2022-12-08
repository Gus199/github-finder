import pdf from "../assets/images/amar.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'
import UploadPage from './UploadPage'
import Tables from "./Tables";


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
