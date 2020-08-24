---
  layout: syllabus_general
  title: COSC A319 Internet Technologies<br/>Syllabus (General)
  course_info:
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
    topics: |
      This course generally covers some combination of the following topics:

      * The Internet
      * The OSI Layered Network Model
      * Protocols of the Internet (TCP/IP and friends)
      * JavaScript
        * Language & runtime, debugging, and internals
        * In-browser JavaScript, the JS API, and the DOM
        * JavaScript on the server via Node.js
        * JavaScript in desktop apps via Electron
        * JavaScript on mobile devices via React Native
      * Distributed system architectures and the cloud
      * Building, testing and running distributed systems
      * Processes, threads, concurrency and asynchronous operation
      * Network Failure Modes & Mitigation Techniques
      * Replication, scalability and fault tolerance
      * Internet/distributed systems security
      * Embedded devices and the Web of Things
    learning_format: |
      **Content Delivery.** This course is taught in an experiential format. While there are lectures on the conceptual content (network models, application architectures, failure modes, protocols, etc.), these are delivered alongside practice lab and demo sessions and hands-on work on a semester-long individual project that provides direct experience with a number of these concepts. Where it is impossible to present conceptual content through the project, demonstrations during class and assignments are used to help make conceptual content clear.

      **Critical Reflection.** With an experiential format, research has shown that students retain material better when they reflect critically on their learning. As such, students will be expected to write weekly reflection journal entries, as well as a short personal reflection essay at the end of the semester.

      **Assessment.** There are no exams in this course. In fact, assignments and project work do not have numeric grade values either. Instead, at the midterm and the final, you will be expected to write a reflection-based grade proposal and defense. In this short paper, you will indicate what letter grade you feel you have earned in the course and defend that grade to me by reflecting on specific examples of your work, learning, and accomplishments.
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
          I understand that the Monroe Library will have digital copies of the book available. Please check with them to understand how to use one.

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

        The project entails creating two key components:

        * a **web API server** that can provide data and back-end services for client applications
        * a **browser-based client application** (commonly called a "web app") for interacting with the API server's back-end services via a computer through a website

        Several class periods during the semester are set aside for demonstrations, homework help, or lab exploration. These days are opportunities for you to see how such projects are built, ask questions about issues you are having on your own project, or tell your peers about problems you've experienced while working on your project and how you overcame them. These sessions will be enough time to clarify the required functionality for each assignment with instructor/faculty assistance, get started on project work or assignments, and get help on problems you are experiencing while working on projects or assignments. However, these sessions likely will not be enough to complete the project. Please expect to dedicate time outside of class to working on the project on your own.

        All programming for the project will be done using JavaScript. While JavaScript was originally created for use in the web browser, it is now used often in various non-browser ways. During this course, you'll learn to use modern JavaScript coding style and syntax to develop applications in a variety of those contexts and make them work together.
    reflection:
      title: Reflection Journals
      icon: 📓
      description: |
        ### Weekly Journal Entries
        
        During this course, you will keep a journal with at least weekly reflections on your experiences.
        
        At the midpoint and the end of the semester, you will be required to write a short (5-10 pages) personal reflection essay based on your journaling which examines the following questions:

        * What grade do you believe you've earned in this course so far? Why?
        * What activities did you perform during this course?
        * What were your expectations at the beginning of the course? How did your expectations and attitudes change throughout the semester?
        * Describe moments of clarity that occurred for you during this course? What made the concept clear for you? How did you gain a better understanding of it?
        * Did the project in this course make your understanding of software development and computer science clearer? Your understanding of the Internet and Internet-based applications? How?
        * What did you learn about yourself during this experience?
        * What did you learn about others during this experience?
        * How can you use what you learned through this experience in your future coursework and in your future career? Do you feel better prepared for your career path after this experience? Why?
        * What topics will you continue exploring after the course? Why does each interest you? How will you go about exploring each of those concepts?
    final:
      title: Assessments
      icon: ✅
      description: |
        There will be two assessments in this course, a MIDTERM PAPER and a FINAL PAPER, each requiring you to propose the letter grade you believe you earned to that point and defend it by reflecting on your understanding of the material covered, your learning process, your efforts, and your accomplishments. At a minimum, each paper should address the questions indicated in the **Reflection Journals** section.
        
        These papers should each be approximately 5&mdash;10 pages and should use appropriate spelling, grammar, and punctuation.
---
