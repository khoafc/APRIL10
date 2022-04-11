import React, { useState, useEffect, Component } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useHistory, } from "react-router";
import axios from "axios";
import SignOut from "./SignOut";
import Options from "./Options";
import EssayForm from "./EssayForm";
import Track from "./Track";
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: "",
      fileContent: "",
      comment: "",
      
    };
  };

  fileExtension = ""

  handleFileChange = (e) => {
    
    const namename = localStorage.getItem("email")

    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      let  fileExtension = file.name.split('.').pop(); 
      console.log(fileExtension)
      let comp =""
      if (fileExtension=="") {
  
         comp = ""
  
      } else if (fileExtension ==="txt"){
  
        comp = "The file uploaded successfully!"
  
      }
      else if ((fileExtension !=="txt")) {
         comp = "Cannot upload the file"
        
      }
      console.log(comp)

      this.setState({ fileName: file.name, fileContent: reader.result, comment: comp });
      const content = this.state.fileContent;    
      console.log("KHOAKK")
    
      let CreateNote = async () => {
        let formField = new FormData();
        formField.append("content", content);
        formField.append("name", namename);
        formField.append("action", "create-post");
        await axios({
          method: "POST",
          url: "/api/product/create/",
          data: formField,
        }).then((response) => {console.log(response.data)});

    
      };
      CreateNote();
     
    };
    reader.onerror = () => {
      console.log("file error", reader.error);
    };
  }

  render() {
    return (
      <div>
        <h1> File Reader</h1>
        <input type='file' onChange={this.handleFileChange}></input>
        <br />
       <h1>{this.state.comment}</h1>
        <Options/>
   
        <SignOut/>
        <Track/>
      </div>
    );
    }
}

export default Test;
