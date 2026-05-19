function People() {
  const people = [
    { id: 1, name: "Thinh", age: 8 },
    { id: 2, name: "Vuong", age: 21 },
    { id: 3, name: "Triet", age: 21 },
    { id: 4, name: "Phuc", age: 16 },
    { id: 5, name: "Duc", age: 9 },
    { id: 6, name: "Hieu", age: 22 },
    { id: 7, name: "Khoa", age: 20 },
    { id: 8, name: "Nam", age: 21 },
    { id: 9, name: "Tuan", age: 9 },
    { id: 10, name: "Phong", age: 20 },
  ];

  const firstTeenager = people.find((person) => person.age >= 10 && person.age <= 16);
  const sortedPeople = [...people].sort((a, b) =>
    a.age === b.age ? a.name.localeCompare(b.name) : a.age - b.age
  );

  return (
    <>
      <h1>People List</h1>
      <ul>
        {people.map((person, index) => (
          <li key={person.id}>
            {index + 1}. {person.name}, Age: {person.age}
          </li>
        ))}
      </ul>

      {firstTeenager ? (
        <p>
          First teenager: {firstTeenager.name}, Age: {firstTeenager.age}
        </p>
      ) : (
        <p>No result</p>
      )}

      <h2>Sorted Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {sortedPeople.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.age}</td>
            </tr>
          ))}
        </tbody>
      </table>    
    </>
  );
}
export default People;