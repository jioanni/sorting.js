function bubbleSort(arr) {
    var counter = arr.length;
    while(counter > 0){
    for(var i = 0; i < arr.length-1; i++) {
        if(arr[i] > arr[i+1]) {
            swap(arr, i, i+1);
        } 
    }

    counter --;
}
    return arr
}

function swap(arr, idx1, idx2){
    var placeHolder = arr[idx2];
    arr[idx2] = arr[idx1];
    arr[idx1] = placeHolder;
    return arr
}