const reachDestination = (distance, speed) => {
  const time = Math.round((2 * distance) / speed) / 2;

  return `I should be there in ${time} hours.`;
};

module.exports = reachDestination;
