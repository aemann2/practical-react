import React, { useState, useEffect } from 'react';

function FetchRandomUser() {
  const [loading, setLoading] = useState(true);
  // replacing one person with an array of people
  // const [person, setPerson] = useState(null);
  const [people, setPeople] = useState([]);

  // fetching data process:
  // - show loading indicator as data is fetching
  // - fetch data
  // - render data
  // ... in other words, we're NOT fetching the data in the render / return section

  // when the component mounts, fetch runs
  useEffect(() => {
    const url = 'https://api.randomuser.me/?results=5';

    // VERY IMPORTANT that we have the [] after the fetch request, or else React will contiunally fetch the data when using useEffect. this explains why: https://stackoverflow.com/questions/56926282/react-hooks-fetch-wont-stop-fetching
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPeople(data.results), setLoading(false));
  }, []);

  // if loading === true or the person hasn't retrieved yet...
  return (
    <div>
      {loading || !people ? (
        <div>loading...</div>
      ) : (
        <div>
          {/* this is how we display the same content for every person in the people array...we use map and map in the JSX for each item in the array */}
          {people.map((person, index) => {
            return (
              // assigning a key so JS doesn't yell at us. we could also use the index of the map, which we declared above but aren't using. ideally, you want to use something better than the index of the array
              <div key={person.login.uuid}>
                <div>{person.name.first}</div>
                <div>{person.name.last}</div>
                <div>
                  <img src={person.picture.large} alt='' />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default FetchRandomUser;
