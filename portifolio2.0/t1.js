
// Only change code below this line
function updateRecords(records, id, prop, value) {

    if(prop !== 'tracks' && value !== "") {
      records[id][prop] = value
    }
    else if (prop === 'tracks' && records[id].hasOwnProperty("tracks") === false){
      record[id][prop] = [value]
    }
    else if (prop === 'tracks' && value !== "") {
      records[id][prop].push(value)
    }
    else if (value === "") {
      delete record[id][prop]
    }
    return records;
  }
  