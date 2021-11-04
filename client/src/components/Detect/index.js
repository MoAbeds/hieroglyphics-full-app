import React, { Component } from 'react'
import axios from 'axios';
import fileDownload from 'js-file-download'
import Nav from '../website/Nav';

export default class componentName extends Component {
  state = {
 
    // Initially, no file is selected
    selectedFile: null,
      Img:null,
      ImgData:null,
      Loading: null
  };

  // On file select (from the pop up)
  onFileChange = event => {
  
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
    console.log(this.state.selectedFile)
  
  };
  
  // On file upload (click the upload button)
  onFileUpload  = async () => {
  
    // Create an object of formData
    const formData = new FormData();
   
    // Update the formData object
    formData.append(
      "file",
      this.state.selectedFile,
    );
  
    // Play the Loading
    this.setState({Loading:true})

    // Request made to the backend api
    // Send formData object
  let Request= await axios.post('http://0.0.0.0:8000/uploadfile/',
        formData,
        {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    }).then((res) =>{
        console.log('rever response:',res)});

    // Get the image from Server
    let Get_Img = await  axios.get('http://0.0.0.0:8000/getimage', {
    responseType: 'blob',
  })
  .then((res) => {
      this.setState({Img:`${URL.createObjectURL(res.data)}`,Loading:null,ImgData:res.data }
      )

  })


  };
  // Download the Final image
  ImgDownload =async () => {
     let {ImgData} = this.state;
     await fileDownload(ImgData,'hieroglyphics.jpeg')
  }

  //Toggle Btns when use click upload
  Toggle_Btns = () => {
      let {Img,selectedFile} = this.state;
      if (Img) {
          return(
              <div className={'flex flex-row justify-between m-2'} >
                  <button onClick={this.ImgDownload} className=" Btn_Des" role="button" aria-pressed="true">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download Image
                  </button>
                  <button onClick={() => this.setState({Img:null,selectedFile: null,fileDownload:null,Loading:null})} className="Btn_Des" role="button" aria-pressed="true">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                      Upload New Image
                  </button>

              </div>
          )
      }else if (Img ==null ){
          return (
              <div>
                      <div class="file-drop-area">
                        <span class="fake-btn">Choose an Image</span>
                        <span class="file-msg">{selectedFile?selectedFile.name:'or Drag and Drop'} </span>
                        <input onChange={this.onFileChange} class="file-input" type="file" name="myImage" accept="image/*"/>

                      </div>
                      <button className='mt-5' onClick={this.onFileUpload}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>

                      </button>
              </div>
          )
      }
      else {

      }
  }


    render() {
        let {Img,Loading} = this.state
        return (
            <div className="BG_Grad" >
                <Nav/>
                <div className="flex content-center BG_Grad  justify-items-center justify-center flex-auto self-center  min-h-screen bg-base-100   ">
                    <div class="text-center hero-content justify-center flex-auto self-center  ">
                        <div class="max-w-md justify-center  self-center justify-items-center   ">
                             {Loading ? <div class="loader-circle-15 content-center   justify-items-center justify-center flex-auto self-center mb-4 "></div> :null}
                             {Img ? <img src={Img} /> :<h1 class="mb-5 text-2xl font-bold">Upload you best hieroglyphics image</h1>}
                                <div>{this.Toggle_Btns()}</div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
