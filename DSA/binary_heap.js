//Binary heap is a special type of tree: max & min
//min: parent < children. As go deeper, increasing the value of the nodes
//max: parent has to be greater than the children

//maxBinaryHeap:
//insertion = "bubbling up"
//removal = "extractMax" - "sinking down"

class MaxBinaryHeap {
    constructor() {
        this.values = []
    }

    insert(element) {
        this.values.push(element);
        this.bubbleUp()
    }

    bubbleUp() {
        let idx = this.values.length - 1
        const element = this.values[idx]

        while(idx > 0) {
            //child finding parent
            let parentIdx = Math.floor((idx-1)/2)
            let parent = this.values[parentIdx]

            if(element <= parent) break

            this.values[parentIdx] = element
            this.values[idx] = parent
            idx = parentIdx
        }
    }

    extractMax() {
        const max = this.values[0]
        const end = this.values.pop()

        if(this.length) {
            this.value[0] = end
            this.sinkDown()
        }

        return max
    }

    sinkDown() {
        let idx = 0
        let length = this.values.length
        let element = this.values[0]

        while(true) {
            let leftChildIdx = 2*idx + 1
            let rightChildIdx = 2*idx + 1

            //may not be a left or right child. Therefore leave undefined
            let leftChild, rightChild
            let swap = null

            if(leftChildIdx < length) {
                leftChild = this.values[leftChildIdx]
                if(leftChild > element) {
                    swap = leftChildIdx
                }
            }

            if(rightChildIdx < length) {
                rightChild = this.values[rightChildIdx]
                if((!swap && rightChild > element) || (swap && rightChild > leftChild)) {
                    swap = rightChildIdx
                }
            }

            if(!swap) break

            this.values[idx] = this.values[swap]
            this.values[swap] = this.values[idx]
            idx = swap
        }

    }
}

//parent finding:
//left => 2*idx + 1
//right => 2*idx + 2

let heap = new MaxBinaryHeap()
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)

console.log(heap)