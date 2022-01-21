var TreeNode = function(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
};

// class Node{
//     constructor(data,left,right){
//         this.data = data;
//         this.left = left;
//         this.right = right;
//     }
// }

/**
 *      5
 *    /   \
 *  -22    11
 *  / \    / \
 * 9  50  9   2
 */

var root = new TreeNode(5, new TreeNode(-22, new TreeNode(9), new TreeNode(50)), new TreeNode(11, new TreeNode(9), new TreeNode(2)));
// var root = new Node(5, new Node(-22, new Node(9), new Node(50)), new Node(11, new Node(9), new Node(2)));

// console.log(root);

function logTree(root){
    console.log('Node', root.value);
    if(root.left){
        logTree(root.left);
    }
    if(root.right){
        logTree(root.right);
    }
}

function maxSumTestLeft(root){
    if(!root) return 0;
    // console.log(root.value);
    leftSum = root.value + maxSum(root.left);
    return leftSum;
}

function maxSumTestRight(root){
    if(!root) return 0;
    // console.log(root.value);
    let rightSum = root.value + maxSum(root.right);
    return rightSum;
}

function maxSum(root){
    if(!root) return 0;
    // console.log(root.value);
    let leftSum = root.value + maxSum(root.left);
    let rightSum = root.value + maxSum(root.right);
    return Math.max(leftSum,rightSum);
}

logTree(root);
console.log('---------------------');
console.log(maxSum(root));