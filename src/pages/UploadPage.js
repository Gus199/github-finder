
import 'antd/dist/reset.css';
import {Upload,Button,Spin } from 'antd'
import Page3 from '../components/Page3'

function UploadPage() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: '40vh'
    }}>
 
   {/* <Upload.Dragger 
   multiple
   listType='picture'
   action={"http:localhost:3000/"}
   showUploadList={{showRemoveIcon: true}}
   accept=".png,jpeg,.doc, .jpg, .pdf"
   beforeUpload={(file) => {
    console.log({file})
    return false
   }} */}
   <Upload 
   multiple
   listType='picture'
   action={"http:localhost:3000/"}
   showUploadList={{showRemoveIcon: true}}
   accept=".png,jpeg,.doc, .jpg, .pdf"
   beforeUpload={(file) => {
    console.log({file})
    return false
   }}
  //  defaultFileList={[
  //   {
  //     uid: 'abc',
  //     name: 'exising_file.png',
  //     status: 'uploading',
  //     percent:50,

  //     url: 'https://www.yahoo.com/'
  //   }
  //  ]}
  //  iconRender={(exising, file)=> {
  //   return <Spin>{file.name}</Spin>
  //  }}
  //  iconRender={(exising, file)=> {
  //   return <p>{file.name}</p>
  //  }}
   progress={{
    strokeWidth:3,
    strokeColor: {
      "0%": '#f0f',
      "100%":"#ff0",
    },
    style: {top: 12}
   }}
   >
    {/* Drag files here Or 
    <br/> */}
{/*  */}
 <Page3 />
 {/* <p>Click Upload</p> */}
 {/* </Button> */}
   </Upload>
  
  </div>
  )
}

export default UploadPage




