---
layout: syllabus_specific
title: COSC A319 Internet Technologies<br/>Syllabus (Fall 2019)
syllabus:
  semester: 2019 Fall
  policies_year: 2019-319
  bulletin_link: http://2019bulletin.loyno.edu/undergraduate/computer-science#cosc-a319
  bulletin: |
    This course explores the concepts and technologies that are used in modern Internet systems, and provides the necessary skills and knowledge of software technologies needed for creating Internet/Web services. It is designed to expose students to web content presentation and generation technologies, programming, and building multi-tiered client/server web applications.
  description: |
    This course introduces students to the world of internet and networked systems development. Concepts related to distributed systems development; concurrent and asynchronous processing; process communications and network transport protocols; distributed application architecture and design; deployment, monitoring and debugging of internet-based systems; and web of things development will be covered.
  prerequisites: |
    One of:

    * [COSC A212 Introduction to Programming II](http://2017bulletin.loyno.edu/undergraduate/computer-science#cosc-a212) and Sophomore standing
    * Instructor Approval.

    To be successful in this course, students are expected to have practical experience building software, and in particular, should be comfortable working with data structures, designing classes, and writing software modules.
  learning_objectives: |
    Students will experience the design and construction of internet-based systems through hands-on interaction with course material. The course will provide students with a basis of theory upon which to reflect upon experiences: designing and building server-side systems that must serve multiple client system types; designing and building several types of client systems that operate and interact with the server system concurrently and asynchronously; debugging process timing and network failure issues; and building systems on networked physical devices; understanding the network designs and protocols that enable the modern internet.
  learning_outcomes: |
    Upon completion of this course, students should be able to:

      * Understand and explain the theoretical approaches to dealing with concurrency in software
      * Explain the types of problems that can occur in software when processes operate concurrently
      * Understand and explain the theoretical approaches to building software systems with components that operate asynchronously
      * Understand and explain how messages travel between systems on the internet, including the various protocols used and what information they require and provide
      * Understand what services are offered by commercial cloud providers, and how those services fit into internet-based distributed software architectures
      * Build and deploy server-side API software capable of serving multiple client software types
      * Build and deploy web-based client software that communicates with a server-side API
      * Build and deploy a software client on a mobile device that communicates with a server-side API
      * Build, configure and deploy an internet-of-things or web-of-things device that communicates with a server-side API
      * Reflect on the unique requirements of internet-based software
      * Reflect on the collection of technologies that enable the modern internet
      * Know where to look for more information on the topics covered in this course
  textbooks:
    -
      icon: 📗
      title: Building the Web of Things, 1st Edition
      authors: Dominique Guinard and Vlad Trifa
      publisher: Manning Publications
      pub_date: 2016
      isbn: 978-16-172926-8-2
      textbook_message: |
        This book is available for sale online for about $35.
        
        Supplies for IoT projects will be provided for use during the course. If you treat the supplies with care and return them at the end of the course, you will not need to buy anything.
        
        If you wish to build something to keep after the course is complete, or if you damage university equipment while it is under your care, you will need to purchase those items yourself. Please consult with the instructor about what to buy.
      isbn_url: https://isbnsearch.org/isbn/9781617292682
      companion_site: https://webofthings.org/book/
    -
      icon: 📙
      title: Eloquent Javascript, 3rd Edition
      authors: Marijn Haverbeke
      publisher: Marijn Haverbeke
      pub_date: 2018
      isbn: 978-15-932795-0-9
      textbook_message: |
        **This version of the book is available for free online. You do not need to buy this book. In addition, the online version is interactive, allowing you to try out code and explore the output while you read.**

        A print version is available from No Starch Press. If you would like to purchase the book, you can get there from the book website.
      isbn_url: https://isbnsearch.org/isbn/9781593279509
      companion_site: https://eloquentjavascript.net/
    -
      icon: 📘
      title: "The Illustrated Network: How TCP/IP Works in a Modern Network, 2nd Edition"
      authors: Walter Goralski
      publisher: Morgan Kaufmann/Elsevier
      pub_date: 2017
      isbn: 978-0-12-811027-0
      textbook_message: |
        This book is available for sale online for between $70 and $90.
      isbn_url: https://isbnsearch.org/isbn/9780128110270
  textbooks_optional:
    -
      icon: 📕
      title: Designing Distributed Systems, 1st Edition
      authors: Brendan Burns
      publisher: O'Reilly Media
      pub_date: 2018
      isbn: 978-14-919836-4-5
      textbook_message: |
        This book will be a good reference for the project, particularly if you choose to use a container-based architecture to build your API and web components.

        At least one copy of this book will also be on reserve in Monroe Library for the duration of the semester.
      isbn_url: https://isbnsearch.org/isbn/9781491983645
      companion_site: http://shop.oreilly.com/product/0636920072768.do
    -
      icon: 📔
      title: Distributed Systems, 3rd Edition
      authors: Maarten van Steen and Andrew S. Tanenbaum
      publisher: Maarten van Steen
      pub_date: 2017
      isbn: 978-15-430573-8-6 (print), 978-90-815406-2-9 (digital)
      textbook_message: |
        **This book is available free online, and will only be used as reference. You do not need to purchase a printed copy of this textbook.**
      isbn_url: https://isbnsearch.org/isbn/9781543057386
      companion_site: https://www.distributed-systems.net/index.php/books/distributed-systems-3rd-edition-2017/
  project:
    title: Project
    icon: 🏗
    description: |
      During this course, you will be building a multi-component internet system using some of the concepts learned through lecture and demo.

      ### Project Components

      The project entails creating several components:

      * a **web API server** that can provide data and back-end services for client applications
      * a **browser-based client application** (commonly called a "web app") for interacting with the server's back-end services via a computer through a website
      * a **mobile application** (such as you might find in an app store like Apple's or Google Play) for interacting with the server's back-end services via a mobile phone
      * a **web-of-things client hardware device** for displaying (and possibly minimally interacting with) the server's back-end services, using a Raspberry Pi 3B+ system board

      ### What to Expect

      Several class periods during the semester are set aside for working on the project during class. These days will help you to get started building out the required functionality, but likely will not be enough to complete the project. **Please expect to dedicate time outside of class to working on the project on your own.**

      ### Tools and Equipment
      
      #### JavaScript
      
      All programming for the project will be done using JavaScript. The required "textbook" *Eloquent JavaScript, 3rd Ed.* (see [Textbooks](#textbooks) above) is a great interactive online resource that allows you to play with the code examples from within the browser to get a feel for how the code works. It teaches modern JavaScript coding style and syntax, which is what we'll use during the majority of this course.

      JavaScript was originally meant for the web browser. However, it is now used often in various non-browser ways. For this project, we'll use the following JavaScript based tools:

      * API:
        * [Node.js ("LTS" v10.x)](https://nodejs.org/en/)
        * [nvm (on macOS or Linux)](https://github.com/nvm-sh/nvm) or [nvm-windows (on Windows)](https://github.com/coreybutler/nvm-windows)
        * [NPM](https://docs.npmjs.com/cli/npm) and/or [Yarn](https://yarnpkg.com/en/)
      * Web App:
        * [React.js](https://reactjs.org/)
        * [Create React App](https://facebook.github.io/create-react-app/)
      * Mobile App: [React Native](https://facebook.github.io/react-native/)
      * Web of Things Client: [onoff](https://www.npmjs.com/package/onoff)

      #### Web of Things Client Equipment
      
      Equipment for the web of things client will be provided by the instructor. A few cautions about university-provided equipment:
      
      * If you break the equipment, you'll need to pay for it. Please take care of it.
      * If you fail to return the equipment, you'll need to pay for it. Please return it during the final exam period.
      * If you wish to build something during the course that you can keep and use, please consult with the instructor to find out what you need to purchase.

      #### Hardware Design Tools
      
      A helpful tool for hardware design is the free [Fritzing App](https://fritzing.org/home/), which provides a virtual design lab with ready-made hardware components. You may wish to install and use this to create your hardware design prior to implementing it.

      ### Project Poster for Extra Credit

      If you personalize and complete your multi-component project, you also have an opportunity for 500 points of extra credit if you create a poster (using the provided template) explaining the system, its design and operation, and the process used to build and test it.
      
      Please contact the instructor if you wish to create a poster.
  reflection:
    title: Reflection Journals
    icon: 📓
    description: |
      ### Weekly Journal Entries
      
      During this course, you will also be keeping **a journal with at least weekly reflections on your experiences**, including but not limited to the following topics:
      
      * content covered in lectures or textbooks
      * your project build or the tools used to build it
      * your learning process
      * your time management / procrastination practices
      * your questions for further learning after the class
      * connections to other courses or course material you've made
      * "Ah ha!" moments you've had during this course
      * how the experiences and material in this course relate to your degree program
      * how the experiences and material in this course might be relevant to your future career

      **Journal entries will be due at the end of the day every Friday** (i.e., just before midnight Central time), with the exception of the first entry, which you'll do during the first class period.

      ### Reflection Essay

      At the end of the semester, you will be required to write **a short (5-10 pages) personal reflection essay** examining the following questions:

      * What activities did you perform during this course?
      * What were your expectations at the beginning of the course? How did your expectations and attitudes change throughout the semester?
      * Describe a moment of clarity that occurred for you during this course? What made the concept clear for you? How did you gain a better understanding of it?
      * Did the project in this course make your understanding of software development and computer science clearer? Your understanding of the Internet and Internet-based applications? How?
      * What did you learn about yourself during this experience?
      * What did you learn about others during this experience?
      * How can you use what you learned through this experience in your future coursework and in your future career? Do you feel better prepared for your career path after this experience? Why?
      * What topics will you continue exploring after the course? Why does each interest you? How will you go about exploring each of those concepts?

      This paper is **due on Thursday, December 5, 2019, at 4:55 PM** just before our last regular class period.

      ### How you will be graded

      **Content.** Your paper must address all the above questions. Reflection essays may explore other topics related to these questions, but if these questions are not addressed, you will lose points. Journal entries must address at least one of the questions, and should not address the same question each week.

      **Depth of Personal Reflection.** Your paper and journal entries must show depth of reflection. Learning often means struggling not only with new concepts and ideas, but also with your own habits and perceptions. Spend enough time thinking about this and reflecting on these questions that you are able to feel that struggle.
      
      **Correctness.** In addition to content, you will be graded on the correctness of your writing (spelling, grammar, punctuation, word choice, etc.), and on the readability and formatting of your submitted paper (font choice, margins, line length, spacing, etc.). Please be careful in your writing and be sure to proofread before submitting.
  final:
    title: Exams
    icon: ✅
    description: |
      There will be two exams in this course, each testing your understanding of the material covered in the prior half of the semester:

      * A **MIDTERM EXAM** on **Thursday, October 10, 2019, 4:55 &mdash; 5:45 PM** (followed by presentation of assignments for the 3 following project days)
      * A **FINAL EXAM** on **Thursday, December 12, 2019, 4:30 &mdash; 5:30 PM** (followed by final project demos from 5:30 &mdash; 6:30 PM)

      **Please be on time, as exams will start promptly at the beginning of the timeframe listed.**
  grades:
    activities:
      - 🕟 Participation
      - 🏗 Project 
      - 📓 Reflections Journal &amp; Paper
      - ✅ Exams
    total_points: 8000
    table:
      -
        activity: 🕟 Participation
        percent: 8.75
        possible_points: 700
        rows:
          -
            grade: Class Participation
            points: 20
            quantity: 30
          -
            grade: Final Participation
            points: 100
            quantity: 1
          - 
            grade: "Extra Credit:<br/>Attend DevFest 10/05"
            points: "+200"
            quantity: 1
      -
        activity: 🏗 Project
        percent: 42.5
        possible_points: 1200
        rows:
          -
            grade: "PROJECT DAY:<br/>Web Client"
            points: 250
            quantity: 2
          -
            grade: "PROJECT DAY:<br/>Server API"
            points: 500
            quantity: 2
          -
            grade: "PROJECT DAY:<br/>Mobile Client"
            points: 250
            quantity: 2
          -
            grade: "PROJECT DAY:<br/>IoT/WoT Client"
            points: 400
            quantity: 1
          -
            grade: Final Project Demo
            points: 1000
            quantity: 1
          - 
            grade: "Extra Credit:<br/>Project Poster"
            points: "+500"
            quantity: 1
      -
        activity: 📓 Reflections
        percent: 11.25
        possible_points: 900
        rows:
          -
            grade: Weekly Reflection Journal
            points: 25
            quantity: 16
          -
            grade: Reflection Paper
            points: 500
            quantity: 1
      -
        activity: 📝 Exams
        percent: 37.5
        possible_points: 3000
        rows:
          -
            grade: Midterm Exam
            points: 1000
            quantity: 1
          -
            grade: Final Exam
            points: 2000
            quantity: 1
  schedule:
    -
      month: Aug
      weeks:
        -
          week_num: 1
          sessions:
            -
              session_num: 1
              day: Tuesday
              date: 08/20
              topics: |
                📃 Course Intro

                💻 Language &amp; Tools Intro
              activities: |
                👋 Introductions
                
                📃 Syllabus Review

                💭 Lecture
              readings: |
                If you haven't already:

                * [Create a GitHub Account](https://github.com)
                * [Get the GitHub Student Developer Pack](https://education.github.com/pack)
                * [Create an AWS Account](https://aws.amazon.com/)
                * [Sign up for AWS Educate](https://aws.amazon.com/education/awseducate/)
                * 📙 [EJS: Intro - Ch 7](https://eloquentjavascript.net/)
                
                (Note: EJS programming concepts should already be well-understood; material should be review except for new syntax)
            -
              session_num: 2
              day: Thursday
              date: 08/22
              topics: |
                💭 Intro to the Internet

                💭 Intro to the Web of Things
              activities: |
                💭 Lecture
              readings: |
                📗 BWT: pp.1-58 (Ch 1 - 2)
                
                📙 [EJS: Intro. - Ch. 7](https://eloquentjavascript.net/) (review)
        -
          week_num: 2
          sessions:
            -
              session_num: 3
              day: Tuesday
              date: 08/27
              topics: |
                💭 Intro to JavaScript
              activities: |
                💭 Lecture

                💻 Demo
              readings: |
                📙 [EJS: Intro. - Ch 7](https://eloquentjavascript.net/) (review)
            -
              session_num: 4
              day: Thursday
              date: 08/29
              topics: |
                💭 JavaScript Asynchrony/Concurrency
                
                💭 JavaScript Debugging
              activities: |
                💭 Lecture

                💻 Demo
              readings: |
                📙 [EJS: Ch 8 - 11](https://eloquentjavascript.net/)
    -
      month: Sep
      weeks:
        -
          week_num: 3
          sessions:
            -
              session_num: 5
              day: Tuesday
              date: 09/03
              topics: |
                💭 JavaScript in the Browser
              activities: |
                💭 Lecture

                💻 Demo
              readings: |
                📙 [EJS: Ch 13 - 15, Ch 18](https://eloquentjavascript.net/)
            -
              session_num: 6
              day: Thursday
              date: 09/05
              topics: |
                💭 JavaScript Internals
                
                💭 JavaScript Debugging

                💭 Containerization
              activities: |
                💭 Lecture

                💻 Demo
              readings: |
                🔗 [JavaScript Internals: Under the Hood of a Browser](https://medium.com/better-programming/javascript-internals-under-the-hood-of-a-browser-f357378cc922)
                
                🔗 [MDN JavaScript Concurrency Model & Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
                
                🔗 [JavaScript Callback Concurrency (Pre-promises)](https://blog.avenuecode.com/understanding-the-javascript-concurrency-model)
                
                ⏯ [Asynchrony: Under the Hood (Video - 25min)](https://youtu.be/SrNQS8J67zc)
                
                💻 [Loupe: Exploratory tool to understand JS execution ordering](http://bit.ly/js-loupe)
                
                🔗 [Intro to VMs, Containers & Docker](https://www.freecodecamp.org/news/a-beginner-friendly-introduction-to-containers-vms-and-docker-79a9e3e119b/)
        -
          week_num: 4
          sessions:
            -
              session_num: 7
              day: Tuesday
              date: 09/10
              topics: |
                💭 Intro to React
              activities: |
                💭 Lecture

                💻 Demo
                
                🏗 Project (Intro/Start)
              readings: |
                🔗 [create-react-app Get Started](https://facebook.github.io/create-react-app/docs/getting-started)

                🔗 [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
            -
              session_num: 8
              day: Thursday
              date: 09/12
              topics: |
                🏗 PROJECT DAY: Web Client

                *(Instructor out of town)*
              activities: |
                🏗 Project
              readings: |
        -
          week_num: 5
          sessions:
            -
              session_num: 9
              day: Tuesday
              date: 09/17
              topics: |
                💭 Intro to Node.js
              activities: |
                💭 Lecture

                💻 Demo
              readings: |
                📗 BWT: pp. 59 - 82 (Ch 3)

                📙 [EJS: Ch 20](https://eloquentjavascript.net/)
            -
              session_num: 10
              day: Thursday
              date: 09/19
              topics: |
                💭 Web of Things APIs
              activities: |
                💭 Lecture
              readings: |
                📗 BWT: pp. 109 - 174 (Ch 5 - 6)
        -
          week_num: 6
          sessions:
            -
              session_num: 11
              day: Tuesday
              date: 09/24
              topics: |
                🏗 PROJECT DAY: Server API
              activities: |
                🏗 Project
              readings: |
            -
              session_num: 12
              day: Thursday
              date: 09/26
              topics: |
                💭 Intro to TCP/IP Stack
              activities: |
                💭 Lecture
              readings: |
                📘 TIN: pp. 3 - 69 (Ch 1 - 2)
    -
      month: Oct
      weeks:
        -
          week_num: 7
          sessions:
            -
              session_num: 13
              day: Tuesday
              date: 10/01
              topics: |
                💭 Intro to React Native
              activities: |
                💭 Lecture

                💻 Demo
              readings: |
                🔗 [React Native: Getting Started](https://facebook.github.io/react-native/docs/getting-started.html)

                🔗 [Building a Minimalist Weather App with React Native and Expo](https://blog.expo.io/building-a-minimalist-weather-app-with-react-native-and-expo-fe7066e02c09)
            -
              session_num: 14
              day: Thursday
              date: 10/03
              topics: |
                🏗 PROJECT DAY: Mobile Client
              activities: |
                🏗 Project
              readings: |
            -
              session_num: "-"
              day: Saturday
              date: 10/05
              topics: |
                👨🏻‍🏫 Instructor speaking
                
                Attend for 200 points extra credit
              activities: |
                [DevFest New Orleans 2019](https://devfest2019.gdgneworleans.com/)

                8 AM &mdash; 5 PM<br/>Miller Hall Rm 114
              readings: |
                [Register Now](https://forms.gle/GNihqAGiK8aWgMZb7)

                Registration is $10 &mdash; $25 (more the later you register), scholarships available
        -
          week_num: 8
          sessions:
            -
              session_num: 15
              day: Tuesday
              date: 10/08
              topics: |
                💭 Embedded Devices

                💭 IoT Integration Patterns
              activities: |
                💭 Lecture
              readings: |
                📗 BWT: pp. 83 - 108 (Ch 4)

                📗 BWT: pp. 175 - 213 (Ch 7)
            -
              session_num: 16
              day: Thursday
              date: 10/10
              topics: |
                ✅ MIDTERM EXAM
              activities: |
                ✅ Exam
              readings: |
        -
          week_num: 9
          sessions:
            -
              session_num: "-"
              day: Tuesday
              date: 10/15
              topics: |
                NO CLASS - FALL BREAK
              activities: |
              readings: |
            -
              session_num: 17
              day: Thursday
              date: 10/17
              topics: |
                🏗 PROJECT DAY: Server API

                *(Instructor out of town)*
              activities: |
                🏗 Project
              readings: |
        -
          week_num: 10
          sessions:
            -
              session_num: 18
              day: Tuesday
              date: 10/22
              topics: |
                🏗 PROJECT DAY: Web Client

                *(Instructor out of town)*
              activities: |
                🏗 Project
              readings: |
            -
              session_num: 19
              day: Thursday
              date: 10/24
              topics: |
                🏗 PROJECT DAY: Mobile Client

                *(Instructor out of town)*
              activities: |
                🏗 Project
              readings: |
        -
          week_num: 11
          sessions:
            -
              session_num: 20
              day: Tuesday
              date: 10/29
              topics: |
                💭 Network Link Technologies

                💭 Packet Optical Networks

                💭 Forward Error Correction (FEC)
              activities: |
                💭 Lecture
              readings: |
                📘 TIN: pp. 71 - 135 (Ch 3 - 4)
            -
              session_num: 21
              day: Thursday
              date: 10/31
              topics: |
                💭 IPv4 & IPv6 Addressing

                💭 Address Resolution Protocol (ARP)

                🎃 *Happy Halloween!* 👻
              activities: |
                💭 Lecture
              readings: |
                📘 TIN: pp. 139 - 195 (Ch 5 - 6)
    -
      month: Nov
      weeks:
        -
          week_num: 12
          sessions:
            -
              session_num: 22
              day: Tuesday
              date: 11/05
              topics: |
                💭 IPv4 & IPv6 Headers

                💭 Internet Control Message Protocol (ICMP)
              activities: |
                💭 Lecture
              readings: |
                📘 TIN: pp. 197 - 246 (Ch 7 - 8)
            -
              session_num: 23
              day: Thursday
              date: 11/07
              topics: |
                💭 Routing

                💭 IP Forwarding
              activities: |
                💭 Lecture
              readings: |
                📘 TIN: pp. 247 - 288 (Ch 9 - 10)
        -
          week_num: 13
          sessions:
            -
              session_num: 24
              day: Tuesday
              date: 11/12
              topics: |
                💭 User Datagram Protocol (UDP)

                💭 Transmission Control Protocol (TCP)
              activities: |
                💭 Lecture
              readings: |
                📘 TIN: pp. 289 - 330 (Ch 11 - 12)
            -
              session_num: 25
              day: Thursday
              date: 11/14
              topics: |
                💭 IoT Discovery Patterns

                💭 IoT Sharing Patterns

                🏗 PROJECT DAY: IoT/WoT Client
              activities: |
                🏗 Project
              readings: |
                📗 BWT: pp. 109 - 174 (Ch 8 - 9)
        -
          week_num: 14
          sessions:
            -
              session_num: 26
              day: Tuesday
              date: 11/19
              topics: |
                💭 Multiplexing & Sockets

                💭 Dynamic Host Configuration Protocol (DHCP)
              activities: |
                💭 Lecture
              readings: |
                📘 TIN: pp. 331 - 348 (Ch 13)

                📘 TIN: pp. 563 - 586 (Ch 22)
            -
              session_num: 27
              day: Thursday
              date: 11/21
              topics: |
                💭 The Domain Name System (DNS)

                💭 File Transfer Protocol (FTP)
              activities: |
                💭 Lecture
              readings: |
                📘 TIN: pp. 587 - 636 (Ch 23 - 24)
        -
          week_num: 15
          sessions:
            -
              session_num: 28
              day: Tuesday
              date: 11/26
              topics: |
                💭 Simple Mail Transfer Protocol (SMTP) & Email

                💭 Hypertext Transfer Protocol (HTTP)
              activities: |
                💭 Lecture
              readings: |
                📘 TIN: pp. 637 - 684 (Ch 25 - 26)
            -
              session_num: "-"
              day: Thursday
              date: 11/28
              topics: |
                **NO CLASS**

                🦃 *Happy Thanksgiving!*
              activities: |
              readings: |
    -
      month: Dec
      weeks:
        -
          week_num: 16
          sessions:
            -
              session_num: 29
              day: Tuesday
              date: 12/03
              topics: |
                💭 Secure Socket Layer (SSL)

                💭 Secure Shell (SSH) Remote Access
              activities: |
                💭 Lecture
              readings: |
                📘 TIN: pp. 685 - 703 (Ch 27)
                
                📘 TIN: pp. 761 - 784 (Ch 30)
            -
              session_num: 30
              day: Thursday
              date: 12/05
              topics: |
                💭 Network Address Translation (NAT)

                💭 Firewalls

                💭 IP Security (IPSEC)
              activities: |
                💭 Lecture
              readings: |
                📘 TIN: pp. 785 - 830 (Ch 31 - 33)
        -
          week_num: 17
          sessions:
            -
              session_num: F
              day: Thursday
              date: 12/12<br/>4:30-6:30p
              topics: |
                ✅ FINAL EXAM

                🏗 PROJECT DEMO
              activities: |
                ✅ Exam

                🏗 Project
              readings: |
---
