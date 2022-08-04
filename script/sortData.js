export function sortUserByName(users) {
    return users.sort((a, b) =>
      a.results[0].name.first < b.results[0].name.first ? -1 : 1
    );
  }