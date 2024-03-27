// code your solution here
function superbowlWin(record) {
    const win = record.find(function(year) { return year.result === "W" });
    if (!win) {
        return undefined
    }
    return win.year

}