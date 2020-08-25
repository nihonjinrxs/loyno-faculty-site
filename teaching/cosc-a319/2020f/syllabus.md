---
layout: syllabus_specific_ungrading
title: COSC A319 Internet Technologies<br/>Syllabus (Fall 2020)
syllabus:
  semester: 2020 Fall
  class_location: Online (Synchronous) in Canvas
  policies_year: 2020-319
  bulletin_link: https://courses.loyno.edu/course/cosc/a319/internet-technologies
  bulletin: |
    This course explores the concepts and technologies that are used in modern Internet systems, and provides the necessary skills and knowledge of software technologies needed for creating Internet/Web services. It is designed to expose students to web content presentation and generation technologies, programming, and building multi-tiered client/server web applications.
  description: |
    This course introduces students to the world of internet and networked systems development. Concepts related to distributed systems development; concurrent and asynchronous processing; process communications and network transport protocols; distributed application architecture and design; deployment, monitoring and debugging of internet-based systems; and web of things development will be covered.
  prerequisites: |
    One of:

    * [COSC A212 Introduction to Programming II](https://courses.loyno.edu/course/cosc/a212/introduction-programming-ii) and Sophomore standing
    * Instructor Approval.

    To be successful in this course, students are expected to have practical experience building multi-file/multi-component software projects. In particular, students should be comfortable working with data structures, designing classes and class interfaces, and writing software modules that form part of a larger application.
  learning_objectives: |
    Students will experience the design and construction of internet-based systems through hands-on interaction with course material. The course will provide students with a basis of theory upon which to reflect upon experiences: designing and building server-side systems that must communicate with client systems via internet protocols; designing and building client systems that operate and interact with the server system concurrently and asynchronously; debugging process timing and network failure issues; and understanding the network designs and protocols that enable the modern internet.
  learning_outcomes: |
    Upon completion of this course, students should be able to:

      * Understand and explain the theoretical approaches to dealing with concurrency in software and the types of problems that can occur when software processes operate concurrently
      * Understand and explain the theoretical approaches to building software systems with components that operate asynchronously
      * Understand and explain how messages travel between systems on the internet, including the various protocols used and what information they require and provide
      * Build parsers for key internet communication protocols and how they interact to enable modern web applications
      * Understand what types of services are offered by commercial cloud providers, and how those services fit into internet-based distributed software architectures
      * Build and deploy server-side API software capable of serving multiple client software types
      * Build and deploy web-based client software that communicates with a server-side API
      * Reflect on the unique requirements of internet-based software
      * Reflect on the collection of technologies that enable the modern internet
      * Reflect on your own learning process and be able to improve your own learning
      * Know where to look for more information on the topics covered in this course
  textbooks:
    -
      icon: 📘
      title: "The Illustrated Network: How TCP/IP Works in a Modern Network, 2nd Edition"
      authors: Walter Goralski
      publisher: Morgan Kaufmann/Elsevier
      pub_date: 2017
      isbn: 978-0-12-811027-0
      textbook_message: |
        **You DO need to obtain a copy of this book, at least for the semester.**
        The Monroe Library has been able to provide a digital copy of the book. You should be able to access that [via our Elsevier ScienceDirect link](http://ezproxy.loyno.edu/login?url=https://www.sciencedirect.com/science/book/9780128110270). If you have trouble, you can contact the library staff for help.

        This book is also available for sale online for between $70 and $90, and is a fantastic reference for this content for the future.
      isbn_url: https://isbnsearch.org/isbn/9780128110270
    -
      icon: 📙
      title: Eloquent Javascript, 3rd Edition
      authors: Marijn Haverbeke
      publisher: Marijn Haverbeke
      pub_date: 2018
      isbn: 978-15-932795-0-9
      textbook_message: |
        **This version of the book is available for free online. You DO NOT need to buy this book. In addition, the online version is interactive, allowing you to try out code and explore the output while you read.**

        A print version is available from No Starch Press. If you would like to purchase the book, you can get there from the book website.
      isbn_url: https://isbnsearch.org/isbn/9781593279509
      companion_site: https://eloquentjavascript.net/
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

        **You DO NOT need to buy this book**, but it is a good reference if you can afford it.
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
        **This book is available free online, and will only be used as reference. You DO NOT need to buy this book.**
      isbn_url: https://isbnsearch.org/isbn/9781543057386
      companion_site: https://www.distributed-systems.net/index.php/books/distributed-systems-3rd-edition-2017/
    -
      icon: 📗
      title: Building the Web of Things, 1st Edition
      authors: Dominique Guinard and Vlad Trifa
      publisher: Manning Publications
      pub_date: 2016
      isbn: 978-16-172926-8-2
      textbook_message: |
        **You do NOT need to buy this book.** This book is available for sale online for about $35.
        
        This book is a good resource if you are interested in Internet of Things and hardware-integrated internet software. Most of this content will NOT be covered this semester in class.
      isbn_url: https://isbnsearch.org/isbn/9781617292682
      companion_site: https://webofthings.org/book/
  project:
    title: Project
    icon: 🏗
    description: |
      During this course, you will build a multi-component internet system using some of the concepts learned through lecture and demo.

      ### Project Components

      The project entails creating two key components:

      * a **web API server** that can provide data and back-end services for client applications
      * a **browser-based client application** (commonly called a "web app") for interacting with the API server's back-end services via a computer through a website

      ### What to Expect

      Several class periods during the semester are set aside for demonstrations, homework help, or lab exploration. These days are opportunities for you to see how such projects are built, ask questions about issues you are having on your own project, or tell your peers about problems you've experienced while working on your project and how you overcame them. These sessions will be enough time to clarify the required functionality for each assignment with instructor/faculty assistance, get started on project work or assignments, and get help on problems you are experiencing while working on projects or assignments. However, these sessions likely will not be enough to complete the project. **Please expect to dedicate time outside of class to working on the project on your own.**

      ### Tools and Equipment
      
      #### JavaScript
      
      All programming for the project will be done using JavaScript. The required "textbook" *Eloquent JavaScript, 3rd Ed.* (see [Textbooks](#textbooks) above) is a great interactive online resource that allows you to play with the code examples from within the browser to get a feel for how the code works. It teaches modern JavaScript coding style and syntax, which is what we'll use during the majority of this course.

      JavaScript was originally meant for the web browser. However, it is now used often in various non-browser ways. For this project, we'll use the following JavaScript based tools:

      * Web App:
        * [React.js](https://reactjs.org/)
        * [Create React App](https://facebook.github.io/create-react-app/)
      * API:
        * [nvm (on macOS or Linux)](https://github.com/nvm-sh/nvm) or [nvm-windows (on Windows)](https://github.com/coreybutler/nvm-windows)
        * [Node.js ("LTS" v12.x)](https://nodejs.org/en/)
        * [NPM](https://docs.npmjs.com/cli/npm) and/or [Yarn](https://yarnpkg.com/en/)
        * [Express.js](https://expressjs.com/)

      #### Network Inspection Tools

      During this course, we will be learning to use a variety of basic Linux command line tools (that are available on almost every installation of Linux) to inspect the networks of the Internet and how our computers interact with them.

      In some cases, these are not enough, and we want to inspect the packet-level data being transmitted through the network. In such cases, there are a few useful tools you can use.

      Although not strictly related to the project, you may find some of these tools useful in debugging what you build.

      * [Wireshark](https://www.wireshark.org/) - the most commonly used network protocol analyzer, providing facilities for live capture and offline analysis of network traffic data at the packet and byte level. Also provides `tshark`, the command-line version of Wireshark. This was originally named "Ethereal", with command-line version `tethereal`.
      * Under the hood of Wireshark is `libpcap`, which is part of the [`tcpdump` command line packet analyzer](https://www.tcpdump.org/). Somewhat harder to use, it provides raw capture capability for cases where Wireshark is not enough. (Your instructor has not found any cases like this yet.)
      * [Fiddler](https://www.telerik.com/fiddler) is a web debugging proxy that is sometimes useful for manipulating a web session or intentionally impacting network performance when building internet-based software.
      * [Zenmap](https://nmap.org/zenmap/), the graphical interface for the `nmap` command line tool, provides facilities for scanning networks and systems for security vulnerabilities.

      During this course, we will use Wireshark during demos to explore the protocol layers of internet message packets when we dive into the details of the various protocols.

      ### Personalize Your Project

      Be creative and make your project yours.  You'll have fun, and you'll create something you can be proud to show off to your classmate and even to potential employers!

      ### Celebration!

      We'll use the final exam period to host a celebration of our project work. You'll have the chance to show off what you did and talk about why it's important to you, and we'll cheer each other on as we do.
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
      * "Aha!" moments you've had during this course
      * how the experiences and material in this course relate to your degree program
      * how the experiences and material in this course might be relevant to your future career

      **Journal entries will be due at the end of the day every Monday** (i.e., just before midnight Central time), with the exception of the first entry, which you'll do during the first class period. Journal entries must be submitted using the **REFLECT** assignments in Canvas. Be sure to write your entry into the Reflection assignment with the appropriate due date.
      
      Additional journal entries beyond those required weekly may be helpful as you capture your thoughts and information about your learning that may be useful in determining what grade you believe you earned. You can add those by resubmitting any already submitted Reflection assignment with additional content. Be sure to date the new entry at the beginning so it's obvious that it's a new entry.
  final:
    title: Assessments
    icon: ✅
    description: |
      ### Reflection Essays

      At the midpoint and at the end of the semester, you will be required to write **short (5-10 pages) personal reflection essays** based on your reflection journaling examining the following questions:

      * What grade do you believe you've earned in this course so far? Why?
      * What activities did you perform during this course?
      * What were your expectations at the beginning of the course? How did your expectations and attitudes change throughout the semester?
      * Describe moments of clarity that occurred for you during this course? What made the concept clear for you? How did you gain a better understanding of it?
      * Did the project in this course make your understanding of software development and computer science clearer? Your understanding of the Internet and Internet-based applications? How?
      * What did you learn about yourself during this experience?
      * What did you learn about others during this experience?
      * How can you use what you learned through this experience in your future coursework and in your future career? Do you feel better prepared for your career path after this experience? Why?
      * What topics will you continue exploring after the course? Why does each interest you? How will you go about exploring each of those concepts?

      ### Due Dates
      
      These papers are due:
      
      * MIDTERM GRADE PROPOSAL REFLECTION PAPER **due on Monday, October 12, 2020, by 11:59 PM US Central**
      * FINAL GRADE PROPOSAL REFLECTION PAPER **due on Friday, December 18, 2020, by 11:59 PM US Central**
  
      ### Submission Information
      
      Papers **must be submitted in PDF format through the Canvas assignment**, which uses Urkund for plaigiarism detection. Unless you have arranged with me ahead of time due to some unforeseen circumstance, essays emailed to me or transmitted by some other mechanism result in you forfeiting your ability to weigh in on your grade for that portion of the course, meaning that my decision, based on what I know of your work so far, will be final.

      ### How you will be graded

      Each of your grade proposals, so long as they are well-defended with specific personal reflections, will be the primary consideration for your grade at the midterm and for your final grade in the course respectively.

      In order to ensure your grade proposal is well-defended, you will want to focus on the following:

      **Content.** In order to effectively argue for a passing grade, your paper _must_ address all the above questions. Reflection essays may explore other topics related to these questions if they are relevant to demonstrating your learning or defending your grade proposal, but if the listed questions are not addressed, this will significantly weaken your argument. In preparation for this, you may wish to address at least one of those questions in each journal entry, and not address the same question each week.

      **Depth of Personal Reflection.** Your paper and journal entries should show depth of reflection. Learning often means struggling not only with new concepts and ideas, but also with your own habits and perceptions. Spend enough time thinking about this and reflecting on these questions that you are able to feel that struggle. Your argument for your grade will be much more convincing if you have put in this work and are able to discuss it.
      
      **Correctness.** In addition to content, the correctness of your writing (spelling, grammar, punctuation, word choice, etc.), and the readability and formatting of your submitted paper (font choice, margins, line length, spacing, etc.), are important factors in making a convincing written defense. Papers that are difficult to read result in fragmented understanding of your argument and disrupt the ideas you are trying to communicate. Please be careful in your writing and be sure to proofread before submitting.
  grades:
    ungrading: |
      **Grading in this course is non-traditional.** While you will be receiving direct feedback on the assignment and project work you do, your reflection journal entries, and your participation in class, you will not be receiving numeric or letter grades for each individual assignment or class period. Instead, I will set your mid-term and final letter grades based on the outcome of the following two-step process.
      
      **Step 1. You propose your grade in Reflection Essays.** You will have two opportunities, one at mid-term and one at the end of the course, to propose what letter grade you feel you've earned in the course and to defend it based on your effort, learning, accomplishments, and reflections. These proposals will be submitted in the form of reflection papers, as detailed above in **[Assessments](#final)**.

      **Step 2. I assess your proposal and either accept or adjust.** When I receive your proposal, I will use your proposed grade if:
        
        1. you have provided sufficient evidence of learning 
        2. I have no concerns about the grade you have proposed
      
      However, I will adjust your proposed grade up or down as needed if I believe that any of the following are true:
        
        1. you have not earned the grade you proposed (adjust downward)
        2. you have not provided sufficient evidence of learning meriting the grade you proposed (adjust downward)
        3. you have actually earned a grade better than that which you proposed (adjust upward)
        4. there are special circumstances which you have not accounted for that impact the grade you should receive (either upward or downward as appropriate)

      In the case where an adjustment is needed, I will discuss that with you in a one-on-one conversation scheduled as soon as possible outside of classtime (usually within office hours).

      **Early Feedback Opportunity.** If you are concerned about whether you have earned a specific grade or how to defend a grade proposal, you are welcome to talk with me about what you plan to propose while working on  your reflection paper, and I can help guide you on what might be compelling in defense of that grade. **This must be done early in the assignment period and not at the last minute.** If you wait until the last minute, I may not be able to accomodate a meeting prior to having to submit grades.
  schedule:
    -
      month: August
      year: 2020
      weeks:
        -
          week_num: 1
          sessions:
            -
              session_num: 1
              day: Tuesday
              date: 08/25
              formats:
                -  
                  type: hello
                  title: Introductions
                - 
                  type: course-info
                  title: Syllabus Review
              topics:
                - 
                  type: course-info
                  title: Course Intro
                - 
                  type: tools
                  title: Language &amp; Tools Intro
              readings:
                -
                  type: read-web
                  title: Create a GitHub Account
                  url: https://github.com
                -
                  type: read-web
                  title: Get the GitHub Student Developer Pack
                  url: https://education.github.com/pack
                -
                  type: read-web
                  title: Create a Heroku Account
                  url: https://heroku.com/
              assigned:
                -
                  type: journal
                  title: "Journal: Expectations"
                  due: Tue 08/25
                  notes: Completed during class
                - 
                  type: project
                  title: "P0: Project Proposal"
                  due: Tue 09/08
              due:
            -
              session_num: 2
              day: Thursday
              date: 08/27
              formats:
                - 
                  type: lecture
                  title: Lecture
              topics:
                - 
                  type: lecture
                  title: Intro to the Internet
              readings:
                -
                  type: read-TIN
                  title: "TIN: pp. 1 - 30 (Ch 1)"
                  url: http://ezproxy.loyno.edu/login?url=https://www.sciencedirect.com/science/book/9780128110270
              assigned: 
              due:
        -
          week_num: 2
          sessions:
            -
              day: Monday
              date: 08/31
              due:
                - 
                  type: journal
                  title: "Week 1 Reflection"
    -
      month: September
      year: 2020
      weeks:
        -
          week_num: 2
          sessions:
            -
              session_num: 3
              day: Tuesday
              date: 09/01
              formats:
                - 
                  type: lecture
                  title: Lecture
              topics:
                - 
                  type: lecture
                  title: Layered Network Models
                - 
                  type: lecture
                  title: The TCP/IP Protocol Stack
              readings:
                -
                  type: read-TIN
                  title: "TIN: pp. 30 - 69 (Ch 1 & 2)"
                  url: http://ezproxy.loyno.edu/login?url=https://www.sciencedirect.com/science/book/9780128110270
              assigned:
              due:
            -
              session_num: 4
              day: Thursday
              date: 09/03
              formats:
                - 
                  type: discussion
                  title: Discussion
              topics:
                - 
                  type: discussion
                  title: TCP/IP Stack
                - 
                  type: discussion
                  title: RFCs
                - 
                  type: discussion
                  title: Packet Capture
              readings:
              assigned:
              due:
        -
          week_num: 3
          sessions:
            -
              day: Monday
              date: 09/07
              due:
                - 
                  type: journal
                  title: "Week 2 Reflection"
            -
              session_num: 5
              day: Tuesday
              date: 09/08
              formats:
                - 
                  type: demo
                  title: Demo
                - 
                  type: lab
                  title: Lab
              topics:
                - 
                  type: demo
                  title: Intro to JavaScript
              readings:
                -
                  type: read-EJS
                  title: "EJS: Intro. - Ch 6"
                  url: https://eloquentjavascript.net/
                  notes: "Programming concepts in EJS should already be well-understood; material should be review except for new syntax"
              assigned:
                - 
                  type: assignment
                  title: "A1: Ethernet Parser - Basic JavaScript"
                  due: Tue 09/10
              due:
                - 
                  type: project
                  title: "P0: Project Proposal"
            -
              session_num: 6
              day: Thursday
              date: 09/10
              formats:
                - 
                  type: lecture
                  title: Lecture
                - 
                  type: lab
                  title: Lab
              topics:
                - 
                  type: lecture
                  title: JavaScript Asynchrony/Concurrency
                - 
                  type: lecture
                  title: JavaScript Debugging
              readings:
                -
                  type: read-EJS
                  title: "EJS: Ch 8 - 11"
                  url: https://eloquentjavascript.net/
                -
                  type: read-web
                  title: "Asynchrony: Under the Hood (Video - 25min)"
                  url: https://youtu.be/SrNQS8J67zc
                -
                  type: read-web
                  title: MDN JavaScript Concurrency Model &amp; Event Loop
                  url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
                -
                  type: read-web
                  title: "JavaScript Internals: Under the Hood of a Browser"
                  url: https://medium.com/better-programming/javascript-internals-under-the-hood-of-a-browser-f357378cc922
                -
                  type: read-web
                  title: "JavaScript Callback Concurrency (Pre-promises)"
                  url: https://blog.avenuecode.com/understanding-the-javascript-concurrency-model
              assigned:
                - 
                  type: assignment
                  title: "A2: Ethernet Parser - Async Programming in JS"
                  due: Tue 09/17
              due:
                - 
                  type: assignment
                  title: "A1: Ethernet Parser - Basic JavaScript"
        -
          week_num: 4
          sessions:
            -
              day: Monday
              date: 09/14
              due:
                - 
                  type: journal
                  title: "Week 3 Reflection"
            -
              session_num: 7
              day: Thursday
              date: 09/15
              formats:
                - 
                  type: lab
                  title: Lab
              topics:
                - 
                  type: project
                  title: Project Specification
                - 
                  type: discussion
                  title: JavaScript
                - 
                  type: lab
                  title: Homework Help
              readings:
              assigned:
                - 
                  type: project
                  title: "P1: Project Specification"
                  due: Tue 09/24
              due:
            -
              session_num: 8
              day: Thursday
              date: 09/17
              formats:
                - 
                  type: lecture
                  title: Lecture
              topics:
                - 
                  type: lecture
                  title: HTTP and Web-based Applications
              readings:
                -
                  type: read-TIN
                  title: "TIN: pp. 661 - 684 (Ch 26)"
                  url: http://ezproxy.loyno.edu/login?url=https://www.sciencedirect.com/science/book/9780128110270
              assigned:
              due:
                - 
                  type: assignment
                  title: "A2: Ethernet Parser - Async Programming in JS"
        -
          week_num: 5
          sessions:
            -
              day: Monday
              date: 09/21
              due:
                - 
                  type: journal
                  title: "Week 4 Reflection"
            -
              session_num: 9
              day: Tuesday
              date: 09/22
              formats:
                - 
                  type: discussion
                  title: Discussion
                - 
                  type: lab
                  title: Lab
              topics:
                - 
                  type: lab
                  title: Inspecting and Understanding HTTP Traffic
              readings:
              assigned:
              due:
            -
              session_num: 10
              day: Thursday
              date: 09/24
              formats:
                - 
                  type: lecture
                  title: Lecture
              topics:
                - 
                  type: lecture
                  title: JavaScript in the Browser
              readings:
                -
                  type: read-EJS
                  title: "EJS: Ch 13 - 15"
                  url: https://eloquentjavascript.net/
              assigned:
                - 
                  type: assignment
                  title: "A3: Dynamic Content in a Webpage"
                  due: Thu 10/01
              due:
                - 
                  type: project
                  title: "P1: Project Specification"
        -
          week_num: 6
          sessions:
            -
              day: Monday
              date: 09/28
              due:
                - 
                  type: journal
                  title: "Week 5 Reflection"
            -
              session_num: 11
              day: Tuesday
              date: 09/29
              formats:
                - 
                  type: demo
                  title: Demo
              topics:
                - 
                  type: demo
                  title: Web Pages, the DOM &amp; the JS API
              readings:
              assigned:
              due:
    -
      month: October
      year: 2020
      weeks:
        -
          week_num: 6
          sessions:
            -
              session_num: 12
              day: Tuesday
              date: 10/01
              formats:
                - 
                  type: lecture
                  title: Lecture
                - 
                  type: demo
                  title: Demo
              topics:
                - 
                  type: lecture
                  title: Modern Browser-based Applications
                - 
                  type: demo
                  title: JavaScript &amp; React
              readings:
                -
                  type: read-web
                  title: React Tutorial
                  url: https://reactjs.org/tutorial/tutorial.html
                -
                  type: read-web
                  title: Thinking in React
                  url: https://reactjs.org/docs/thinking-in-react.html
              assigned:
                - 
                  type: project
                  title: "P2: Project Web Client"
                  due: Tue 10/13
              due:
                - 
                  type: assignment
                  title: "A3: Dynamic Content in a Webpage"
        -
          week_num: 7
          sessions:
            -
              day: Monday
              date: 10/05
              due:
                - 
                  type: journal
                  title: "Week 6 Reflection"
            -
              session_num: 13
              day: Tuesday
              date: 10/06
              formats:
                - 
                  type: discussion
                  title: Discussion
                - 
                  type: lab
                  title: Lab
              topics:
                - 
                  type: discussion
                  title: JavaScript &amp; React
                - 
                  type: lab
                  title: Homework Help
              readings:
              assigned:
              due:
            -
              session_num: 14
              day: Thursday
              date: 10/08
              formats:
                - 
                  type: lecture
                  title: Lecture
              topics:
                - 
                  type: lecture
                  title: FTP
              readings:
                -
                  type: read-TIN
                  title: "TIN: pp. 613 - 636 (Ch 24)"
                  url: http://ezproxy.loyno.edu/login?url=https://www.sciencedirect.com/science/book/9780128110270
              assigned:
              due:
        -
          week_num: 8
          sessions:
            -
              day: Monday
              date: 10/12
              due:
                - 
                  type: journal
                  title: "GRADE PROPOSAL REFLECTION PAPER: MIDTERM GRADE"
            -
              session_num: 15
              day: Tuesday
              date: 10/13
              formats:
                - 
                  type: lecture
                  title: Lecture
              topics:
                - 
                  type: lecture
                  title: Email, SMTP, MIME &amp; POP3
              readings:
                -
                  type: read-TIN
                  title: "TIN: pp. 637 - 659 (Ch 25)"
                  url: http://ezproxy.loyno.edu/login?url=https://www.sciencedirect.com/science/book/9780128110270
              assigned:
              due:
                - 
                  type: project
                  title: "P2: Project Web Client"
            -
              session_num: 16
              day: Thursday
              date: 10/15
              formats:
                - 
                  type: lecture
                  title: Lecture
              topics:
                - 
                  type: lecture
                  title: UDP
              readings:
                -
                  type: read-TIN
                  title: "TIN: pp. 289 - 306 (Ch 11)"
                  url: http://ezproxy.loyno.edu/login?url=https://www.sciencedirect.com/science/book/9780128110270
              assigned:
                - 
                  type: assignment
                  title: "A4: UDP Parser"
                  due: Thu 10/22
              due:
        -
          week_num: 9
          sessions:
            -
              day: Monday
              date: 10/19
              due:
                - 
                  type: journal
                  title: "Week 8 Reflection"
            -
              session_num: 17
              day: Tuesday
              date: 10/20
              formats:
                - 
                  type: discussion
                  title: Discussion
                - 
                  type: lab
                  title: Lab
              topics:
                - 
                  type: discussion
                  title: Making UDP Requests in JavaScript
                - 
                  type: lab
                  title: JavaScript & React
                - 
                  type: lab
                  title: Homework Help
              readings:
              assigned:
              due:
            -
              session_num: 18
              day: Thursday
              date: 10/22
              formats:
                - 
                  type: lecture
                  title: Lecture
              topics:
                - 
                  type: lecture
                  title: TCP
              readings:
                -
                  type: read-TIN
                  title: "TIN: pp. 307 - 329 (Ch 12)"
                  url: http://ezproxy.loyno.edu/login?url=https://www.sciencedirect.com/science/book/9780128110270
              assigned:
                - 
                  type: assignment
                  title: "A5: TCP Parser"
                  due: Thu 10/29
              due:
                - 
                  type: assignment
                  title: "A4: UDP Parser"
        -
          week_num: 10
          sessions:
            -
              day: Monday
              date: 10/26
              due:
                - 
                  type: journal
                  title: "Week 9 Reflection"
            -
              session_num: 19
              day: Tuesday
              date: 10/27
              formats:
                - 
                  type: discussion
                  title: Discussion
                - 
                  type: lab
                  title: Lab
              topics:
                - 
                  type: discussion
                  title: TCP Transaction Flow
                - 
                  type: lab
                  title: Homework Help
              readings:
              assigned:
              due:
            -
              session_num: 20
              day: Thursday
              date: 10/29
              formats:
                - 
                  type: lecture
                  title: Lecture
              topics:
                - 
                  type: lecture
                  title: TCP
              readings:
                -
                  type: read-TIN
                  title: "TIN: pp. 307 - 329 (Ch 12)"
                  url: http://ezproxy.loyno.edu/login?url=https://www.sciencedirect.com/science/book/9780128110270
              assigned:
                - 
                  type: project
                  title: "P3: Project Web API"
                  due: Thu 11/12
              due:
                - 
                  type: assignment
                  title: "A5: TCP Parser"
    -
      month: November
      year: 2020
      weeks:
        -
          week_num: 11
          sessions:
            -
              day: Monday
              date: 11/02
              due:
                - 
                  type: journal
                  title: "Week 10 Reflection"
            -
              session_num: 21
              day: Tuesday
              date: 11/03
              formats:
                - 
                  type: demo
                  title: Demo
              topics:
                - 
                  type: demo
                  title: Building Web-based APIs Using Express
              readings:
                -
                  type: read-web
                  title: Beginners' Guide to Understanding Node.js &amp; Express.js Fundamentals
                  url: https://medium.com/@LindaVivah/the-beginners-guide-understanding-node-js-express-js-fundamentals-e15493462be1
                -
                  type: read-web
                  title: "Express.js: Getting Started"
                  url: https://expressjs.com/en/starter/installing.html
              assigned:
              due:
            -
              session_num: 22
              day: Thursday
              date: 11/05
              formats:
                - 
                  type: lecture
                  title: Lecture
              topics:
                - 
                  type: lecture
                  title: DNS
              readings:
                -
                  type: read-TIN
                  title: "TIN: pp. 587 - 612 (Ch 23)"
                  url: http://ezproxy.loyno.edu/login?url=https://www.sciencedirect.com/science/book/9780128110270
              assigned:
                - 
                  type: project
                  title: "P4: Web App Integration with API"
                  due: Tue 12/08
                  notes: Concurrently with P3 
              due:
        -
          week_num: 12
          sessions:
            -
              day: Monday
              date: 11/09
              due:
                - 
                  type: journal
                  title: "Week 11 Reflection"
            -
              session_num: 23
              day: Tuesday
              date: 11/10
              formats:
                - 
                  type: demo
                  title: Demo
                - 
                  type: lab
                  title: Lab
              topics:
                - 
                  type: demo
                  title: DNS Record Inspection
                - 
                  type: lab
                  title: Homework Help
              readings:
              assigned:
              due:
            -
              session_num: 24
              day: Thursday
              date: 11/12
              formats:
                - 
                  type: lecture
                  title: Lecture
              topics:
                - 
                  type: lecture
                  title: "IP: Addressing, Subnetting &amp; Supernetting"
              readings:
                -
                  type: read-TIN
                  title: "TIN: pp. 139 - 173 (Ch 5)"
                  url: http://ezproxy.loyno.edu/login?url=https://www.sciencedirect.com/science/book/9780128110270
              assigned:
                - 
                  type: assignment
                  title: "A6: IP Address Subnetter/Supernetter"
                  due: Tue 11/19
              due:
                - 
                  type: project
                  title: "P3: Project Web API"
        -
          week_num: 13
          sessions:
            -
              day: Monday
              date: 11/16
              due:
                - 
                  type: journal
                  title: "Week 12 Reflection"
            -
              session_num: 25
              day: Tuesday
              date: 11/17
              formats:
                - 
                  type: discussion
                  title: Discussion
                - 
                  type: lab
                  title: Lab
              topics:
                - 
                  type: discussion
                  title: IP Subnetting &amp; Supernetting
                - 
                  type: lab
                  title: Homework Help
              readings:
              assigned:
              due:
            -
              session_num: 26
              day: Thursday
              date: 11/19
              formats:
                - 
                  type: lecture
                  title: Lecture
              topics:
                - 
                  type: lecture
                  title: "IP: Headers &amp; Fragmentation"
              readings:
                -
                  type: read-TIN
                  title: "TIN: pp. 197 - 219 (Ch 7)"
                  url: http://ezproxy.loyno.edu/login?url=https://www.sciencedirect.com/science/book/9780128110270
              assigned:
                - 
                  type: assignment
                  title: "A7: IP Parser"
                  due: Thu 12/03
              due:
                - 
                  type: assignment
                  title: "A6: IP Address Subnetter/Supernetter"
        -
          week_num: 14
          sessions:
            -
              day: Monday
              date: 11/23
              due:
                - 
                  type: journal
                  title: "Week 13 Reflection"
            -
              day: Tuesday
              date: 11/24
              notes: NO CLASS - Thanksgiving Holidays
            -
              day: Thursday
              date: 11/26
              notes: NO CLASS - Thanksgiving Holidays
    -
      month: December
      year: 2020
      weeks:
        -
          week_num: 15
          sessions:
            -
              session_num: 27
              day: Tuesday
              date: 12/01
              formats:
                - 
                  type: discussion
                  title: Discussion
                - 
                  type: lab
                  title: Lab
              topics:
                - 
                  type: discussion
                  title: IP Header Parsing &amp; Packet Fragmentation
                - 
                  type: lab
                  title: Homework Help
              readings:
              assigned:
              due:
            -
              session_num: 28
              day: Thursday
              date: 12/03
              formats:
                - 
                  type: lecture
                  title: Lecture
              topics:
                - 
                  type: lecture
                  title: Concurrency &amp; Other Problems in Networked/Distributed Systems
              readings:
                -
                  type: read-web
                  title: Network Failure Modes &amp; Prevention
                  url: https://www.computerworld.com/article/2563041/network-failure-modes-and-prevention.html
                -
                  type: read-web
                  title: "Network Failure Modes &amp; Prevention: Let's Get Physical"
                  url: https://www.computerworld.com/article/2554445/network-failure-prevention--let-s-get-physical.html
                -
                  type: read-web
                  title: "Network Failure Modes &amp; Prevention: The Data Link Layer"
                  url: https://www.computerworld.com/article/2554769/network-failure-modes-and-prevention--the-data-link-layer.html
                -
                  type: read-web
                  title: "Network Failure Modes &amp; Prevention: Murphy &amp; the Network Layer"
                  url: https://www.computerworld.com/article/2555142/network-failure-modes-and-prevention--murphy-and-the-network-layer.html
                -
                  type: read-web
                  title: "Network Failure Modes &amp; Prevention: Application Layers"
                  url: https://www.computerworld.com/article/2545395/network-failure-modes-and-prevention--application-layers.html
              assigned:
              due:
                - 
                  type: assignment
                  title: "A7: IP Parser"
        -
          week_num: 16
          sessions:
            -
              day: Monday
              date: 12/07
              due:
                - 
                  type: journal
                  title: "Week 13 Reflection"
            -
              session_num: 29
              day: Tuesday
              date: 12/08
              formats:
                - 
                  type: discussion
                  title: Discussion
              topics:
                - 
                  type: discussion
                  title: "The TCP/IP Stack in Action: Wrapping &amp; Unwrapping Data"
              readings:
              assigned:
              due:
                - 
                  type: project
                  title: "P4: Web App Integration with API"
        -
          week_num: 17
          sessions:
            -
              session_num: F
              day: Thursday
              date: 12/12<br/>4:30-6:30p
              formats:
                -
                  type: celebration
                  title: Celebration!
              topics:
                -
                  type: project
                  title: PROJECT CELEBRATION & DEMO
              readings: |
                Be ready to talk about your goal and show off your project!
                
                Bring your favorite treat and non-alcoholic beverage.
            -
              day: Friday
              date: 12/18
              due:
                - 
                  type: journal
                  title: "GRADE PROPOSAL REFLECTION PAPER: FINAL GRADE"
---
