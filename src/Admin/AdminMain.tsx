import './Admin.css'; 
import React, { useEffect, useState } from 'react';
import Header from '../Ashow/Header';
import Footer from '../Ashow/Footer';
import { useNavigate } from 'react-router-dom';
import MainURL from '../MainURL';
import axios from 'axios';

export default function AdminMain( props: any) {
  
  const navigate = useNavigate();
  let [refresh, setRefresh] = useState<boolean>(false);

  // 알림리스트
  interface notifiList {
    id : number,
    notifiTitle : string,
    notifiMessage : string,
    date : string
  }

  let [notifiList, setNotifiList] = useState<notifiList[]>([]);
  const fetchDatas = () => {
    axios.get(`${MainURL}/notification/notifigetlist`).then((res) => {
      setNotifiList(res.data);
    })
  }

  useEffect(()=>{
    fetchDatas();
  }, [refresh])

    
  // 알림보내기
  let [sendNotifiTitle, setsendNotifiTitle] = useState('');
  let [sendNotifiMessage, setsendNotifiMessage] = useState('');
  
  const handleNotification = () => {
    axios
    .post(`${MainURL}/notification/allsendnotifi`, {
      notifiTitle : sendNotifiTitle,
      notifiMessage : sendNotifiMessage
    })
    .then((res) => { 
      setRefresh(!refresh);
      alert(`Title: ${res.data.notifiTitle}, Body: ${res.data.notifiMessage}`);
    })
    .catch((err) => {
      console.log('Notification_err', err);
    });
  }

  
  return (
    <div className="AdminContainer">
      <Header/>
    
        <div className='AdminContent'>

          <div className='amdin_alert_list_wrapper'>

            <div className='amdin_alert_list_title'>알림 리스트</div>
            <div style={{display: 'flex', backgroundColor: '#fff', padding:10}}>
              <div className='amdin_alert_list_box1'>번호</div>
              <div className='amdin_alert_list_box2'>제목</div>
              <div className='amdin_alert_list_box3'>본문</div>
              <div className='amdin_alert_list_box4'>날짜</div>
            </div>

            {
              notifiList.map((item:any, index:any)=>{
                return(
                  <div>
                    <div style={{width: '100%', height: '1px', backgroundColor: '#BDBDBD'}}></div>
                    <div style={{display: 'flex', backgroundColor: '#fff',  padding: '10px'}}>
                      <div className='amdin_alert_list_box1'>{item.id}</div>
                      <div className='amdin_alert_list_box2'>{item.notifiTitle}</div>
                      <div className='amdin_alert_list_box3'>{item.notifiMessage}</div>
                      <div className='amdin_alert_list_box4'>{item.date}</div>
                    </div>
                  </div>
                )
              })
            }
            
            
          </div>

          <div className='admin_input_wrapper'>
            <div className='admin_box1'>
              <div className='admin_title'>Title</div>
              <div className='admin_content'>
                <input className='admin_content_input'
                  type='text' onChange={(e)=>{setsendNotifiTitle(e.target.value)}}></input>
              </div> 
            </div>

            <div className='admin_box2'>
              <div className='admin_title addheight'>Body</div>
              <div className='admin_content addheight'>
                <input
                type='text'
                className='admin_content_input addheight'
                onChange={(e)=>{setsendNotifiMessage(e.target.value)}}>
                </input>
              </div> 
            </div>

          </div>

          <button className='login_button' 
              onClick={handleNotification}>알림보내기</button>

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
