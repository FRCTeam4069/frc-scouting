// A function to increment the numeric value of a label with a provided ID by a provided amount
function incrementNumericLabel(labelID, incrementValue) {
    // Get the label with the provided ID
    var label = document.getElementById(labelID)

    // Get the numeric value of the label
    var labelValue = parseInt(label.innerText)

    // Increment it by the provided value
    labelValue += incrementValue

    // Set the text of the label to the new value
    label.innerText = labelValue
}