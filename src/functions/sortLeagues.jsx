function sortLeaguesByFixtureCount(data) {
    // Convert the data object into an array of [leagueName, leagueData] entries
    const leagueEntries = Object.entries(data);

    // Sort the entries based on the number of fixtures in each league
    leagueEntries.sort((a, b) => b[1].fixtures.length - a[1].fixtures.length);

    // Convert back to an object if you need the result in the same format
    const sortedData = Object.fromEntries(leagueEntries);

    return sortedData;
}

export default sortLeaguesByFixtureCount;