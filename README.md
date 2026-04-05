# Pro-Finance Dashboard 

A high-performance, interactive, and role-based finance management dashboard built with **React** and **Tailwind CSS**. This project demonstrates advanced UI/UX principles, state management, and functional data visualization.


## 🛠 Tech Stack
- **Framework:** React 18 (Vite)
- **Styling:** Tailwind CSS (Custom Dark Mode)
- **Charts:** Recharts (SVG Responsive Charts)
- **Icons:** Lucide-React
- **State Management:** React Context/Hooks

## Top Features
- **Admin vs Viewer RBAC:** Dynamic UI that toggles action buttons based on the user's role.
- **Interactive 3D Card:** Custom-styled credit card with CSS animations.
- **Real-time Analytics:** Expense tracking via responsive area and pie charts.
- **Performance Optimized:** Used `useMemo` for heavy filtering operations.

## 📁 Project Structure
```bash
src/
 ├── components/   # Atomic design components (SpendingChart, RightPanel, etc.)
 ├── layout/       # Responsive Dashboard Grid & Sidebars
 ├── context/      # Theme and Auth state management
 └── mockData/     # Centralized data store for consistent UI

##  Key Features

### 1. **Role-Based Access Control (RBAC)**
- **Admin Mode:** Full access to "New Budget," "Add Transactions," and "Scheduled Payments" actions.
- **Viewer Mode:** Read-only access with a clean "View-Only" UI state, hiding all administrative actions to simulate real-world permission logic.

### 2. **Advanced Data Visualization**
- **Time-Based Analytics:** Interactive Area Chart showing weekly spending trends.
- **Categorical Breakdown:** A Donut Chart visualizing expense distribution across categories (Food, Fun, Bills, etc.).
- **Interactive Credit Card:** A 3D-flip credit card component with smooth hover/click animations.

### 3. **Smart Insights & Alerts**
- **Automated Observations:** Dynamic insight cards that highlight the highest spending category and monthly savings milestones.
- **Spending Goals:** Visual progress bars for tracking budgets against actual spending.

### 4. **User Experience (UX) & UI**
- **Functional Search & Filter:** Real-time transaction filtering by type (Income/Expense) and name-based search.
- **Dark Mode Support:** A seamless theme-aware UI that adapts to user preference with persistent state.
- **Responsive Design:** Fully optimized for Mobile, Tablet, and Desktop screens.

---

## Tech Stack

- **Frontend:** React.js (Vite)
- **Styling:** Tailwind CSS
- **Icons:** Lucide-React
- **Charts:** Recharts
- **State Management:** React Hooks (`useState`, `useMemo`, `useEffect`)

---

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/finance-dashboard.git](https://github.com/your-username/finance-dashboard.git)


## Install dependencies:
npm install
##  ** Run the development server:
npm run dev
## My Approach
For this assignment, I prioritized Modular Component Architecture.
Each UI element (Cards, Charts, ListItems) is a self-contained component, making the codebase scalable.
Used useMemo for transaction filtering to ensure high performance.
Implemented a "Single Source of Truth" for the user role to demonstrate how UI behavior changes dynamically.

## Assumptions & Notes
Data is currently mocked to simulate API responses.
Authentication is simulated via local state to showcase the transition from Login to Dashboard.
Role switching is provided via a dropdown in the header for easy evaluation.