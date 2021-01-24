import React, { useState } from 'react';
import { useFormik } from 'formik';
import '../styles/index.css';

import CurrentGoalList from './CurrentGoalList';
import AddGoalModal from './AddGoalModal'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'

const Home = () => {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const validate = values => {
      const errors = {};
      if (!values.name || values.name.length < 4) {
   
        errors.name = 'Required';
   
      }
      return errors;
    };

   const formik = useFormik({

      initialValues: {
        name: '',
        frequency: ''
      },
      validate,
      onSubmit: values => {
 
        alert(JSON.stringify(values, null, 2));
 
      },
    });

   return (
      <div className="container d-flex flex-column align-items-center">
         <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>Add a Goal</Modal.Title>
            </Modal.Header>

            <Modal.Body>
               <form onSubmit={formik.handleSubmit}>
                  <div className="d-flex flex-column mb-2">
                     <label htmlFor="text">Goal Name</label>
                     <input name="name" minlength="4" type="text" onChange={formik.handleChange} 
                           value={formik.values.name}
                     />
                     {formik.errors.name? <div className="text-danger">{formik.errors.name}</div> : null}
                  </div>

                  <Form.Group controlId="exampleForm.ControlSelect1">
                     <Form.Label>Select Frequency</Form.Label>
                     <Form.Control name="frequency" 
                                   as="select" 
                                   value={formik.values.frequency}
                                   onChange={formik.handleChange}
                     >
                        <option>Once a Day</option>
                        <option>Every Other Day</option>
                        <option>Once a Week</option>
                     </Form.Control>
                  </Form.Group>
                  <div className="d-flex justify-content-end">
                     <Button variant="secondary" onClick={handleClose} className="mr-3">Close</Button>
                     <Button type="submit" variant="primary">Submit</Button>
                  </div>
               </form>
            </Modal.Body>
         </Modal>
         <div className="mt-2 w-100">
            <h1 className="border text-center p-3 title-border">
               Add a Goal
               <i className="fas fa-plus-square ml-3 add" onClick={handleShow}></i>
            </h1>
         </div>

         <h1 className="text-center">Current Goals</h1>
         <CurrentGoalList />
      </div> 
   );
};

export default Home;