import React, {useState}  from 'react';
import '../css/home.css';
import Accordion from './Accordian.js'
import pic from './flowers.png';
import fb from '../images/fb.png'
import ig from '../images/ig.png'
import lin from '../images/in.png'
import { Button, Modal } from 'react-bootstrap'
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup'; // for everything
import * as emailjs from 'emailjs-com'

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div class="modalContainer">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          message received
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          your message has been successfully submitted! i usually respond within 1-3 days, weekends included (: 
        </p>
      </Modal.Body>
      </div>
    </Modal>
  );
}

export default function Home() {

  const [modalShow, setModalShow] = React.useState(false);



  const validationSchema = Yup.object({
    name: Yup.string().required("required!!!"),
    email: Yup.string().email('invalid email!!!').required("required!!!"),
    message: Yup.string().required("required!!!")
  })
  const onSubmit = (values, {resetForm}) => {
    console.log('From data', values)
    const templateId = 'template_Dg3tjjcj'
    const userId = 'user_w3c2u4nu8EpxOsOSsunzt'
    sendFeedback(templateId, {message_html: formik.values.message, from_name: formik.values.name, reply_to: formik.values.email}, userId)
    resetForm();
  }

  const sendFeedback = (templateId, variables, userId) => {
    console.log(variables, userId)
    emailjs.send(
      'gmail', templateId,
      variables, userId
      ).then(res => {
        console.log('Email successfully sent!')
        setModalShow(true);
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

  const initialValues = {
      name: '',
      email: '',
      message: ''
  }
  const formik = useFormik({
      initialValues,
      validationSchema,
      onSubmit
  })

    console.log(formik.errors)


    return (
      
      <div className="home animate__animated animate__zoomIn">
        <img className="titlePic" src={pic} alt="Flowers in Chania"/>
        <h1> rashi ghosh</h1>
        <hr></hr>
        <div className="embed">
        <div className="menu">
        
          
          <p className="subtitle">an intense blend of excitement for computer science and a passion for healthcare. strong notes of an appreciation
            for painting and graphic design, and subtle (yet obvious) hints of a love for the outdoors and a soft aesthetic. 
          </p>

          <Accordion title="info">
        <span className="accordion-text">
    
            <span className="label">origin</span> 
            <span className="description">queens, ny</span>

            <span className="label">region</span> 
            <span className="description">arkansas</span>

            <span className="label">age</span> 
            <span className="description">23 (oct 1, 1996)</span>

            <span className="label">story</span> 
            <p>although born in queens, ny, rashi spent most of her life in arkansas. she grew up and graduated high school from harrison,
            and pursued undergrad in fayetteville (university of arkansas). she entered as a biology pre-med student, picking up a religious studies minor
            her second year after being inspired in an honors humanities course. however, going into her senior year, she made the unanticipated switch to
            computer science. her motivation? to revolutionize medicine via a different angle, and to educate and inspire the next generation of
            the digital world</p>

           </span>
      </Accordion>
      <Accordion title="ingredients">
        <span className="accordion-text">coming soon! :) </span>
      </Accordion>
      <Accordion title="nutrition facts">
        <span className="accordion-text">coming soon! :) </span>
      </Accordion>

      <Accordion title="contact">
        <span className="accordion-text"> 
        <form onSubmit={formik.handleSubmit}>
          <input type="text" name="name" onChange={formik.handleChange} value={formik.values.name}/>
          <label htmlFor="name">Name</label> 
          {formik.errors.name && formik.touched.name ? <div className="error">{formik.errors.name}</div> : null}
          <input type="email" name="email" onChange={formik.handleChange} value={formik.values.email}/>
          <label htmlFor="email">Email</label>
          {formik.errors.email && formik.touched.email ? <div className="error">{formik.errors.email}</div> : null}
          <textarea rows="1" name="message" onChange={formik.handleChange} value={formik.values.message}/>
          <label htmlFor="message">Your message</label>
          {formik.errors.message && formik.touched.message ? <div className="error">{formik.errors.message}</div> : null}
          <Button type="submit" className="submit">Submit</Button>
        </form>
        <br></br>
        <span className="label centered"> social media </span>
        <span className="socialMedia centered">
          <a href="https://www.linkedin.com/in/rashi-ghosh-a39ab6171/">
            <img className="socialMediaIcons" src={lin} />
          </a>
          <a href="https://www.instagram.com/oh_my_ghosh_/?hl=en">
            <img className="socialMediaIcons" src={ig} />
          </a>
          <a href="https://www.facebook.com/rashi.x.gh">
            <img className="socialMediaIcons" src={fb} />
          </a>
        </span>
        </span>
      </Accordion>
      </div>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      
        </div>
    )
  }
