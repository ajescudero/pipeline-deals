function get_labels(entries) {
  return _.map(_.uniqBy(entries, "deal_stage.name"), "deal_stage.name");
}

function get_values(entries) {
  return get_labels(entries).map((label) => {
    let sum = 0;

    for (let entry of entries.filter(
      (entry) => entry.deal_stage.name == label.deal_stage.name
    )) {
      sum += parseFloat(entry.value);
    }

    return sum;
  });
}
