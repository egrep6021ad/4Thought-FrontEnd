import React, { useState }from 'react'
import './StylesHome.css'
import CardComp from './Comps/CardComp'
import { Input, Button} from '@mui/material';
import FadeIn from 'react-fade-in';
import axios from 'axios';
import NavbarComp from './Comps/NavbarComp'
import {Link} from "react-router-dom";
import logo from '/y.avif'
export default function HomeScreen(props){  
 const [article, setArticle] = React.useState("")
 const [apiReturnData, setApiReturnData] = React.useState(null)
 const [showResponse, setShowResponse] = React.useState(false)
  
 const API_BASE_URL = "https://4thought-backend.egrep6021ad.repl.co"
  
  const sendToBackend = async() =>{
   const res = await axios.post(API_BASE_URL+"/postArticle",{
     value : article
   }).catch((e)=>console.log(e))
    try{
      console.log(res.data)
      if(res.data[0]=='nonbiased'){
        return window.location.href = "https://4thought.egrep6021ad.repl.co/unbiasedView"
      }
      else if(res.data[0]=='republican'){
        return window.location.href = "https://4thought.egrep6021ad.repl.co/rightView"
      }
     else if(res.data[0]=='democrat'){
        return window.location.href = "https://4thought.egrep6021ad.repl.co/leftView"
      }
    
    }catch(e){
      console.log(e)
    }
    return null
   }

  return(
    <div>
        <NavbarComp />
    <div style={{
    backgroundImage:`url(${logo})` ,
        backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height:'100%',
  width: '100%',
  overflow:'hidden',
  paddingTop:'45px',
  display:'flex',
  flexGrow:'1',
  flexDirection:'column'
    }} >
  
      <div style={{width:'50%',marginLeft:'5%',marginTop:'5%'}}>
         <FadeIn delay={'100'} transitionDuration={'1200'}>
          <CardComp 
            br={'20rem'}
            color= '#7396EF'
            title="Political Group 1"
            image="https://images.unsplash.com/photo-1618710250233-dd515c3415ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2187&q=80" /> 
         </FadeIn>
      </div>
      <div style={{width:'50%',marginRight:'8%',alignSelf:'flex-end'}}>
         <FadeIn delay={'350'} transitionDuration={'1000'}>
           <CardComp  
             br={'20rem'}
             color='#DA2A2A' 
             title="Political Group 2" 
             image="https://images.unsplash.com/photo-1569285645462-a3f9c6332d56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" /> 
        </FadeIn>
      </div>
      
      <div style={{display:'flex',justifyContent:'center', alignContent:'center',flexDirection:'column',flexGrow:2,margin:'2rem',}}>
         <FadeIn delay={'1000'} transitionDuration={'800'}>   
           
        <Input 
          value={article}
          style={{color:'white'}}
          onChange={(e)=>     {setArticle(e.target.value)}}
          placeholder={'Where we can find your article?'}
          className='inputBox' >
        </Input>    
      </FadeIn>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Button
    style={{alignSelf:'center',color:'white',marginTop:'5%',backgroundColor:'#262524'}}onClick={()=>{ sendToBackend()}}>Explore
        </Button>
        </div>
        {showResponse ? 
        <div>
          {apiReturnData}
        </div> : null
        }
      </div>
      
      <div style={{width:'50%',marginLeft:'4%'}}>
         <FadeIn delay={'250'} transitionDuration={'800'}>
          <CardComp 
            br={'20rem'}
            color='#7396EF' 
            title="Political Group 1" 
            image="https://images.unsplash.com/photo-1591622180684-b96c52ef3908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" /> 
         </FadeIn>
      </div>
      
       <div style={{width:'50%',marginRight:'5%',marginBottom:'5%',alignSelf:'flex-end'}}>
        <FadeIn delay={'1000'} transitionDuration={'1200'}>
         <CardComp 
           br={'20rem'}
           color='#DA2A2A' 
           title="Political Group 2" 
           image="https://images.unsplash.com/photo-1504163598380-5a8ea881897f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" /> 
         </FadeIn>
      </div>
    </div>
    </div>
  )
}