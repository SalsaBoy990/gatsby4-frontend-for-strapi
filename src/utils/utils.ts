import { Box } from "./interface/interfaces";

// Only utility function definitions here...

// Filter boxes for reference slider, format output array
export function getFilteredBoxes(allStrapiBoxes: Box[], boxGroup: string) {
  let filteredBoxes: Box[] = [];
  filteredBoxes = filterByBoxGroup(allStrapiBoxes, boxGroup);
  return filteredBoxes;
}

function filterByBoxGroup(boxesToFilter: Box[], boxGroup: string) {
  const filteredBoxes: Box[] = boxesToFilter.filter((item: Box) => item.boxGroup.slug === boxGroup);
  return filteredBoxes;
}
