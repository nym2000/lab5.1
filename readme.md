Reflection Questions

Q. How did you dynamically create and append new elements to the DOM? ---- Ans. I used document.createElement('li') to create a new list and added the items using innerHTML to include the name, price, quantity and the remove button, and was then added to the cart via appendChild(li).

Q. What steps did you take to ensure accurate updates to the total price? ---- Ans. After adding the quantity field to the HTML, I went back to update both the add and remove functions to include the value. 

Q. How did you handle invalid input for product name or price? ---- Ans. For name I checked if the string was empty, and for the price and quantity, I used the isNaN function to check for the input's validity, and since and quantity cannot be negative, I added a check for that as well.

Q. What challenges did you face when implementing the remove functionality? ---- Ans. The price and quantity were coming up as undefined when calling the removeItem functionality, I used li.dataset.price and li.dataset.qty to make the information available when building the li.
