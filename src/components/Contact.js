import React from 'react'
import '../css/about.css';
import '../css/master.css';
import '../css/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faLinkedin, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { withTheme } from 'styled-components'
import {ReactComponent as Diamond } from '../css/diamond.svg'
import { animateScroll as scroll } from 'react-scroll'
import { useFormik } from 'formik';
import * as Yup from 'yup'; // for everything
import * as emailjs from 'emailjs-com'
import { Button, Modal } from 'react-bootstrap'

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


const Contact = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const validationSchema = Yup.object({
    name: Yup.string().required("sorry, i need to know your name!"),
    email: Yup.string().email('invalid email!!!').required("oops, you forgot ur email"),
    message: Yup.string().required("a message is required!")
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
      <div className="home-section">
        <div className="diamond-header">
          <Diamond className="diamond2"></Diamond>
          <Diamond className="diamond2"></Diamond>
          <Diamond className="diamond2"></Diamond>
        </div>
        <h2>contact</h2>
        <div className="center">
        <p>questions? comments? pls to reach out! (:</p>
        </div>      
          <br/>
        <form onSubmit={formik.handleSubmit}>
          <input type="text" name="name" onChange={formik.handleChange} value={formik.values.name}/>
          <label htmlFor="name">name</label> 
          {formik.errors.name && formik.touched.name ? <div className="error">{formik.errors.name}</div> : null}

          <input type="email" name="email" onChange={formik.handleChange} value={formik.values.email}/>
          <label htmlFor="email">email</label>
          {formik.errors.email && formik.touched.email ? <div className="error">{formik.errors.email}</div> : null}

          <textarea rows="3" name="message" onChange={formik.handleChange} value={formik.values.message}/>
          <label htmlFor="message">your message</label>
          {formik.errors.message && formik.touched.message ? <div className="error">{formik.errors.message}</div> : null}
          <Button type="submit" className="submit">send</Button>
        </form>

        <hr />
        <div class="center">
          <h4>connect with me</h4>
        </div>

        <div class="social-media-area">

        <a href="https://www.linkedin.com/in/rashi-ghosh-a39ab6171/">
        <FontAwesomeIcon
                color={props.theme.accent}
                icon={faLinkedin} 
                size='lg'
                className="social-media"
              />
        </a>

        <a href="https://www.facebook.com/rashi.x.gh">
        <FontAwesomeIcon
                color={props.theme.accent}
                icon={faFacebookSquare} 
                size='lg'
                className="social-media"
              />
        </a>

        <a href="https://www.instagram.com/oh_my_ghosh_/?hl=en">
        <FontAwesomeIcon
                color={props.theme.accent}
                icon={faInstagramSquare} 
                size='lg'
                className="social-media"
              />
        </a>

        </div>

        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      </div>
    )
  }

  const ContactPage = withTheme(Contact);
  export default ContactPage;
