"use client";

import React from "react";
import { motion } from "framer-motion";
import Card from "./ui/Card";
import Badge from "./ui/Badge";
import { GraduationCap, MapPin, Calendar, Globe } from "lucide-react";
import united from '../assets/united.jpeg'
import surya from '../assets/surya.jpg'
import techspire from '../assets/techspire.jpeg'

const education = [
  {
    degree: "BSC.IT",
    school: "Techspire College",
    location: "New Baneshwor, Kathmandu",
    period: "2025-Present",
    logo: techspire,
  },
  {
    degree: "+2 Science",
    school: "United Academy",
    location: "Kumaripati, laltipur",
    period: "2023 - 2025",
    logo: united,
    gpa: "3.35/4.0",
  },
  {
    degree: "SEE",
    school: "Surya Secondary Boarding School",
    location: "Khandbari, Sankhuwasabha",
    period: "2010 - 2023",
    gpa: "3.50",
    logo: surya,
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const Education = () => {
  return (
    <section id="education" className="py-12">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-glow">
            Education
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-primary transition-colors duration-300" />
        </div>

        <div className="flex items-center justify-center mb-10">
          <div className="flex items-center">
            <div className="p-2 bg-primary rounded-full mr-3">
              <GraduationCap className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-semibold">{/* Title uses theme */}
              Academic Background
            </h3>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-10">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={itemVariants}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-2 border-card z-10 hidden md:block" />

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                    <Card className="p-5 gradient-border bg-card card-hover shadow-sm rounded-lg border border-border">
                      <div className="mb-4">
                        {/* Header with Logo and Degree */}
                        <div className="flex items-start gap-3 mb-3">
                          {/* Logo Container */}
                          <div className="flex-shrink-0">
                            {edu.logo ? (
                              <img
                                src={edu.logo}
                                alt={`${edu.school} logo`}
                                className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-lg bg-card p-1 border border-border shadow-sm relative sm:mt-0 mt-1"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                                }}
                              />
                            ) : null}
                            {/* Fallback Icon */}
                            <div
                              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center border border-border ${edu.logo ? 'hidden' : 'flex'}`}
                              style={{ display: edu.logo ? 'none' : 'flex' }}
                            >
                              <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                            </div>
                          </div>

                          {/* Degree and School Info */}
                          <div className="flex-1 min-w-0">
                            <h4 className="text-lg sm:text-xl font-bold sm:mb-1 break-words">
                              {edu.degree}
                            </h4>
                            <div className="text-sm sm:text-md font-medium mb-2 break-words">
                              <span>{edu.school}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center text-sm mb-2 gap-1 sm:gap-3">
                          <div className="flex items-center">
                            <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
                            <span className="break-words">{edu.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1 flex-shrink-0" />
                            <span>{edu.period}</span>
                          </div>
                        </div>

                        {(edu.gpa || edu.honors) && (
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            {edu.gpa && (
                              <Badge className="text-xs">
                                GPA: {edu.gpa}
                              </Badge>
                            )}
                            {edu.honors && (
                              <Badge variant="outline" className="text-xs">
                                {edu.honors}
                              </Badge>
                            )}
                          </div>
                        )}
                      </div>

                      {edu.description && (
                        <p className="mb-5 text-sm leading-relaxed">
                          {edu.description}
                        </p>
                      )}

                      {edu.coursework && (
                        <div className="mb-5">
                          <h5 className="font-semibold mb-2 flex items-center text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                            Relevant Coursework
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map((course, courseIndex) => (
                              <Badge
                                key={courseIndex}
                                variant="secondary"
                                className="text-xs hover:scale-105 cursor-pointer"
                              >
                                {course}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {edu.projects && (
                        <div>
                          <h5 className="font-semibold mb-2 flex items-center text-sm">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                            Notable Projects
                          </h5>
                          <ul className="space-y-1.5">
                            {edu.projects.map((project, projIndex) => (
                              <li key={projIndex} className="text-sm flex items-start group">
                                <Globe className="w-3 h-3 mr-2 mt-1 text-gray-500 flex-shrink-0 group-hover:text-primary" />
                                <span className="group-hover:text-foreground break-words">
                                  {project}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </Card>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
