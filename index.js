
require('datejs');

function combineUsers(...args) {
    // Initialize return object
    let combinedObject = {
        users: []
    };

    // Loop through args to merge arrays into users
    for (let arr of args) {
        combinedObject.users.push(...arr);
    }

    // Get today's date and format it
    let today = new Date();
    combinedObject.merge_date = today.toString("M/d/yyyy");

    // Return the object
    return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};