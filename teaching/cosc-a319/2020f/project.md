---
layout: page
title: Course Project<br/>COSC A319 Internet Technologies<br/>(Fall 2020)
---
## PROJECT OVERVIEW

During this course, over 5 assignments that build on each other, you will create an Internet-based application of your choice. This will be a laboratory for you to explore your own interests and how you might use the Internet to enable them. Along the way, you'll make use of the many protocols and communication mechanisms we learn about during lectures, and you'll learn to build a realistically sized application using the language of the Internet, JavaScript.

Given the broad collection of options you could choose to work on and our limited time during this semester, we'll need to narrow the scope of an idea to make it workable for a sememster project. Never fear, though, as this is often the case in the professional world too. In many cases, given a huge, multi-year goal, you'll be asked to implement a minimum viable application (MVA) that demonstrates that what you're trying to do is possible. Once that's done and working, you can continue improving it toward the larger goal. We'll work that way in this course too. And if you still have more to do to reach your personal goal at the end of the course, you can continue to improve it on your own using what you learn this semester.

As with other work in this course, I will provide feedback as I see your work, but you will not receive a numeric grade for the assignments here. I encourage you to start early and submit early, so that I can provide feedback early, which you can then use to improve your work prior to the deadline.

## PROJECT SCHEDULE

The following 5 assignments, explained in detail below, constitute the course-connected portion of your project:

