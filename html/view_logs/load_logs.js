// A function to display the data loaded from the Python backend in a table
function load_log_data() {
    // Call the backend script and load the data in a JSON list format
    var request = $.ajax({
        type: 'post',
        url: 'load_logs.py'

    }).done(function (output) {
        // Get the table on the HTML page
        var table = document.getElementById('data_table')

        // Get the descriptions from the larger JSON object
        descriptions = output.descriptions

        // When complete, first add the element descriptions to the first row
        var titleRow = table.insertRow()
        for (var i in descriptions) {
            // Add HTML bold tags to the current title
            var title = '<b>' + descriptions[i] + '</b>'

            // Create a cell and set its text to the title for this column
            var cell = titleRow.insertCell()
            cell.innerHTML = title
        }

        // Add objects only if reading the file succeeded
        if (output.success) {
            // Get the list of objects from the JSON
            objects = output.objects

            // Iterate over the list of objects
            for (var i in objects) {
                // Get the current object
                var object = objects[i]

                // Put the elements from the object into a list
                elements = [
                    object.team_number,
                    object.team_color,
                    object.can_throw,
                    object.can_climb,
                    object.notes
                ]

                // Create a new row in the table
                var row = table.insertRow()

                // Iterate over the elements
                for (var j in elements) {
                    // Insert a cell and display the current value in it
                    var cell = row.insertCell()
                    cell.innerHTML = elements[j]
                }
            }
        } else {
            // If it failed, add a row containing a notification that there was no data
            var messageRow = table.insertRow()
            messageRow.innerHTML = 'No logs were found'
        }
    })
}