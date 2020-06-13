export async function sortEntries(result) {
  return result.data.entries.sort(
    (a, b) => a["deal_stage"]["percent"] - b["deal_stage"]["percent"]
  );
}
export function getLabels(labels) {
  return _.map(_.uniqBy(labels, "deal_stage.name"), "deal_stage.name");
}

export function getDeals(labels, entries) {
  return labels.map((label) => {
    let sum = 0;

    for (let entry of entries.filter(
      (entry) => entry.deal_stage.name == label
    )) {
      sum += parseFloat(entry.value);
    }

    return _.round(sum, 2);
  });
}
