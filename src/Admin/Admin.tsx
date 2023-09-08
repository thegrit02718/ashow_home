import React from 'react';
import './Admin.css'; 
import Header from '../Ashow/Header';
import Footer from '../Ashow/Footer';
import { useNavigate } from 'react-router-dom';
import MainURL from '../MainURL';
import axios from 'axios';

const test = () => {
  axios
  .post(`${MainURL}/notification/allsend`, {
    iosToken : 'fjdBESQ28U5sofP0i3l-EF:APA91bGjyzufFVfkUoXkToxizVadB1sAo1G9nC8ttf5nnbpmxDGcb6W780ZOWikK8qLShIwQB8shhRr9N3Hfvkhl1fM2L_T6Txp0VHZEilWiW1y1rDJGgBHWrXMveDwPEBAgEWy4eOS5',
    androidToken : 'fKP53BLKQSatC1-xQ00S_f:APA91bE9OhNph68EYnWZlKaS-lNoEFgGJnJz-7M6m24jd4B7xbd_Xg3naMT5GPIPVPwU4q0HWbmkRIrE4W2ONtMcLW3qDrIjRCVJnfyM0sEdUPICUCl26alZikufa0fK4xrGPNvlD2ps'
  })
  .then((res) => { 
   console.log(res.data);
  })
  .catch((err) => {
    console.log('Notification_err', err);
  });
}

export default function Admin( props: any) {
  
  return (
    <div className="AdminContainer">
      <Header/>
      <div  className="AdminContent">
        
      <button
          onClick={test}
        >사용자 전체 알림 발송</button>
      </div>
     
      {/* footer */}
      <section className="footer">
      <div className="inner">
          <Footer></Footer>
      </div>
      </section>
    </div>
  );
}
