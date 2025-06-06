import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'


const FormEmail: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const handleChange = (e: { target: any }) => {
    const { target } = e
    const { name, value } = target

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const serviceId = process.env.GATSBY_EMAILJS_SERVICE_ID
    const templateId = process.env.GATSBY_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.GATSBY_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      console.error('Missing EmailJS environment variables.')
      alert('Email service is not configured properly.')
      return
    }

    setLoading(true)

    emailjs
      .send(
        serviceId,
        templateId,
        {
          name: form.name,
          email: form.email,
          message: form.message
        },
        publicKey
      )
      .then(() => {
        setLoading(false)
        alert('Thank you. I will get back to you soon!')
        setForm({ name: '', email: '', message: '' })
      })
      .catch((error: any) => {
        setLoading(false)
        console.error('Email sending error:', error)
        alert('Oops! Something went wrong. Please try again.')
      })
  }

  return (
    <div className='bg-[#100D25] mx-auto xl:mx-0 w-full p-8 sm:w-[30rem] xl:w-[33rem] 2xl:w-[40rem] rounded-2xl'>
      <p className='text-[#AAA6C3] text-xl mb-2 uppercase'>Get in touch</p>
      <h3 className='text-white text-6xl font-extrabold'>Contact.</h3>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-8'
      >
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Name</span>
          <input
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder="What's your good name?"
            className='bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
          />
        </label>

        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your email</span>
          <input
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder="What's your web address?"
            className='bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
          />
        </label>

        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Message</span>
          <textarea
            rows={7}
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder='What you want to say?'
            className='bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
          />
        </label>

        <button
          type='submit'
          className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  )
}

export default FormEmail
