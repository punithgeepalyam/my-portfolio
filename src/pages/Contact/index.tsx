import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { ContactContainer, Form, Input, TextArea, SubmitButton, Message } from './style';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!form.current) return;

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID!,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
    )
    .then(() => {
      setMessage({ text: 'Message sent successfully!', type: 'success' });
      form.current?.reset();
    }, (error) => {
      setMessage({ text: `Failed to send message: ${error.text}`, type: 'error' });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <ContactContainer className="container" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Get In Touch</h2>
        <p>Have a project in mind or want to collaborate? Feel free to reach out!</p>
        
        <Form ref={form} onSubmit={sendEmail}>
          <Input 
            type="text" 
            name="user_name" 
            placeholder="Your Name" 
            required 
          />
          <Input 
            type="email" 
            name="user_email" 
            placeholder="Your Email" 
            required 
          />
          <Input 
            type="text" 
            name="subject" 
            placeholder="Subject" 
            required 
          />
          <TextArea 
            name="message" 
            placeholder="Your Message" 
            required 
            rows={5} 
          />
          
          <SubmitButton 
            type="submit" 
            disabled={isSubmitting}
            as={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>
          
          {message.text && (
            <Message type={message.type}>
              {message.text}
            </Message>
          )}
        </Form>
      </motion.div>
    </ContactContainer>
  );
};

export default Contact;