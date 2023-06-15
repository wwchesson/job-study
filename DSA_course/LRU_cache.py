#leetcode 146
# if use linked list: head is the most recent customer and tail is the least recent customer (if using the banking analogy) -- 4 -> 5 -> 3 --> 7

#don't want to traverse each time. Need doubly linked list in order to have static head and tail nodes
#head--4 <-> 3 <-> 5
#if have to change around the pointers, it's also O(1)

#also have a map that keeps track of each node's value (4: 4node, 3: 3node) for O(1) access

class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.nodeMap = dict()
        self.head = Node(0, 0)
        self.tail = Node(0, 0)
        self.head.next = self.tail
        self.tail.prev = self.head

    #check if key exists, if not returns - 1
    #if key exists, move person to front of list and return the value
    def get(self, key):
        currentNode = self.nodeMap[key]
        if not currentNode: return -1

        #move to front of list
        self.delete(currentNode)
        self.insert_at_front(currentNode)

        return currentNode.value


    def put(self, key, value):
        #if customer exists, don't have to worry about capacity. Just need to move to front and update their value
        if self.nodeMap[key]:
            currentNode = self.nodeMap[key]
            self.delete(currentNode)
            self.insert_at_front(currentNode)

            #update value
            currentNode.value = value
            self.nodeMap[key] = currentNode
        else:
            #if the customer doesn't exist, have to see if exceed capacity with this new customer
            if self.capacity == self.nodeMap.size():
                #delete last person in list
                lastNode = self.tail.prev
                #delete from list
                self.delete(lastNode)
                #delete from nodeMap
                self.nodeMap.delete(lastNode.key)

            #create new node and add new customer/node
            #add them to start of list
            newNode = Node(key, value)
            self.insert_at_front(newNode)
            #insert into nodeMap
            self.nodeMap[key] = newNode


    #inserts a node at front of list
    #call when new customer and when an existing customer does anything
    def insert_at_front(self, currentNode):
        #head.next should point to this node
        #this node needs to point what previous head.next was pointing to
        prevFirstNode = self.head.next
        prevFirstNode.prev = currentNode
        self.head.next = currentNode
        currentNode.prev = self.head

    #called when move an existing node to front
    #or when exceed our capacity and to remove very last node
    def delete(currentNode):
        nextNode = currentNode.next
        prevNode = currentNode.prev

        #make nextNode and prevNode point to each other
        nextNode.prev = prevNode
        prevNode.next = nextNode


class Node:
    def __init__(self, key, value):
        self.prev = None
        self.next = None
        self.key = key
        self.value = value