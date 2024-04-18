import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const AddElement={
//   <a href="asjd" target='_blank'>asudhhs</a>
// }
const date="april";
const year="2012";
const AddElement=React.createElement(
  'a',{href:'www.youtube.com'},'click me to show video',"  "+date," "+year
);
const NewEle=(
<img src="https://imgs.search.brave.com/cWYNw0GyHwdKk7LwbDCQvhlaU2w_81meITJGxw-VNYg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA" alt="asd" style={{ width: '300px', height: '200px' }}/>
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <div style={{display:'flex',justifyContent:'space-between'}}>
    {AddElement}{NewEle}
  </div>
)
