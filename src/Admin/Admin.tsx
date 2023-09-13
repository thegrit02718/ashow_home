
import './Admin.css'; 
import React, { useState } from 'react';
import Header from '../Ashow/Header';
import Footer from '../Ashow/Footer';
import { useNavigate } from 'react-router-dom';
import MainURL from '../MainURL';
import axios from 'axios';
import { useCookies } from 'react-cookie';

export default function Admin( props: any) {

  const [cookies, setCookie, removeCookie] = useCookies(['login']);

  let navigate = useNavigate();

  let [이름, set이름] = useState('');
  let [비번, set비번] = useState('');

  const login = () => {
    axios.post(`${MainURL}/login/loginadmin`, {
      username : 이름, password : 비번
    }).then((res)=>{
      if (res.data) {
        alert('관리자 로그인 되었습니다.')
        navigate('/adminmain');
      } else {
        alert('아이디,비번이 잘못되었습니다. 다시 시도하세요.')
      } 
    })
    .catch((error)=>{console.log(error)})
  }

  return (
    <div className="AdminContainer">
      <Header/>
      <div  className="AdminContent">

        <div className='admin_input_wrapper'>
          <div className='admin_box1'>
            <div className='admin_content'>아이디</div>
            <div className='admin_content'>
              <input className='admin_content_input' type='text' onChange={(e)=>{set이름(e.target.value)}}></input>
            </div>
          </div>

          <div className='admin_box2'>
            <div className='admin_content'>비밀번호</div>
            <div className='admin_content'>
              <input className='admin_content_input' type='password' onChange={(e)=>{set비번(e.target.value)}}></input>
            </div>
          </div>

        </div>

        <button className='login_button' 
            onClick={login}>로그인</button>

        <button className='home_button' 
            onClick={()=>{navigate('/')}}>뒤로가기</button>
      
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
