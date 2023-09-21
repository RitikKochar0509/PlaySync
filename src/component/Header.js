import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { setSearchQuery } from '../utils/searchSlice';
const Header = () => {
  const [searchdata,setSearchData] = useState(""); 
  const dispatch = useDispatch();
  const handleSubmit = (e) =>{
    console.log(searchdata);
    e.preventDefault();
    dispatch(setSearchQuery(searchdata));
    setSearchData("");
  }

  
    
 const  handletoggleMenu = () =>{
  dispatch(toggleMenu());
 }
//  useEffect(()=>{
//   // searchApiData();
//  searchApiData();
//  },[searchdata])

//  const searchApiData = async()=>{
//   const data = await fetch(YOUTUBE_SEARCH_API + searchdata);
//   const json = await data.json();
//   console.log(json);
//  }

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg items-center'>
        <div className='flex items-center col-span-1'>
            <img onClick={handletoggleMenu}  className='cursor-pointer h-6 mx-2' src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" alt ="hamburger-menu"/>
          <a href='/'>
            <img  className='h-12' src = "https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg" alt ="youtube-logo"/>
            </a>
        </div>
        <form onSubmit={handleSubmit} className='col-span-10 px-10'>
            <input value={searchdata} onChange={(e)=>setSearchData(e.target.value)} className='w-1/2 border border-gray-400 p-2 rounded-l-full' type='text'/>
            <button className='border border-gray-400 p-2 rounded-r-full'>Search</button>
        </form>
        <div className='col-span-1'>
            <img className='h-8' alt ="user-icon" src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB5CAMAAAAqJH57AAAAY1BMVEUAAAD///+2trb39/cmJiby8vLf39+6urpubm5MTEyEhITT09Pu7u69vb3Q0NB4eHgcHBw9PT0wMDDm5uarq6uNjY2kpKQPDw+dnZ1fX1/Z2dnGxsZVVVVnZ2cXFxdDQ0OVlZXVc5RmAAAENElEQVRogc2b6ZKqMBCFI4uAsgjKooLy/k959U6NCiTpLVhz/stXCTHdfbpRG462UVMk1U3dqqRooi3rGYr+kyw+qKkOcbY+eVsHSqegpq6cRt4WrZb7VFvQ2BSyPxqxPxr9dcj7CgA/9ny/BrkBuU917slnFFips2NymCDBSt1Dl+TwjgYrVaYOyfgV/1+1O/JAAiPfNYaMO9WfwpxwBHlLBit1cUKGL5ClAhfkjgHG7DdIPrLASh3F5B2TvJOSj/MsAKsbtGiIzHvLT41CcskmlzLylQ1W6ioic8/XU8AZA8j8zVaqkpCP5oQPVms/3Xay5DUrZU/C7eSTiNwIyIWIXAjItFxkLntuYidzAuRb9lBpJ4vACnj2HyVL/s4ysuw92y8xO7kXkRMBWRIwZP9nT0Q+Cciye9seoO3kVBSr7JUdEJ8pNeRcQGEHkEcBuRaR9wIy4Jn82dxTkBvY8wKYnHIv0ADyLMC6iltkQCUGTE71Pqd4yYj6mXeDeuBzEZ4BJxmzhyksOWWQwbod5w1lZDDGaEf5YdQwDfoFaPImJoFj1DORjivFBRxwj8S6zPg6B7digr9dI8FAbGSQkZkRvn1E6GOEcA6cIF11Inmziex3eBBRHkbrV4WNOWhWDWHBZPKD7en3PPFoXFZf8tL1010P+g7hZzsgPxTm2Rj3ZVX28Zjl1NVKyC70h8n+3quTQznimlCPF9ElVVJ7e7A5CniA2fB7mAI4v3nq9ZcPhozvAebDxFaP4WWnk3B6GHIO2T8t8q9bZ99Cv7kt/uYn409MZE97WVUWtq+/30rTlaon783V606/g7k5Y7rrrxktGci7Ym86UbD1gLxBG7M15AumfqziuvEir6ljTOF11ww/LMkyV8akZcawIPPbRHYtito5WeaA2TR/2epb4AV6Sl5rq3/UmMmytgWsk4mcrwxWKteT2ZYIXlWqJVMnKDgadOS1X/KPmiU5XUS4VfRuGb7ItBKZr/OcfPkS+H2+f8nYISy5+imZMyfD1XZCHr9IHidkrCPgnrz+xfmWPz1h3/pTvcPGL9n/FvjliL5ukuhL5OUdJuzsY/UO0W9yKJkdweqjVfkRJb9wgX7Ogn7mJOtk2p/6rHMmedja98kk3Z/mnrJONyRL7imbUII06yPNawzZ7IpNc6N/TvbXQi86DIuKDuHoOgFrqlh/jfREU7vrPAP3cUs38ap1K0bHYK3Rr3doZDMVMx30jpzBlbq4q7HOBivY5IeFrmp44ziL2X3MeI3nqXrzFzEW3zOV5wq2KW6r15tLBlkeJavV7AX8bY8/vnMXzpMYrFdQPTBPjOomZPQgMrj5NuHxvgvKOS9HRK8f3UFJozNubL6Kc+TnXfjezTGDbN223OXYRgu1a5SfdoZ8qU1q4teL9H6Vf7l6XXFOqqBVbVAmw67xroxPJv8By6c24wflpjoAAAAASUVORK5CYII="/>
        </div>
    </div>
  )
}

export default Header