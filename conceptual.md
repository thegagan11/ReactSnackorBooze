### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
library for handling routing in React Applications. It enables navigation among views of various components in React Application, allowing the app to be single-page.
- What is a single page application?
It works by dynamically rewriting the current page rahter than loading entire new pages from the server. 

- What are some differences between client side and server side routing?
Client-Side Routing:
Handled internally by JS loaded on the page. No page reload, faster transitions, and less data transferred over the network. 
Server-Side Routing:
Every new route results in a new request to the server, and hte server renders the new page. 
Slower transitions as the whole page reloads. 

- What are two ways of handling redirects with React Router? When would you use each?
<Redirect> Component is used within React components to redirect to different route. It's useful in conditional rendering scenarios.

useHistory Hook: Allows programmatic navigation, which is useful for redirecting after an even like form submission.
- What are two different ways to handle page-not-found user experiences using React Router? 
Using Route with no Path, we can create a route without a path prop whill will match any URL not matched by earlier Routes. it can render custom 'NON FOUND' component.

Using useHistory Hook to check if the current path matches any known route, and programmatically navigate to a "Not Found" page if it doesn't.

- How do you grab URL parameters from within a component using React Router?
Using useParams you can destructure the url parameter.

- What is context in React? When would you use it?
Context provides a way to pass data through the components tree without having to pass props down manually at every level. It's useful for sharing data that can be considred "global" for a tree of React Components, like authenticated user info, theme settings, etc.

- Describe some differences between class-based components and function
  components in React.
  Class-Based Components:
  More Compelx syntax, use 'this' keyword.
  Have lifeCycle methods (like 'ComponentDidMount'). 
  State is defined in constructor or as a class field.

  Function Components:
  Simpler, more readable syntax.
  Use hooks for state and side effects ('useState', 'useEffect').

- What are some of the problems that hooks were designed to solve?
It solves the problem of reuseability of stateful logic between components, whcih was hard with class components. 
They provide a more intuitive way to structure components with related logic close together, rather than spreading it across lifecycle methods. 
Hooks make it easier to split one component into smaller functions based on what pieces are related(such as setting up a subscritpion or fetching data)