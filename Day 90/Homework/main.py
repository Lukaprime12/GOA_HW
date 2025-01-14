# Task 0
# Tuples are immutable , it is mainly used for constants , while set is a collection of mutable things


# Task 1
coordinates = (10, 20)
x, y = coordinates
print("x:", x)
print("y:", y)


def get_user_info():
    return ("Luka", 13, "Georgia")
name, age, country = get_user_info()
print("Name:", name)
print("Age:", age)
print("Country:", country)


num1 = 5
num2 = 10
a, b = num1, num2
print("a:", a)
print("b:", b)


# Task 2
list1 = [1, 2, 2, 3, 4, 4, 5, 5, 5]
unique_elements = set(list1)
print("Original List:", list1)
print("Set:", unique_elements)