# Pomodoro Timer React App

This project is a simple Pomodoro timer built with React. It helps you organize your work sessions and breaks using the Pomodoro Technique:

- **25 minutes** of focused work
- **5 minutes** of short break after each session
- **15 minutes** of long break every 4th session

The timer automatically switches between work and break periods, tracking your cycles and break types.

---

## Features

- Countdown timer for work and break sessions
- Automatic transition between work and rest
- Longer break every 4 cycles
- Visual indication of current session and cycle
- Built with React functional components and hooks

---

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload as you make changes.

#### `npm test`

Launches the test runner in interactive watch mode.

#### `npm run build`

Builds the app for production to the `build` folder.  
Your app is ready to be deployed!

#### `npm run eject`

Removes the single build dependency from your project and copies all configuration files and dependencies. **This is a one-way operation.**

---

## How the Timer Works

- The timer starts with **25:00** for a work session.
- When the timer runs out:
  - If it's a work session and NOT the 4th cycle, it starts a 5 min break.
  - If it's the 4th work session, it starts a 15 min long break.
  - If it's a break, it returns to a 25 min work session and increments the cycle.
- The UI displays:
  - The current countdown
  - Whether it's work time or rest time
  - A message for long breaks
  - The current cycle number

---

## Customization

You can easily modify the timer durations by changing the initial values in `App.js`:

```javascript
const [seconde, setSeconde] = useState(0);
const [minute, setMinute] = useState(25); // <-- Work session length
// ...
if(seconde == 0 && minute == 0 && work == true && cycle%4 == 0){
  setMinute(15); // <-- Long break length
  // ...
}else if(seconde == 0 && minute == 0 && work == true && cycle%4 !== 0){
  setMinute(5); // <-- Short break length
  // ...
}
```

---

## Learn More

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)
- [Pomodoro Technique](https://en.wikipedia.org/wiki/Pomodoro_Technique)

---
