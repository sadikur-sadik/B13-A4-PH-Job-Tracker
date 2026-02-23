


## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

	ans:
		 1. getElementById: can get element only through id , can get only one element, doesnot require css selectors,loop is not possible.
		 2. getElementsByClassName: can get element only through class , can get more than one element, doesnot require css selectors,loop is possible, saves elements like array;
		 3.querySelector: can get element through class or id , can get only one element,require css selectors,loop is not possible as it almost works like getElementById.
		 4.querySelectorAll: can get element through class or id, can get more than one element,require css selectors,loop is possible, saves elements like array;

### 2. How do you create and insert a new element into the DOM?

	ans: 1. const childContainer = document.createElement('element name') for creation
		 2. const parentContainer = getElementById('parent id);
		 parentContainer.appendChild(childContainer )

### 3. What is Event Bubbling? And how does it work?
	ans: It works like lowerclass to upperclass. If lowerclass(child) gets interaction, upperclass(parent) also gets interacted .
	but vice barca does not works. 
### 4. What is Event Delegation in JavaScript? Why is it useful?

	ans: Adding event listener only to the container(parent), but we can target anything inside that container(any child). And click will work. It saves us from using to much eventListeners. 

### 5. What is the difference between preventDefault() and stopPropagation() methods?
	ans: 
		1.preventDefault(): prevents the default behavior of html elements. For example: clicking an <a> takes to a new page. It is an inbuilt trait of <a>. But this method can stop it from happening.
		2.stopPropagation(): stops event bubbling. Means if we use it, the bubble no longer works.
---



