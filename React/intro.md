# Intro.

1. What makes React SPECIAL?: 
  - its compositional model. (composition: combining simple functions together to create complex functions.)/ ( A good function should follow the "DOT" rule)
  - its declarative nature.(Not imperative) (you tell JS what you want to do and it takes care of the steps to do it itself).
  - the way data flows through a component.(unidirectional data flow => from parent to children and also data update occurs only in parent component).(Not 2 way data binding).
  - it is just JavaScript.

--------

- In React the process of deciding what to render is decoupled from actually rendering it.
- This decoupling makes it possible to render stuff on: 
  - native devices.
  - server.
  - VR environments.
  
- We use ReactDom because we are working on the browser.
