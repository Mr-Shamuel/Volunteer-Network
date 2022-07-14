import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import vector from '../../images/imgs.webp';


import SendIcon from '@mui/icons-material/Send';

const AddEvents = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [imgUrl, setImgurl] = useState(null);
  const onSubmit = data => {
    const eventData = {
      name: data.name,
      URL: imgUrl
    };


    fetch(`http://localhost:4000/addEvents`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(eventData)

    })

      .then(res => console.log('server site response', res, eventData))
  };

  const handleAlert = () => {
    alert("Successfully added!")

  }

  const handleImgChange = e => {

    const imgData = new FormData();
    imgData.set('key', '282714a7921d0fb989986947422ff429');
    imgData.append('image', e.target.files[0]);


    axios.post('https://api.imgbb.com/1/upload', imgData)
      .then(function (response) {
        setImgurl(response.data.data.display_url);
        console.log(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });

  }



  return (
    <div className=" container" >

      <div className="row">
        <div className="col-md-4 "> 
          <form onSubmit={handleSubmit(onSubmit)} className=" p-5 mt-5">
            <h3 className='py-3'>Add Events here:</h3>
            <input className='py-2' placeholder="Enter Event Name: " {...register("name")} />
            <br />
            <Stack className='py-2' direction="row" alignItems="center" spacing={2}>
              <Button variant="contained" component="label">
                Upload
                <input hidden accept="image/*" multiple type="file" onChange={handleImgChange} />
              </Button>
              <IconButton className='py-2' color="primary" aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" onChange={handleImgChange} />
                <PhotoCamera />
              </IconButton>
            </Stack>


            {errors.exampleRequired && <span>This field is required</span>}

            <Button className='py-2' onClick={handleAlert} variant="contained" color="success" endIcon={<SendIcon />}>
              Submit
            </Button>

          </form>
        </div>
        <div className="col-md-8">
        <img src={vector} alt="vector img" />

        </div>
      </div>



    </div>
  );
};

export default AddEvents;