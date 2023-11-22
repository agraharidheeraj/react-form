import React from 'react'
import { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        firstname: "", lastname: "", email: "", Country: "India", address: "", City: "", state: "", Zip: "",
        Comments: false, candidates: false, offers: false, pushnotifications:""
    })

    function changeHandler(event) {
        const { name, value, type, checked } = event.target;
        setFormData((prev) => (
            { ...prev, [name]: type === 'checkbox' ? checked : value })
        )
    }
   

     function submithandler(event){
        event.preventDefault();
        console.log(formData )

    }
    return (
        <div className='flex flex-col items-center mt-2 '>
            <form className='flex flex-col item-center mt-2 justify-center' onSubmit={submithandler}>

                <lable htmlFor="firstname">First Name</lable>

                <input
                    type='text'
                    placeholder='Dheeraj'
                    name='firstname'
                    id='firstname'
                    onChange={changeHandler}
                    value={formData.firstname}
                    className='border-2'
                />

                <lable htmlFor="lastname">Last Name</lable>

                <input
                    type='text'
                    placeholder='Agrahari'
                    name='lastname'
                    id='lastname'
                    onChange={changeHandler}
                    value={formData.lastname}
                    className='border-2 to-black'
                />

                <label htmlFor='email'>Email Address</label>

                <input
                    type='email'
                    placeholder='dheeraj700agrahari@gmail.com'
                    name='email'
                    id='email'
                    onChange={changeHandler}
                    value={formData.email}
                    className='border-2'
                />


                <label htmlFor='Country'>Country</label>
                <select
                    name='Country'
                    id='Country '
                    onChange={changeHandler}
                    className='border-2'
                >
                    <option value="India">India</option>
                    <option value="Australia">Australia</option>
                    <option value="Nepal">Nepal</option>
                    <option value="London">London</option>
                    <option value="HongKong">HongKong</option>
                    <option value="England">England</option>
                </select>



                <lable htmlFor="address">Street Address</lable>
                <input
                    type='text'
                    placeholder='25/D Cozy'
                    name='address'
                    id='address'
                    onChange={changeHandler}
                    className='border-2'
                />


                <lable htmlFor="City">City</lable>
                <input
                    type='text'
                    placeholder='Mirzapur'
                    name='City'
                    id='City'
                    onChange={changeHandler}
                    className='border-2'
                />


                <lable htmlFor="state">State</lable>
                <input
                    type='text'
                    placeholder='Uttar pradesh'
                    name='state'
                    id='state'
                    onChange={changeHandler}
                    className='border-2'
                />



                <lable htmlFor="Zip">Zip/Pincode</lable>
                <input
                    type='text'
                    placeholder='231001'
                    name='Zip'
                    id='Zip'
                    onChange={changeHandler}
                    className='border-2'
                />


                <fieldset>
                    <legend>By Email</legend>
                    <div >
                        <input
                            type='checkbox'
                            name='comments'
                            id='commentss'
                            onChange={changeHandler}
                            className='border-2'
                        />
                        <div>
                            <lable htmlFor="check">Comment</lable>
                            <p>Get Notified When Someones post a comment on posting</p>
                        </div>

                    <input
                        type='checkbox'
                        placeholder='231001'
                        name='check'
                        id='check'
                        onChange={changeHandler}
                        className='border-2'
                    />

                    <lable htmlFor="check">Candidates</lable>
                    <p>Get Notified When candidates applied for job</p>

                    <input
                        type='checkbox'
                        placeholder='231001'
                        name='check'
                        id='check'
                        onChange={changeHandler}
                        className='border-2'
                    />
                    <lable htmlFor="check">offer</lable>
                    <p>Get Notified When candidates accept or reject offer</p>
                    </div>
                </fieldset>


                <fieldset>
                    <legend>Push Notofication</legend>
                    <p>These are delivered via SMS to your mobile phone</p>

                    <input 
                    type="radio" 
                    id="pushEverything" 
                    name="pushnotifications"
                     value="Everything"
                     onChange={changeHandler}
                     />
                    <lable htmlFor="pushEverything">Everything</lable>
                     <br/>
                    <input 
                    type="radio" 
                    id="pushEmail" 
                    name="pushnotifications"
                     value="Same as Email"
                     onChange={changeHandler}
                     />
                    <lable htmlFor="pushEmail">Same as Email</lable>
                      <br/>
                    <input 
                    type="radio" 
                    id="pushNothing" 
                    name="pushnotifications"
                     value="No push Notification"
                     onChange={changeHandler}
                     />
                    <lable htmlFor="pushNothing">No Push Notification</lable>
                </fieldset>
                <button className=' bg-blue-500 text-white font-bold rounded py-2'>Save</button>
            </form>
        </div>
    )
} 


export default Form