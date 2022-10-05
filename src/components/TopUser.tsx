import React from 'react';
import {cutWallet} from '../utils/constant'


interface TopUserProps{
wallet:string;
amount:number;
icon:string;
index:number;

}
const TopUser:React.FC<TopUserProps> = ({wallet,index,icon,amount}) => {
  return (
    <div className="topten-item">
    <div className="mrt-2">
      <img src={`/img/${icon}.png`} />
    </div>
    <div className="mrt-5">
      <div className="body-04">NO.{index}</div>
      <div className="heading-06">{cutWallet(wallet)}</div>
    </div>
    <div className="line" />
    <div>
      <div className="body-04">Tổng người</div>
      <div className="d-flex align-items-center">
        <div className="heading-06">{amount} Người</div>
      </div>
    </div>
  </div>
  )
}

export default TopUser
