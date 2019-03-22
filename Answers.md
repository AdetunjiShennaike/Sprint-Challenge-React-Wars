# Answers

1.  What is React JS and what problems does it try and solve?
      react is a library that was built by facebook to solve their issues with single page applications. It's allows developers to create smaller reusable components that can be easily put together to make 1 much larger complex app. 

2.  What does it mean to _think_ in react?
      to think in react means to think in terms of parts. so looking at what has to be done/built and figuring out the smallest parts you can possibly break it down to and then figuring out how to make each and every component with the least amount of work possible. keeping everything simple and non repetitive. 

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
      functional components return jsx and are typically used inside of class components that act as the parent for passing props. class components also allow for more usage of the react library with the use of extend. it is also where you render things.

4.  Describe state.
      State is an object that can be referenced on the this component. it can be set with the setstate method and it is persisted memory for the component its made in. the render function gets called when the state is changed. 


5.  Describe props.
      Props are properties that are set inside of a component that is being called on from a parent component.so if i import a component from a js file that uses props.title i can link the state of my current component to equal the property (props) of the imported component <ImportedItem Property={this.state.title} />