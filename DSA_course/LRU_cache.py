#leetcode 146
# if use linked list: head is the most recent customer and tail is the least recent customer (if using the banking analogy) -- 4 -> 5 -> 3 --> 7

#don't want to traverse each time. Need doubly linked list in order to have static head and tail nodes
#head--4 <-> 3 <-> 5
#if have to change around the pointers, it's also O(1)

#also have a map that keeps track of each node's value (4: 4node, 3: 3node) for O(1) access

class LRUCache:
    def __init__(self, ):
        pass

    #check if key exists, if not returns - 1
    def get(key):
        pass

    def put(key, value):
        pass