* [P0: Project Proposal](#p0)<br /><small><strong>Start:</strong> Thu, Aug 25, 2020; <strong>Due:</strong> Tue, Sep 8, 2020</small>
* [P1: Project Specification](#p1)<br /><small><strong>Start:</strong> Tue, Sep 15, 2020; <strong>Due:</strong> Thu, Oct 1, 2020</small>
* [P2: Web Client](#p2)<br /><small><strong>Start:</strong> Thu, Oct 8, 2020; <strong>Due:</strong> Thu, Nov 5, 2020</small>
* [P3: Web API Server](#p3)<br /><small><strong>Start:</strong> Tue, Nov 5, 2020; <strong>Due:</strong> Tue, Dec 1, 2020</small>
* [P4: Integration and Deployment](#p4)<br /><small><strong>Start:</strong> Tue, Nov 17, 2020; <strong>Due:</strong> Tue, Dec 8, 2020</small>

At the end of the course, during the final exam period on **Thu, Dec 17, 2020, from 4:30 PM to 6:30 PM**, we'll [celebrate our work together](#pf). This will be your chance to talk about your goal, show off your work, and discuss what you hope to do with it in the future.

---------------------------------------------

<a name="p0"></a>

## 🏗 P0: Project Proposal

In this first assignment, you'll write a proposal for your project. This proposal will involve you selecting the big goal you want to tackle, and making a first attempt to define what the minimum viable application might look like that addresses this goal.

Your project should express something about yourself. It might:

* solve a problem that continuously bothers you
* explore new ways of interacting with friends or communities of interest
* express your personal identity
* solve a problem you see in your community
* serve as a portfolio of work you might show to a potential employer
* be an interactive art piece or musical composition

The possibilities are endless. I look forward to seeing what you decide to work on.

### 📆 Schedule

| Introduction            | Tue, Aug 25, 2020 |
| Discussion Class Period | Thu, Sep  3, 2020 |
| Assignment Due          | Tue, Sep  8, 2020 |

### ✅ Requirements for the Assignment

Write a proposal for a project to be completed this semester. Your proposal should have:

* A **goal statement** defining the big goal you want to tackle with your project<br />***What are you trying to do?***
* A **reflection on your motivation** to work on that goal<br />***Why are you trying to accomplish that goal?***
* Some **ideas you've explored** about how you might use the Internet to help accomplish that goal<br/>***How might you get to your goal?***
* A **definition of the minimum viable application (MVA)**, including what capabilities you think it might need in order to help accomplish that goal<br />***What functionality needs to be built first?***
* A **definition of success** including some ideas about how you will measure the success of your project in moving you toward your goal<br />***How will you know when you're done?***

The minimum viable application you define must be a web-based application involving at least a **server component** (usually where any business/operational/security logic happens) and a **client component** (the code that runs in your web browser that makes the user interface run).

### 📦 Submission

You may use whatever software you wish to write your proposal. However, to submit it, you **must submit a PDF format document**.

Your proposal document **must be submitted via the Canvas assignment**, and **must be submitted at least once before the deadline** in order to be marked complete.

### ✨ Feedback

You will receive feedback as I receive your proposals. I will provide feedback as soon as possible, and at a minimum within 72 hours of submission.

Note that you can submit any assignment multiple times. If you submit an early draft well before the deadline, I will be able to provide feedback and work with you on your proposal, after which you can resubmit with changes based on our discussion.

<a name="p1"></a>

## 🏗 P1: Project Specification

Building on your proposal from the first assignment, you'll break down the functional requirements of each component of your project in a project specification document.

### 📆 Schedule

| Introduction                | Tue, Sep 15, 2020 |
| Discussion/Lab Class Period | Tue, Sep 22, 2020 |
| Office hours                | By appointment    |
| Assignment Due              | Thu, Oct 1, 2020  |

### ✅ Requirements for the Assignment

Your specification should define the scope of the course-connected portion of your project and should contain a number of user stories that each identify the who, what, and why of each piece of functionality.

#### User Stories

A *user story* is a requirement statement that identifies the basic characteristics of a piece of functionality: the role of a user with an activity or goal in mind, the desired action they would like to take, and their motivation for using that functionality.

A user story usually initially takes the form

> As a `_________________` *(who: user role)*
>
> I want to `_________________` *(what: capability/activity/goal)*
>
> so that I can `_________________` *(why: motivation)*.

Once you've written a number of user stories, you can collect them into groups to identify the different user roles your application should support, the major types of activity your application should support, and the different types of motivations users bring to your application. You can add these categories to each of your user stories in order to identify themes you can focus on independently while working on the application. This will help you to focus your efforts and complete working software in small increments.

You can capture these user stories and organize them in many different ways, but often the easiest method is to write each story on a 3"x5" index card with a marker or thick pen. This way, you can easily read what's on the card, and can easily shuffle them and re-shuffle them into categories and themes, noting their categorizations and themes with annotations in the margins or on the backs of the cards.

#### Prioritization and the MVA

Once you've developed your collection of user stories and identified the categories and themes among them, you will want to prioritize those themes and decide which of them need to be part of your minimum viable application (MVA). You may decide that some themes can easily be split into multiple phases of implementation, allowing you to prioritize a portion of that theme for early development and other portions of that theme later.

Once prioritized, identify among the highest prioritized themes those that are important to include in the minimum viable application. Then, for those themes, identify whether each user story involves creating new capabilities in the browser-based client application, in the server application that supports it, or in both. If there are portions of the same user story that involve creating new capabilities in both applications, you will need to make a note on the story of what portion of the functionality belongs in the server and what portion belongs in the client.

These MVA-relevant themes and their user stories should then be captured in a project board in your project Github repository. You can find the project board feature under the **Projects** tab of your project repo. For more information on project boards, [see the Github documentation here](https://docs.github.com/en/github/managing-your-work-on-github/about-project-boards).

Your project board will serve as a guide for you during development of the next three assignments, so it's very important that you create the relevant cards there. 

#### The Specification Document

Once all that is done, you will need to write a specification document identifying the goal and synopsis of the project based on your proposal and discussion with the instructor, the major user roles, themes, and other categorizations identified, and the portion of the work identified for the MVA with reasons for that prioritization.

Your specification document should reference your project board and should contain a link to the project repostory within the document.

### 📦 Submission

The project board must be completed in your project Github repository.

Your proposal document can be written in whatever software you wish, but **must be submitted as a PDF format document**.

Your proposal document **must be submitted via the Canvas assignment**, and **must be submitted at least once before the deadline** (along with organizing and collecting your story themes relevant to the MVA in your Github repo) in order to be marked complete.

### ✨ Feedback

I will review and provide feedback on both the project board and the document.

You will receive feedback as I receive your proposals. I will provide feedback as soon as possible, and at a minimum within 72 hours of submission.

As before, if you submit early, you will receive feedback early, and may have the opportunity to act on feedback and resubmit a revised work prior to the deadline.

<a name="p2"></a>

## 🏗 P2: Web Client

Once you have completed the project specification and project board, it's time to start working on your application. To start, we'll look at the browser-based, client side of the work.

### 📆 Schedule

| Introduction                | Thu, Oct 8, 2020  |
| Discussion/Lab Class Period | Thu, Oct 8, 2020  |
| Discussion/Lab Class Period | Tue, Oct 20, 2020 |
| Discussion/Lab Class Period | Tue, Oct 27, 2020 |
| Office hours                | By appointment    |
| Assignment Due              | Thu, Nov 5, 2020  |

### 🛠 The Tools

To do this, we'll use JavaScript with HTML and CSS, as you might expect, but we'll also use three key JavaScript libraries and three infrastructure tools/services:

#### 📦 JavaScript Libraries

* [React](https://reactjs.org/) - a library for building dynamic web interfaces using JavaScript in a componentized and manageable way. Along with React, [create-react-app](https://create-react-app.dev/) is a companion library that scaffolds a web-based application for you using React for components. (This scaffolding piece will be demonstrated for you in class.)
* [Jest](https://jestjs.io/) - a testing library included with the project scaffold created by create-react-app that allows testing your code. Along with Jest, [react-testing-library](https://testing-library.com/docs/react-testing-library/intro) is a companion library that provides easy ways to render components and assert properties on them when writing automated tests for your user interface.
* [JSdoc](https://jsdoc.app/) - an automated documentation generation library that reads formatted comments and creates a documentation website for your application.

#### 🏭 Infrastructure Services

* [Github](https://github.com) - a web service providing hosting and additional features for the [git](https://git-scm.com/) distributed version control system. You'll be using git and Github to manage your codebase.
* [Travis CI](https://education.travis-ci.com) - a continuous integration platform that you'll use to ensure every commit you push to Github passes all automated tests.
* [Heroku](https://heroku.com) - a platform-as-a-service that allows easy deployment of web-based applications that you'll used to deploy your application so that it's viewable from anywhere.

### ✅ Requirements for the Assignment

You will start by negotiating the set of requirements you will attempt to implement for this portion of the project with the instructor.

Once these are decided and you have committed to a specific set of user stories to work through, you will implement as many of them as you can before the deadline.

#### ⚙️ Functional Requirements

1. The application must be viewable through a web browser.
2. The application should enable as many of the user stories you committed to as possible, ensuring that each is implemented in alignment with the user role and motivation behind them.

#### 🔩 Source Code, Process & Deployment Requirements

1. Code for the application should be well-organized, using components and folders to keep related code together.
2. The application should make use of Github for version control. Commits should be small, be well-described in their commit messages, and contain a single change to the application.
3. All code for the application should be well-tested. (This means that for each function you write, you should write at least one, and possibly several, tests.) Automated tests should run on every commit and pull request to the repo (see Travis CI in the Tools section above).
4. The application should be well-documented (see JSdoc in the Tools section above).
5. The application should be deployed to the Internet (see Heroku in the Tools section above), and should be live (that is, publicly viewable via the Internet in a browser).

### 📦 Submission

This assignment must be submitted as **a link to your project board in the Canvas Assignment**. (You may also submit a link to a filtered view of your project board containing only relevant user stories, if you wish.)

While working through your project board, I recommend you convert each user story card to an issue on the repo. Then, as you write code to implement the user story, you can do that on a new branch in the repo and submit that branch as a Github Pull Request. Your PR will provide a good mechanism for feedback on your work, and can be linked back to the issue to provide for easy tracking of what code changes implemented what features in your application.

If you don't feel the code in your PR is ready, but still need early feedback, you have the option to create your PR in **Draft** mode, which will indicate to your reviewer(s) that you are requesting feedback at an early stage of implementation (as well as prevent accidental merging to the main branch of the repo).

### ✨ Feedback

I will review and provide feedback on Pull Requests (PRs) as requested throughout the assignment period. Before requesting feedback, be sure to identify the following in your PR description:

* what the PR does or implements
* a link to the Github Issue for the user story (these can be tagged by number, so `#24` would automatically create a link to Github Issue 24 on the same repo).
* any important decisions you made about code structure or how to implement something
* any specific questions or assistance needed
* any context for where you are in the process of implementation (checklist, statements about what's not yet done, etc.)

To request feedback, you can tag me on the Pull Request either in the **Reviews** section at the top right of the PR screen, or by tagging my username in a comment on the PR. [My Github username is `@nihonjinrxs`.](https://github.com/nihonjinrxs)

Starting with this assignment, it is imperative that you push your code to a remote branch on Github and create a PR as soon as possible, pushing code changes as you create them. This will allow for the most real-time feedback, and will support you in your learning and in accomplishing your goals for the project.

<a name="p3"></a>

## 🏗 P3: Web API Server

Once you have completed the project specification and project board, it's time to start working on your application. To start, we'll look at the browser-based, client side of the work.

### 📆 Schedule

| Introduction &amp; In-class Demo | Thu, Nov 5, 2020      |
| Discussion/Lab Class Period      | Tue, Nov 17, 2020     |
| Thanksgiving Break               | Nov 21&mdash;29, 2020 |
| Office hours                     | By appointment        |
| Assignment Due                   | Tue, Dec 1, 2020      |

### 🛠 The Tools

To do this, we'll use JavaScript on the server through Node.js, along with three key JavaScript libraries and three infrastructure tools/services:

#### 📦 JavaScript Libraries

* [Express](https://expressjs.com/) - a library for building web servers.
* [Jest](https://jestjs.io/) - a testing library that allows testing your code (chosen because this is what was used for your web client application, included with the project scaffold created by create-react-app). Along with Jest, [jest-express](https://www.npmjs.com/package/jest-express) is a companion library that provides easy ways to interact with the core objects in the Express library.
* [JSdoc](https://jsdoc.app/) - an automated documentation generation library that reads formatted comments and creates a documentation website for your application.

#### 🏭 Infrastructure Services

* [Github](https://github.com) - a web service providing hosting and additional features for the [git](https://git-scm.com/) distributed version control system. You'll be using git and Github to manage your codebase.
* [Travis CI](https://education.travis-ci.com) - a continuous integration platform that you'll use to ensure every commit you push to Github passes all automated tests.
* [Heroku](https://heroku.com) - a platform-as-a-service that allows easy deployment of web-based applications that you'll used to deploy your application so that it's viewable from anywhere.

### ✅ Requirements for the Assignment

You will start by negotiating the set of requirements you will attempt to implement for this portion of the project with the instructor.

Once these are decided and you have committed to a specific set of user stories to work through, you will implement as many of them as you can before the deadline.

#### ⚙️ Functional Requirements

1. The application must be reachable via `cURL` or a similar generic non-browser web request interface.
2. The application should enable as many of the user stories you committed to as possible, ensuring that each is implemented in alignment with the user role and motivation behind them.

#### 🔩 Source Code, Process & Deployment Requirements

1. Code for the application should be well-organized, using components and folders to keep related code together.
2. The application should make use of Github for version control. Commits should be small, be well-described in their commit messages, and contain a single change to the application.
3. All code for the application should be well-tested. (This means that for each function you write, you should write at least one, and possibly several, tests.) Automated tests should run on every commit and pull request to the repo (see Travis CI in the Tools section above).
4. The application should be well-documented (see JSdoc in the Tools section above).
5. The application should be deployed to the Internet (see Heroku in the Tools section above), and should be live (that is, publicly viewable via the Internet in a browser).

### 📦 Submission

This assignment must be submitted as **a link to your project board in the Canvas Assignment**. (You may also submit a link to a filtered view of your project board containing only relevant user stories, if you wish.)

While working through your project board, I recommend you convert each user story card to an issue on the repo. Then, as you write code to implement the user story, you can do that on a new branch in the repo and submit that branch as a Github Pull Request. Your PR will provide a good mechanism for feedback on your work, and can be linked back to the issue to provide for easy tracking of what code changes implemented what features in your application.

If you don't feel the code in your PR is ready, but still need early feedback, you have the option to create your PR in **Draft** mode, which will indicate to your reviewer(s) that you are requesting feedback at an early stage of implementation (as well as prevent accidental merging to the main branch of the repo).

### ✨ Feedback

I will review and provide feedback on Pull Requests (PRs) as requested throughout the assignment period. Before requesting feedback, be sure to identify the following in your PR description:

* what the PR does or implements
* a link to the Github Issue for the user story (these can be tagged by number, so `#24` would automatically create a link to Github Issue 24 on the same repo).
* any important decisions you made about code structure or how to implement something
* any specific questions or assistance needed
* any context for where you are in the process of implementation (checklist, statements about what's not yet done, etc.)

To request feedback, you can tag me on the Pull Request either in the **Reviews** section at the top right of the PR screen, or by tagging my username in a comment on the PR. [My Github username is `@nihonjinrxs`.](https://github.com/nihonjinrxs)

Starting with this assignment, it is imperative that you push your code to a remote branch on Github and create a PR as soon as possible, pushing code changes as you create them. This will allow for the most real-time feedback, and will support you in your learning and in accomplishing your goals for the project.

<a name="p4"></a>

## 🏗 P4: Integration and Production Deployment

Once you have completed the project specification and project board, it's time to start working on your application. To start, we'll look at the browser-based, client side of the work.

### 📆 Schedule

| Introduction                | Thu, Nov 17, 2020     |
| Discussion/Lab Class Period | Tue, Dec 1, 2020      |
| Thanksgiving Break          | Nov 21&mdash;29, 2020 |
| Office hours                | By appointment        |
| Assignment Due              | Tue, Dec 8, 2020      |

### 🛠 The Tools

To do this, we'll use JavaScript on the server through Node.js, along with three key JavaScript libraries and three infrastructure tools/services:

#### 📦 JavaScript Libraries

* [Express](https://expressjs.com/) - a library for building web servers.
* [Jest](https://jestjs.io/) - a testing library that allows testing your code (chosen because this is what was used for your web client application, included with the project scaffold created by create-react-app). Along with Jest, [jest-express](https://www.npmjs.com/package/jest-express) is a companion library that provides easy ways to interact with the core objects in the Express library.
* [JSdoc](https://jsdoc.app/) - an automated documentation generation library that reads formatted comments and creates a documentation website for your application.

#### 🏭 Infrastructure Services

* [Github](https://github.com) - a web service providing hosting and additional features for the [git](https://git-scm.com/) distributed version control system. You'll be using git and Github to manage your codebase.
* [Travis CI](https://education.travis-ci.com) - a continuous integration platform that you'll use to ensure every commit you push to Github passes all automated tests.
* [Heroku](https://heroku.com) - a platform-as-a-service that allows easy deployment of web-based applications that you'll used to deploy your application so that it's viewable from anywhere.

### ✅ Requirements for the Assignment

You will start by negotiating the set of requirements you will attempt to implement for this portion of the project with the instructor.

Once these are decided and you have committed to a specific set of user stories to work through, you will implement as many of them as you can before the deadline.

#### ⚙️ Functional Requirements

1. The application must be reachable via `cURL` or a similar generic non-browser web request interface.
2. The application should enable as many of the user stories you committed to as possible, ensuring that each is implemented in alignment with the user role and motivation behind them.

#### 🔩 Source Code, Process & Deployment Requirements

1. Code for the application should be well-organized, using components and folders to keep related code together.
2. The application should make use of Github for version control. Commits should be small, be well-described in their commit messages, and contain a single change to the application.
3. All code for the application should be well-tested. (This means that for each function you write, you should write at least one, and possibly several, tests.) Automated tests should run on every commit and pull request to the repo (see Travis CI in the Tools section above).
4. The application should be well-documented (see JSdoc in the Tools section above).
5. The application should be deployed to the Internet (see Heroku in the Tools section above), and should be live (that is, publicly viewable via the Internet in a browser).

### 📦 Submission

This assignment must be submitted as **a link to your project board in the Canvas Assignment**. (You may also submit a link to a filtered view of your project board containing only relevant user stories, if you wish.)

While working through your project board, I recommend you convert each user story card to an issue on the repo. Then, as you write code to implement the user story, you can do that on a new branch in the repo and submit that branch as a Github Pull Request. Your PR will provide a good mechanism for feedback on your work, and can be linked back to the issue to provide for easy tracking of what code changes implemented what features in your application.

If you don't feel the code in your PR is ready, but still need early feedback, you have the option to create your PR in **Draft** mode, which will indicate to your reviewer(s) that you are requesting feedback at an early stage of implementation (as well as prevent accidental merging to the main branch of the repo).

### ✨ Feedback

I will review and provide feedback on Pull Requests (PRs) as requested throughout the assignment period. Before requesting feedback, be sure to identify the following in your PR description:

* what the PR does or implements
* a link to the Github Issue for the user story (these can be tagged by number, so `#24` would automatically create a link to Github Issue 24 on the same repo).
* any important decisions you made about code structure or how to implement something
* any specific questions or assistance needed
* any context for where you are in the process of implementation (checklist, statements about what's not yet done, etc.)

To request feedback, you can tag me on the Pull Request either in the **Reviews** section at the top right of the PR screen, or by tagging my username in a comment on the PR. [My Github username is `@nihonjinrxs`.](https://github.com/nihonjinrxs)

Starting with this assignment, it is imperative that you push your code to a remote branch on Github and create a PR as soon as possible, pushing code changes as you create them. This will allow for the most real-time feedback, and will support you in your learning and in accomplishing your goals for the project.

<a name="pf"></a>

## 🏗 PF: Project Demo Celebration

During the Final Exam period, rather than take an exam, we will use that time to celebrate our work together. We'll show off our project work to our classmates.

**Each person will have 6 to 8 minutes to present their work and discuss it.** During your turn, you will want to briefly:

* Discuss what your goal was and why you are motivated to work on it
* Discuss what you decided on for your MVA and how it helps you to reach your goal
* Reflect on the process of creating your project
* Show off your work!
* Give your thoughts about future improvement of the application

**Please do not feel any pressure or anxiety about this.** It is not a formal presentation, it is not a graded activity, and it is intended only to be a way to enjoy the shared excitement felt after successfully creating something you care about.

That said, if it helps you to create slides for your discussion points, even if they only have pictures on them and some speaker notes for you, please feel free to do so, but keep them informal. (All content should, of course, be appropriate for a classroom session.)

**When you're not presenting, you should be celebrating your classmates.** Once they've finished speaking, feel free to clap, laugh, cheer, congratulate, or ask questions of your classmates.

As part of the celebration, please bring your favorite treat and non-alcoholic beverage to the video call to enjoy during the celebration.
