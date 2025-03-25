# Timer App [In Progress]

A timer application that lets you create multiple timers and run them simultaneously. It also provides the option to edit the created timers and delete the ones you no longer want.

## Steps to Run the Project

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Project**:
   Start the development server with:
   ```bash
   npm start
   ```

   The app will run on `http://localhost:5173` by default.

---

## Additional Changes and Enhancements

These changes mentioned below improves the **scalability**, **maintainability**, and **clarity** of the codebase, making it easier to work on and extend in the future. The project structure is now cleaner, and there are fewer redundancies across components.

### 1. **Reusable UI Components**

   - Refactored the existing components to create reusable components, improving **maintainability**, **consistency**, and reducing **code duplication** by creating:
     - **Reusable UI components** for various actions like **FieldWrapper**, **Input**, **TextArea**, and **ErrorMessage**.
     - **Reusable Button components** for various actions like **Primary**, **Secondary**, **Edit**, **Delete**, **Close**, **Timer PlayPause**, and **Restart** to eliminate redundant code across the application.
     - Extracted the **ModalWrapper** component, which is now used in both `AddTimerModal` and `EditTimerModal` to eliminate redundant UI code.
   
### 2. **Codebase Structure and Cleaner Imports**

   - The codebase has been **restructured** by:
     - Organizing directories to make the project **modular**.
     - Adding **import aliases** for cleaner and more maintainable import paths.
     - Creating index files in various directories to re-export components, simplifying import paths across the project.
   - Refactored import paths using **alias paths** to simplify the imports and improve code clarity.

   ### Path aliases created:
   - `@ui`: UI Components Directory
   - `@components`: Components Directory
   - `@pages`: Pages Directory
   - `@utils`: Utils Directory
   - `@store`: Redux Store Directory
   - `@types`: Types/Interfaces Directory
   
   ### Folder Structure

   ```graphql
   src/
   │── components/
   │   │   ├── UI/
   │   │   │   ├── Input.tsx
   │   │   │   ├── TextArea.tsx
   │   │   │   ├── FieldWrapper.tsx
   │   │   │   ├── ErrorMessage.tsx
   │   │   │   ├── index.ts (Re-exports all UI components)
   │   │   │   ├── Button/
   │   │   │   │   ├── Primary.tsx
   │   │   │   │   ├── Secondary.tsx
   │   │   │   │   ├── Edit.tsx
   │   │   │   │   ├── Delete.tsx
   │   │   │   │   ├── Close.tsx
   │   │   │   │   ├── TimerControls/
   │   │   │   │   │   ├── PlayPause.tsx
   │   │   │   │   │   ├── Restart.tsx
   │   │   ├── timer/(Primitive UI elements used in larger components)
   │   │   ├── Modal/
   │   │   │   ├── AddTimerModal.tsx
   │   │   │   ├── EditTimerModal.tsx
   │   │   │   ├── ModalWrapper.tsx
   │   │   ├── EmptyState.tsx
   │   │   ├── TimerBackground.tsx
   │   │   ├── TimerControls.tsx
   │   │   ├── TimerItem.tsx
   │   │   ├── TimerList.tsx
   │   │   ├── TimerProgress.tsx
   │   │   ├── index.ts (Re-exports components)
   │── store/ (Redux store)
   │   ├── useTimerStore.ts
   │── types/ (interfaces/types)
   │   ├── ui.ts
   │   ├── timer.ts
   │── utils/ (utility functions)
   │   ├── ...
   │── pages/ (App pages/screens)
   │   ├── Home.tsx
   ```

### 3. **Refactoring Timer Store and Hooks**

   - Extracted the **`useTimerStore`** logic into the **hooks directory** for better organization.
   - Renamed `useTimerStore` to `timerStore` as it now holds only the **Redux-related logic**.
   - Reorganized the **store** and **timer slice** structure for improved maintainability.

### 4. **Code Formatting with Prettier**

   - Applied **Prettier** for code formatting across the codebase to ensure **consistent style conventions**.

---

## **Tech Stack**

