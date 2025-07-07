var arr = [
  {
    'guest_type': 'crew',
    'first_name': 'Marco',
    'last_name': 'Burns',
    'guest_booking': {
        'room_no': 'A0073',
        'some_array': [7,2,4]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'John',
    'last_name': 'Doe',
    'guest_booking': {
        'room_no': 'C73',
        'some_array': [1,3,5,2,4,3]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'Jane',
    'last_name': 'Doe',
    'guest_booking': {
        'room_no': 'C73',
        'some_array': [1,3,5,2,4,3]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'Albert',
    'last_name': 'Einstein',
    'guest_booking': {
        'room_no': 'B15',
        'some_array': [2,5,6,3]
    },
  },
  {
    'guest_type': 'crew',
    'first_name': 'Jack',
    'last_name': 'Daniels',
    'guest_booking': {
        'room_no': 'B15',
        'some_array': [2,5,6,3]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'Alan',
    'last_name': 'Turing',
    'guest_booking': {
        'room_no': 'B15',
        'some_array': [2,5,6,3]
    },
  },
];

function mutateArray(a) {
    // Combine steps 1, 2, and 3 into a single loop:
    // - Flatten the array
    // - Convert 'some_array' to 'some_total'
    // - Filter to only include objects with guest_type 'guest'
    let processedArray = [];

    for (let item of a) {
        // Only process items with guest_type 'guest'
        if (item.guest_type === 'guest') {
            processedArray.push({
                'guest_type': item.guest_type,
                'first_name': item.first_name,
                'last_name': item.last_name,
                'room_no': item.guest_booking.room_no,
                'some_total': item.guest_booking.some_array.reduce((sum, num) => sum + num, 0)
            });
        }
    }

    // Step 4: Sort the array alphabetically by last and first name
    processedArray.sort((a, b) => {
        if (a.last_name === b.last_name) {
            return a.first_name.localeCompare(b.first_name);
        }
        return a.last_name.localeCompare(b.last_name);
    });

    return processedArray;
}

$(document).ready(function() {
    $('#originalArray').html(JSON.stringify(arr, null, 2));
    $('#resultsArray').html(JSON.stringify(mutateArray(arr), null, 2));
});
