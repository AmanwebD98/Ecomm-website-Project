import React, { useState } from 'react'
import { Button,  Label, Modal, TextInput } from 'flowbite-react';
import toast from 'react-hot-toast';

const ModalSection = () => {
    
       const [openModal, setOpenModal] = useState(false);
  const [orderDetails, setorderDetatals] = useState({fullName:'',address:'',mobile:"",pincode:''});

    function onCloseModal() {
        setOpenModal(false);
        setorderDetatals('');
    }
  const handleChange = (e) => {
    setorderDetatals({ ...orderDetails, [e.target.name]: e.target.value })
    // console.log(orderDetails)
  }
  const handleOrder = (e) => {
    e.preventDefault();
    if (!orderDetails.fullName || !orderDetails.address || !orderDetails.mobile || !orderDetails.pincode) {
        return toast.error("All fields are required")
    }else{
      toast.success("Order is placed ")
      onCloseModal()
      
    }
  }
  






    
  return (
      <>
          <div>
      <Button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-0 text-sm text-white uppercase w-full" onClick={() => setOpenModal(true)}>Checkout</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
           
              <div>
              <div className="mb-2 block">
                <Label id='Your Full Name' value="Your Full Name"  />
              </div>
             <TextInput id="Your Full Name" onChange={handleChange} type="text" name='fullName' required value={orderDetails.fullName} />
            </div>

            
            <div>
              <div className="mb-2 block">
                <Label htmlFor="address" value="Enter Full Address" />
              </div>
              <TextInput id="address" onChange={handleChange} type="text" name='address' required value={orderDetails.address} />
              </div>
              <div>
              <div className="mb-2 block">
                <Label htmlFor="pincode" value=" Your Pincode" />
              </div>
              <TextInput
                id="pincode"
                  type='text'
                  name='pincode'
                value={orderDetails.pincode}
                onChange={handleChange}
                required
              />
            </div>
            
               <div>
              <div className="mb-2 block">
                <Label htmlFor="mobile" value=" Your Mobile Number" />
              </div>
              <TextInput
                id="mobile"
                  type='text'
                  name='mobile'
                value={orderDetails.mobile}
                onChange={handleChange}
                required
              />
            </div>
            




            <div className="w-full">
              <Button className='w-full' onClick={handleOrder}> Order Now</Button>
            </div>
            
          </div>
        </Modal.Body>
              </Modal>
              </div>
    </>
  )
}

export default ModalSection