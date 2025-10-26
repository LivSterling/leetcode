/*
You are working for a large retailer. We would like to determine what was the product which sold the most, and how many times it was sold.

Write a function that takes in a collection of product name strings representing purchases and returns the name of the product with the most purchases, and the total number of sales for that product. If multiple products sold the same amount, return the first to appear in the purchases list. Product names are case insensitive.

Example:
purchases1 = ["Television", "Laptop", "MacBook", "MacBook", , "Nintendo Switch"]
findMostSold(inventory1) -> Laptop, 2

purchases2 = ["Blue Shirt", "Red Shirt", "blue pants", "blue shirt", "Red Shirt", "Red Shirt", "blue shirt", "Blue Shirt"]
purchases3 = ["Plushy", "Teddy Bear", "Doll", "Plushy", "Teddy Bear"]
purchases4 = ["Plushy", "Teddy Bear", "Doll", "Doll", "Plushy", "Teddy Bear"]
purchases5 = ["Teddy BeAr", "Plushy", "Doll", "Plushy", "Teddy Bear"]

All Test Cases:
findMostSold(purchases1) -> MacBook, 2
findMostSold(purchases2) -> Blue Shirt, 4
findMostSold(purchases3) -> Plushy, 2
findMostSold(purchases4) -> Plushy, 2
findMostSold(purchases5) -> Teddy Bear, 2

Complexity analysis variables:
P = Number of purchases
(Note: Individual purchase strings have constant length)

there will always be one item at least
go through arr keep count of each item we see 
*keep items in hashmap

Television: 1
Laptop: 1
MacBook : 2
Nintendo : 1
  
  declare max = 0
iterate through hashmap
if current total is greater that max
max = current total
 

*/

function findMax(items) {
const itemCount = new Map()

  for (const item of items) {
    if (itemCount.has(item)) {
      let key = item.trim().toLowerCase()
      itemCount.set(item, itemCount.get(key) + 1)
    } else {
      itemCount.set(key, 1)
    }
  }
  
  let maxtKey = null
  let maxCount = 0
  let maxFirstIndex = +Infinity
  
  forEach (key, count) {
    if (count > maxCount) {
      maxCount = count
    }
  }
  
  
  
  

}




"use strict";

const purchases1 = ["Television", "Laptop", "MacBook", "MacBook", "Nintendo Switch"];
const purchases2 = ["Blue Shirt", "Red Shirt", "blue pants", "blue shirt", "Red Shirt", "Red Shirt", "blue shirt", "Blue Shirt"];
const purchases3 = ["Plushy", "Teddy Bear", "Doll", "Plushy", "Teddy Bear"];
const purchases4 = ["Plushy", "Teddy Bear", "Doll", "Doll", "Plushy", "Teddy Bear"];
const purchases5 = ["Teddy BeAr", "Plushy", "Doll", "Plushy", "Teddy Bear"];