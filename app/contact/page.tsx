"use client";

import React from 'react';
import PageLayoutV0 from '@/components/page-layout-v0/PageLayoutV0';
import Image from 'next/image';
import { useForm } from "react-hook-form";
import { z } from "zod";


type ContactFormValues = {
  fullName: string;
  email: string;
  company?: string;
  message: string;
};

function Page() {

  const { control, register, handleSubmit } = useForm<ContactFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => console.log(data);


  return (
    <PageLayoutV0>
      <div className="sect-page-header">
        <h1>Contact Us</h1>
        <h2>Get in touch</h2>
        <p >We’d love to hear from you. Whether you have a question about our services, want to discuss a potential partnership, or just want to say hello, feel free to reach out.</p>
      </div>

      <div className="sect reverse">
        <div className="sub-sect">
          <div className="sect-box img-box-1">
            <Image src="/images/contact-us-1.webp" alt="Contact Us" width={1000} height={500} />
          </div>
          <div className="sect-box">
            <h3 className="mini-heading-1">Contact details</h3>
            <p>
              <strong>Email:</strong> 
              <a href="mailto:info@mwungano.com">info@mwungano.com</a>
              <br />

              <strong>Phone:</strong>
              <a href="tel:+27103006000">+27 10 300 6000</a>  
              <a href="tel:+27760908496">+27 76 090 8496</a>  
            </p>
          </div>
        </div>
        <div className="sub-sect">
          <div className="sect-box">
            <h3 className="mini-heading-1">Address (c/o Future Space)</h3>
            <p>61, Katherine Street, Sandton,2146, South Africa</p>            
          </div>
          <div className="sect-box office-map">
              <Image src="/images/map-1.webp" alt="Sample map" width={800} height={600} />
          </div>
        </div>
      </div>

      <div className="sect contact-form">
        <h2>Send us a message</h2>
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: "grid", gap: 12, maxWidth: 600 }}>
          <label>Name<input {...register("fullName", { required: true })} /></label>
          <label>Email<input type="email" {...register("email", { required: true })} /></label>
          <label>Company<input {...register("company")} /></label>
          <label>Message<textarea {...register("message", { required: true })} /></label>                
          <button type="submit">
            <span>Send message</span>
            <svg viewBox="0 0 28 27" fill="none"><path d="M2 1.5H26V25.5" strokeWidth="4" stroke="currentColor"></path> <path d="M24.365 3.13128L2 25.5" strokeWidth="4" strokeLinejoin="round" stroke="currentColor"></path></svg>
          </button>
      </form>
      </div>

    </PageLayoutV0>
  )
}

export default Page;