- **[React](https://react.dev/)** (v18)
- **[Redux](https://redux.js.org/)** (v5), **[Redux Toolkit](https://redux-toolkit.js.org/)** (v2.4.0), **[React Redux](https://react-redux.js.org/)** (v9)
- **[Lucide React](https://lucide.dev/)** (v0.344.0) – A collection of open-source SVG icons.
- **[Tailwind CSS](https://tailwindcss.com/)**
- **[TypeScript](https://www.typescriptlang.org/)** (v5.5.3)
- **[Vite](https://vitejs.dev/)** (v5.4.2) 
- **[PostCSS](https://postcss.org/)** (v8.4.35) – A tool for transforming CSS with JavaScript plugins
- **[Sonner](https://github.com/aviraldg/sonner)** (v1.4.3) – A simple toast notification library for React.
- **[Vitest](https://vitest.dev/)** (v1.3.1) – A fast, unit testing framework built with Vite.
- **[ESLint](https://eslint.org/)** (v9.9.1) 
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** (v10.4.18)

---

## **Assignment Details**

Welcome to the Timer App Assignment! This project is designed to evaluate your skills in React development, focusing on **UI implementation**, **code quality**, **state management**, and **best practices**. The project uses **React**, **Vite**, **Tailwind CSS**, and **Vitest** for testing.

---

## **Objective**

Your task is to improve and enhance an existing Timer App based on the following requirements. The app currently has a partially implemented timer system, and your goal is to address the listed issues and extend its functionality.

---

## **Tech Stack**

- **Frontend Framework**: React (with Vite for fast development)
- **Styling**: Tailwind CSS
- **Testing Framework**: Vitest (for unit and component testing)

---

## **Steps to Complete**

1. **Fork or Clone the Repository**

   - Fork or clone the repository to your local machine.
   - Set up the project using the provided instructions.

2. **Complete the Following Tasks:**

   - [ ] 1. **Match the UI:**

      - Ensure the app's UI matches the given **screenshots**.
      - <img width="250" alt="Screenshot 2024-12-03 at 8 30 53 PM" src="https://github.com/user-attachments/assets/59782304-c254-4d87-9fac-7f92c15bbc6f">
      - <img width="250" alt="Screenshot 2024-12-03 at 3 29 25 PM" src="https://github.com/user-attachments/assets/9bb429ff-cd78-4411-b222-9d947c3ae79b">
      - <img width="250" alt="Screenshot 2024-12-03 at 8 21 04 PM" src="https://github.com/user-attachments/assets/a26e8ec7-7e00-4964-8f61-651945f4bbd1">
      - <img width="250" alt="Screenshot 2024-12-03 at 8 21 30 PM" src="https://github.com/user-attachments/assets/a513a462-540f-45e7-8ac0-0890995ec82d">

   - [ ] 2. **Simultaneous Timers:**

      - Update the app to allow multiple timers to run simultaneously (currently, only one timer runs at a time).

   - [ ] 3. **Snack Bar Behavior:**

      - When a timer is completed:
        - A snack bar notification should display.
        - The notification sound should keep playing until the snack bar is dismissed.

   - [ ] 4. **Fix Snack Bar Console Error:**

      - Resolve the **console error** that occurs when the snack bar's **dismiss button** is clicked.

   - [ ] 5. **Extract Common Components:**

      - Extract the buttons in the **Add/Edit Timer Modal** as a **separate reusable component**.
      - Replace all instances of similar buttons in the app with this component.

   - [ ] 6. **Consolidate Modal Code:**

      - Refactor the code to use a **single modal component** for both adding and editing timers, eliminating duplication.

   - [ ] 7. **Validation Snack Bars:**

      - Currently, the **Submit button** is disabled when the form is invalid.
      - Show an **error

 snack bar** or notification when the form is submitted with invalid data.

   - [ ] 8. **Responsive Snack Bar Placement:**

      - For **desktop devices**: Display snack bars in the **top-right corner**.
      - For **mobile devices**: Display snack bars at the **bottom of the screen**.

   - [ ] 9. **Write Tests:**

      - Add **unit tests** for the `validation.ts` file to ensure all validation rules work as expected.
      - Write **component tests** for reusable components like `TimerItem` and `ModalButtons`.

   - [ ] 10. **Timer Persistence:**
       - Use **localStorage** to persist timers across page refreshes.

---

## **Project Setup**

1. Clone the repository:

   ```bash
   git clone https://github.com/CW-Codewalnut/timer.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Run tests:
   ```bash
   npm vitest
   ```

---

## **Evaluation Criteria**

You will be evaluated on the following points:

1. **UI Matching:**

   - The app's UI should match the provided screenshots.

2. **Code Quality:**

   - Clean, modular, and readable code.
   - Avoid code duplication and ensure reusable components are implemented.

3. **Functionality:**

   - Simultaneous timers, snack bar notifications, and localStorage persistence should work seamlessly.

4. **State Management:**

   - Effective use of React hooks or Context API for managing state.

5. **Testing:**

   - Comprehensive unit and component tests, especially for validation logic and reusable components.

6. **Error Handling:**

   - Resolve the existing snack bar console error and provide meaningful feedback to users for invalid forms.

7. **Responsiveness:**

   - Snack bar placement should adapt based on device type (desktop vs. mobile).

8. **Commit Messages:**
   - Follow **conventional commit standards** (e.g., `feat:`, `fix:`, `refactor:`).

---

## **Deliverables**

1. A **GitHub repository link** to your completed project (forked from the original repo).
2. Include a `README.md` describing:
   - Steps to run your project.
   - Any additional changes or enhancements you made.

---

## **Time Constraint**

You are expected to complete this assignment in **4 hours** of focused effort.

---

## **Contact**

If you have any questions or issues, feel free to reach out via the provided contact channels in the repository.

Good luck! 🚀
