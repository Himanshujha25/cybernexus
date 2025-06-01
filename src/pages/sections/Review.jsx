// Review.jsx
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, Icon, sectionVariants } from "../components/Background"; 

const testimonials = [
  {
    quote: "Himanshu and his team built a powerful full-stack solution for our platform. From a sleek UI to rock-solid backend and strong testing – everything was top-notch.",
    author: "Anjali Mehra",
    role: "Founder, RecipeNest"
  },
  {
    quote: "The CyberNexus team delivered beyond expectations. Their coordination, design precision, and testing approach helped us go live smoothly and confidently.",
    author: "Akash Yadav",
    role: "Product Manager, TaskFlow"
  },
  {
    quote: "This team blends creativity with functionality. Himanshu’s full-stack leadership, and the strong testing by Nitin and Bittu gave our project a professional edge.",
    author: "Neha Sinha",
    role: "Client, SmartCV Project"
  }
];

const Review = () => (
  <section id="testimonials" className="py-24 px-6">
    <div className="container mx-auto max-w-6xl">
      <motion.div 
        className="text-center mb-16" 
        variants={sectionVariants} 
        initial="hidden" 
        whileInView="visible" 
        transition={{ duration: 0.6 }} 
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Say</h2>
        <div className="h-1 w-20 bg-blue-500 mx-auto mb-6 rounded-full" />
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          Feedback from our collaborators, clients, and community members.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent>
                <Icon className="mb-4 text-4xl">“</Icon>
                <p className="text-gray-300 italic mb-6">{testimonial.quote}</p>
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 bg-blue-900 bg-opacity-30 rounded-full flex items-center justify-center text-blue-400 font-bold">
                    {testimonial.author.split(' ').map(name => name[0]).join('')}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-white">{testimonial.author}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Review;
