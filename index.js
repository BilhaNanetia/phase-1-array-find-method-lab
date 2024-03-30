function superbowlWin(record) {
    const win = record.find(item =>item.result === "W");
    return win ? win.year : undefined;
}
console.log(superbowlWin(record));  // Output: 2015

const sadReality = [
    //Records with no win objects
];

console.log(superbowlWin(sadReality));  //Output: undefined
