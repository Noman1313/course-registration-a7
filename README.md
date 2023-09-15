Question 1:-  Add at least 3 Project features

Ans: 
1. If someone want to buy a course then click the select button and the course add on the cart section.

2. If someone click a select button then the course add on the cart but try to click the same button to buy the same course, there is a toast error. The toast error said you cannot buy the same course at a time.

3. The cart has credit 20 hours. if someone buy the course then cart add credit hours. When the credit hours cross 20 hours, there is an error. The error said you cannot add cerdit more then 20 hours.

4. If someone buy a course and cart added the course price. Even buy another course the cart added also the price and show total price in the cart.



Question 2:- Discuss how you managed the state in your assignment project.

Ans:
At first i called a useState in card.jsx file. Then use a useEffect and fetch the fake data api.Then set the data on the useState. The data is an array and i show the data on display by a card so i map all data and set a card.
Then i need the data just i called the function. After that i need some useState in app.jsx file to show the cart components when called useState on app.jsx i need to props to pass the data on the cart components. And then i received data an objects on cart components.Then i use the props and get the value. useState is important to pass data one components to other components and its managed state vary easily. 