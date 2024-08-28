const packageBlocks = document.querySelectorAll('.package_block');

let count = 0

packageBlocks.forEach(block => {
    if (count % 2 == 0) {
        block.style.justifyContent = "end";
    }
    else {
        block.style.flexDirection = "row-reverse";
        block.style.justifyContent = "start";
    }
    count += 1;
});;

count = 0;