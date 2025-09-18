# TaskFlow: Enterprise Productivity Suite

**Streamline workflows, track progress, and optimize team performance — all in one secure, intuitive platform.**

---

## Overview

TaskFlow is a modern productivity platform designed for corporate teams and professionals who demand clarity, efficiency, and control. From task orchestration to advanced reporting, TaskFlow transforms how work gets done by providing real-time insights, robust collaboration tools, and enterprise-grade security.

Whether managing complex projects or individual responsibilities, TaskFlow empowers organizations to focus on what matters most: delivering results.

---

## Core Features

### User Experience & Security

- **Secure Authentication:** Login, registration, and JWT-based session protection.
- **Password & Account Management:** Change, reset, and secure user credentials.
- **Role-Based Access:** Admin and creator roles with granular permission control.
- **Profile Management:** Update personal information, upload avatars, and verify accounts.

### Work Orchestration

- **Dynamic Activity Tracking:** Create, edit, and manage assignments with structured fields (title, description, priority, due date, and completion status).
- **Contextual Filtering:** Quickly view assignments by priority, status (pending, completed, overdue), or custom categories.
- **Bulk Actions:** Efficiently manage tasks at scale, including mass deletion or status updates.

### Collaboration & Insights

- **Visual Dashboards:** Radial charts display completed vs pending workloads at a glance.
- **Activity Metrics:** Real-time stats on total assignments, active tasks, completed items, and overdue work.
- **Team Awareness:** Visual indicators for priority and progress to align team efforts.

### Intuitive Interface

- **Responsive Design:** Adaptable mini-sidebar and full sidebar layouts for seamless navigation.
- **Modal Workflows:** Smooth overlays for creating, editing, and updating tasks without disrupting workflow.
- **Animated Interactions:** Framer Motion animations enhance task engagement and clarity.
- **Quick-Access Tools:** Add new tasks, navigate projects, or access GitHub repository directly from the header.

---

## Installation & Setup

**Prerequisites:** Node.js, npm/yarn, MongoDB

```bash
# Clone repository
git clone https://github.com/J0-23/TASKFLOW.git

# Navigate into project
cd TASKFLOW

# Install dependencies
npm install

# Create environment variables
# .env example
# MONGO_URI=your_mongo_connection_string
# JWT_SECRET=your_jwt_secret
# PORT=5000

# Start development server
npm run dev

Access the platform at http://localhost:3000.
```

---

## **Usage, Tech Stack, Roadmap**

## Usage Highlights

- **Task Orchestration:** Click “Add New” in the header to open the task modal.
- **Filtering & Navigation:** Use the sidebar and priority filters to focus on critical items.
- **Progress Visualization:** Track completion trends via the radial chart in the sidebar dashboard.
- **Profile Management:** Update personal details and manage passwords securely from the profile modal.

---

## Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS, Framer Motion, Recharts
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** JWT-based sessions with role-based access control
- **State Management:** React Context API for tasks and user sessions

---

## Conclusion

**TaskFlow transforms workflow management into a seamless, insightful, and secure experience — helping teams and professionals operate at peak performance.**

---
