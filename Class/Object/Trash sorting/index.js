// initial implementation
function smartGarbage(trash, bins) {
  if (trash == 'waste') { // case 1
    bins[trash] += 1; // action                             doing the same shit }
  } else if (trash == 'recycling') { // case 2                                  }
    bins[trash] += 1; // action                             doing the same shit }------> lets just optimize this into one step since **no matter what case, we do the same shit**
  } else if (trash == 'compost') { // case 3                                    }
    bins[trash] += 1; // action                             doing the same shit }
  }
  return bins;
}

// optimized implementation
function smartGarbage(trash, bins) {
  bins[trash] += 1;
  return bins;
}

smartGarbage('recycling', { waste: 10, recycling: 10, compost: 10 });