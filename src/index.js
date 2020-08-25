import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let CurDate= new  Date(); //2020,8,8,20
CurDate=CurDate.getHours();
let greeting='';
const cssStyle={ };
if(CurDate>=1 && CurDate<12){
greeting='Good Morning';
cssStyle.color='green';

}else if (CurDate>=12 &&  CurDate<19){
  greeting='Good Afternoon';
  cssStyle.color='orange';
}
else{
  greeting='Good Night';
  cssStyle.color='green';
}
ReactDOM.render(
  <>
  <div>
  <h1>
    Hello Sir, <span style={cssStyle}>{greeting}</span>
  </h1>
  </div>
  </>,
  document.getElementById('root')
);


