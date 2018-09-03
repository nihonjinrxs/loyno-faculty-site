---
  layout: syllabus_specific
  title: COSC A319 Internet Technologies<br/>Syllabus (Fall 2018)
  syllabus:
    semester: 2018 Fall
    policies_year: 2017
    bulletin_link: http://2017bulletin.loyno.edu/undergraduate/computer-science#cosc-a319
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
      Students will experience the design and construction of internet-based systems through hands-on interaction with course material. The course will provide students with a basis of theory upon which to reflect upon experiences: designing and building server-side systems that must serve multiple client system types; designing and building several types of client systems that operate and interact with the server system concurrently and asynchronously; debugging process timing and network failure issues; and building systems on networked physical devices.
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
        * Know where to look for more information on the topics covered in this course
    textbooks:
      -
        icon: 📗
        title: Distributed Systems, 3rd Edition
        authors: Maarten van Steen and Andrew S. Tanenbaum
        publisher: Maarten van Steen
        pub_date: 2017
        isbn: 978-15-430573-8-6 (print), 978-90-815406-2-9 (digital)
        textbook_message: |
          This book is available free online. You do not need to purchase a printed copy of this textbook.
        isbn_url: https://isbnsearch.org/isbn/9781543057386
        companion_site: https://www.distributed-systems.net/index.php/books/distributed-systems-3rd-edition-2017/
      -
        icon: 📘
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
    textbooks_optional:
      -
        icon: 📙
        title: Eloquent Javascript, 3rd Edition
        authors: Marijn Haverbeke
        publisher: Marijn Haverbeke
        pub_date: 2018
        isbn: 978-15-932795-0-9
        textbook_message: |
          This version of the book is currently **only available online**. The online version is also interactive, allowing you to try out code and explore the output while you read.

          Later this year, a print version should be available from No Starch Press. If you would like to purchase the book, you can get there from the book website.
        isbn_url: https://isbnsearch.org/isbn/9781593279509
        companion_site: https://eloquentjavascript.net/
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
    schedule:
      -
        week_num: 1
        sessions:
          -
            session_num: 1
            day: Tuesday
            date: 08/21
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
              * Complete [Try Git!](https://try.github.io)
              * [📙 Start exploring JavaScript](https://eloquentjavascript.net/)
          -
            session_num: 2
            day: Thursday
            date: 08/23
            topics: |
              💭 What is a distributed system?

              💭 Distributed system architectures
            activities: |
              💭 Lecture
            readings: |
              📗 DS: pp.1-53 (Ch 1)
              
              📙 [EJS: Intro. - Ch. 7](https://eloquentjavascript.net/)
              
              (EJS programming concepts should already be well-understood; material should be review except for new syntax)
---
