import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import noman from '../../Image/Noman.jpg'
import './Count.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Count = (props) => {
    const notify = () => toast("Congratulation!");
    const count =props.count
    const brtime =props.brtime
    const time =props.time
    console.log(count)
    let extime="00"
    for (const countt of count){

        extime =parseInt(extime) + countt.time * countt.quantity
    }
    
    
    return (
        <div className='countBody'>
            <div className='d-flex align-items-center'>
                <div>
                <img id='img' src={noman} alt="" />
                </div>
                <div>
                <h4> Al Noman</h4>
                <p><FontAwesomeIcon icon={faLocationDot}/> Rajshahi,Bangladesh</p>
                </div>
            </div>
            <div id='bodyDetails' className='d-flex gap-5 my-5'>
                <div>
                    <p className='fw-bold'>75kg</p>
                    <p>Weight</p>
                </div>
                <div>
                <p className='fw-bold'>6'1''</p>
                <p>Height</p>
                </div>
                <div>
                <p className='fw-bold'>25yr</p>
                <p>Age</p>
                </div>
            </div>
            <div>
                <h4>Add A Break</h4>
                <div className='radio mt-3'>
                    <input className='radioInput' type="radio" value="10" name="myRadio" id="myRadio1" onChange={brtime} />
                    <label className='radioLabel' for="myRadio1">10s</label>
                    <input className='radioInput' type="radio" value="20" name="myRadio" id="myRadio2" onChange={brtime} />
                    <label className='radioLabel' for="myRadio2">20s</label>
                    <input className='radioInput' type="radio" value="30" name="myRadio" id="myRadio3" onChange={brtime} />
                    <label className='radioLabel' for="myRadio3">30s</label>
                    <input className='radioInput' type="radio" value="40" name="myRadio" id="myRadio4" onChange={brtime} />
                    <label className='radioLabel' for="myRadio4">40s</label>
                    <input className='radioInput' type="radio" value="50" name="myRadio" id="myRadio5" onChange={brtime}/>
                    <label className='radioLabel' for="myRadio5">50s</label>
                </div>
                <div>
                    <h4 className='my-4'>Exercise Details</h4>
                    <div className='EB-time'>
                        <h5>Exercise Time: {extime} Second</h5>
                    </div>
                    <div className='EB-time'>
                        <h5>Break Time: {time? time: "00"} Second</h5>
                    </div>
                </div>
                <div>
                <button id="toastbtn" onClick={notify} type="button" class="btn btn-success">Completed</button>
                <ToastContainer />
                </div>
            
            </div>
        </div>
    );
};

export default Count;