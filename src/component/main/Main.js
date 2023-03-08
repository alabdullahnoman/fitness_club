import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Count from '../count/Count';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import { addToDb, getShortCart } from '../../Utilities/fakedb'
import { addTobrDB, getFromDB } from '../../Utilities/breaktimedb';
import Details from '../details/Details';


const Main = () => {
    const [items,setItems]=useState([])
    const [count,setCount]=useState([])
    const [time ,setTime] =useState()
    useEffect(()=>{
        fetch("exercise.json")
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    useEffect(()=>{

        const previousData =getShortCart()
        const dataArray =[]
        for(const id in previousData){
           const presentData= items.find(item=>item.id === id)
           if(presentData){
            const newquantity =previousData[id]
            presentData.quantity= newquantity
            dataArray.push(presentData)
           }
        }
        setCount(dataArray)
    },[items])

    useEffect(()=>{

        const previous = getFromDB()
        setTime(previous)
    },[])

    const add =(data)=>{
        
       let newcount =[]

       const exixts = count.find(item => item.id === data.id)
       if(!exixts){
        data.quantity=1
        newcount =[...count,data]
       }
       else{

        const rest =count.filter(item => item.id !== data.id)
        exixts.quantity =exixts.quantity+1
        newcount =[...rest,exixts]

       }

        setCount(newcount)
        addToDb(data.id)
      }
      const brtime =(e)=>{
        setTime(e.target.value) 
        addTobrDB(e.target.value)
        
    }
    return (
        <div className='container my-5'>
            <div className='row'>
            <div className='col-xl-3 col-sm-12 col-12'>
                <Count time={time} brtime={brtime} count={count}></Count>
            </div>
            <div className='col-xl-9 col-sm-12 col-12'>            
                <div className='container mt-sm-5 mt-xl-0 mt-5'>
                    <div>
                        <h1 className='title'><FontAwesomeIcon className='me-2' icon={faDumbbell}/>RUET Fitness Club</h1>
                        <p className='fs-4 mt-4'>Select today’s exercise</p>
                    </div>
                    <div id='main-cart' className="row row-cols-1 row-cols-md-3 g-4">
                            {
                                items.map(item => <Cart add={add} item={item} key={item.id}></Cart>)
                            }
                    </div>
                    <div className='my-5'>
                        <Details></Details>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Main;