# House Recommendation

## Problem Statement
Implement a UI system that can create a housing layout and recommend the best suited house
for rent in the layout. The score for each house is calculated based on the availability of
services(Restaurant, Gym, Hospital) nearby.

## Expectations
1. The user can create a dynamic housing layout of M x N dimension.
2. The user can assign each plot in layout with any of the following -
  a. House
  b. Restaurant
  c. Gym
  d. Hospital
3. A plot can have a single or combination of services (Restaurant,Gym,Hospital).
However, it can only accommodate a maximum of one House.
4. Each House should be added with a unique label to identify it.
5. A plot will be considered as a distance of 1km while calculating the score for the
house.
6. Movement from one plot to adjacent plot can only be done either horizontally or
vertically.
7. The UI has a button that recommends the best house to choose.

## Example Layout
![image](https://user-images.githubusercontent.com/80761691/224503097-10d2d4dc-1822-4739-9f9f-5ef5e09c2d29.png)

## CodeSandbox link
https://codesandbox.io/s/github/Princee215/CloudSEK_Frontend-Assignment
