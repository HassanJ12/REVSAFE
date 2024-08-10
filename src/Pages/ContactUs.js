import React, { useState } from 'react';
import { Input, Textarea, Checkbox, Button } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug, faBugs, faDollarSign, faNewspaper, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await fetch('http://127.0.0.1:5000/submit_contact_form', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
          });
    
          if (response.ok) {
            const data = await response.json();
            console.log(data); // Log the response from the server
            // Optionally, you can reset the form fields after successful submission
            setName('');
            setEmail('');
            setMessage('');
            alert("Sumbitted Successfully")
          } else {
            console.error('Failed to submit form:', response.statusText);
          }
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };


  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        <div className="flex justify-center">
          <div className="text-center md:max-w-xl lg:max-w-3xl">
            <h2 className="mb-12 px-6 text-gray-200 text-4xl font-bold">Contact us</h2>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
             <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <Input
                  type="text"
                  label='Name'
                  className='focus:ring-transparent'
                  color="white"
                  placeholder="Name"
                  outline={false}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <Input
                  type="email"
                  label='Email'
                  className='focus:ring-transparent'
                  color="white"
                  placeholder="Email"
                  outline={false}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <Textarea
                  label='Message'
                  color="red"
                  className='focus:ring-transparent text-white focus:border-white'
                  outline={false}
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <Button type="submit" size='lg' fullWidth color="cyan" ripple="light">
                Send
              </Button>
            </form>
          </div>
        


          <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
  <div className="flex flex-wrap">
    {/* Add your additional contact info here */}
    {/* Example code for one contact info item */}
    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
      <div className="flex items-start">
        <div className="shrink-0">
          <div className="inline-block rounded-md bg-gray-800 p-4 text-gray-300">
            <FontAwesomeIcon icon={faPhone}/>
          </div>
        </div>
        <div className="ml-6 grow">
          <p className="mb-2 font-bold text-white">
            Team RevSafe
          </p>
          <p className="text-gray-400">
            info@revsafe.com
          </p>
          <p className="text-gray-400">
            03433021371
          </p>
        </div>
      </div>
    </div>
    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
      <div className="flex items-start">
        <div className="shrink-0">
          <div className="inline-block rounded-md bg-gray-800 p-4 text-gray-300">
            <FontAwesomeIcon icon={faNewspaper}/>
          </div>
        </div>
        <div className="ml-6 grow">
          <p className="mb-2 font-bold text-white">
            Press
          </p>
          <p className="text-gray-400">
            press@revsafe.com
          </p>
          <p className="text-gray-400">
            03192013252
          </p>
        </div>
      </div>
    </div>
    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
      <div className="flex items-start">
        <div className="shrink-0">
          <div className="inline-block rounded-md bg-gray-800 p-4 text-gray-300">
            <FontAwesomeIcon icon={faBug}/>
          </div>
        </div>
        <div className="ml-6 grow">
          <p className="mb-2 font-bold text-white">
            Bug Reports
          </p>
          <p className="text-gray-400">
            support@revsafe.com
          </p>
          <p className="text-gray-400">
            03443441168
          </p>
        </div>
      </div>
    </div>
    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
      <div className="flex items-start">
        <div className="shrink-0">
          <div className="inline-block rounded-md bg-gray-800 p-4 text-gray-300">
            <FontAwesomeIcon icon={faDollarSign}/>
          </div>
        </div>
        <div className="ml-6 grow">
          <p className="mb-2 font-bold text-white">
            Sales Question
          </p>
          <p className="text-gray-400">
            sales@revsafe.com
          </p>
          <p className="text-gray-400">
            03313638594
          </p>
        </div>
      </div>
    </div>
    {/* Add more contact info items here if needed */}
  </div>
</div>




        </div>
      </section>
    </div>
  );
};

export default ContactForm;
