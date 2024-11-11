// Selection Sort for Ascending Order
function sortArrayAscending() {
    let array = [12, 5, 3, 7, 19, 1, 9];
    let n = array.length;

    // Selection sort algorithm
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        // Swap the found minimum element with the element at i
        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }

    let sum = array.reduce((a, b) => a + b, 0);
    let avg = sum / array.length;

    document.getElementById("ascResult").innerHTML = `Sorted Array: ${array.join(", ")}<br>Sum: ${sum}<br>Average: ${avg.toFixed(2)}`;
}

// Selection Sort for Descending Order
function sortArrayDescending() {
    let array = [15, 3, 2, 7, 19, 20, 9];
    let n = array.length;

    // Selection sort algorithm for descending order
    for (let i = 0; i < n - 1; i++) {
        let maxIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] > array[maxIndex]) {
                maxIndex = j;
            }
        }
        // Swap the found maximum element with the element at i
        let temp = array[i];
        array[i] = array[maxIndex];
        array[maxIndex] = temp;
    }

    let sum = array.reduce((a, b) => a + b, 0);
    let avg = sum / array.length;

    document.getElementById("descResult").innerHTML = `Sorted Array: ${array.join(", ")}<br>Sum: ${sum}<br>Average: ${avg.toFixed(2)}`;
}

// Display the last modified date
document.getElementById('lastModified').textContent = document.lastModified;
