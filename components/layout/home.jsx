"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FeaturedCourse = ({ title, description, category, instructor }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    className="h-full">
    <Card className="h-full flex flex-col">
      <CardHeader>
        <Badge className="w-fit mb-2">{category}</Badge>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <p className="text-sm font-medium">Instructor: {instructor}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const LearningModule = ({ title, posts }) => (
  <Accordion type="single" collapsible className="w-full">
    <AccordionItem value={title}>
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent>
        <ul className="list-disc pl-6">
          {posts.map((post, index) => (
            <li key={index} className="mb-2">
              <a href={post.link} className="text-blue-500 hover:underline">
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

const featuredCoursesData = [
  {
    title: "Advanced Machine Learning",
    description:
      "Dive deep into cutting-edge ML algorithms and their applications.",
    category: "Data Science",
    instructor: "Dr. Emily Chen",
  },
  {
    title: "Full-Stack JavaScript",
    description:
      "Master the entire JavaScript ecosystem, from frontend to backend.",
    category: "Web Dev",
    instructor: "Alex Rodriguez",
  },
  {
    title: "Cybersecurity Fundamentals",
    description: "Learn to protect digital assets and secure networks.",
    category: "Security",
    instructor: "Samantha Patel",
  },
];

const learningModulesData = [
  {
    title: "Python Programming",
    posts: [
      { title: "Introduction to Python", link: "/python/intro" },
      { title: "Python Data Structures", link: "/python/data-structures" },
      { title: "Object-Oriented Programming in Python", link: "/python/oop" },
    ],
  },
  {
    title: "Web Development",
    posts: [
      { title: "HTML Basics", link: "/web/html" },
      { title: "CSS Fundamentals", link: "/web/css" },
      { title: "JavaScript Essentials", link: "/web/javascript" },
    ],
  },
  {
    title: "Data Science",
    posts: [
      { title: "Introduction to Data Analysis", link: "/data-science/intro" },
      { title: "Statistical Methods", link: "/data-science/statistics" },
      {
        title: "Machine Learning Fundamentals",
        link: "/data-science/ml-basics",
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground flex flex-col">
      <main className="flex-grow container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Section 1: Welcome */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Welcome to DevsPlug</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover cutting-edge technology courses and boost your career with
            industry-leading experts.
          </p>
          <Button size="lg">Get Started</Button>
        </motion.section>

        {/* Section 2: Featured Courses */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Featured Courses</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCoursesData.map((course, index) => (
              <FeaturedCourse key={index} {...course} />
            ))}
          </div>
        </section>

        {/* Section 3: Learning Modules */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Learning Modules</h2>
          <div className="space-y-4">
            {learningModulesData.map((module, index) => (
              <LearningModule key={index} {...module} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
