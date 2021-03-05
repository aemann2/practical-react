import React, { useState, useEffect } from 'react';

function FetchRandomUser() {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);

  // fetching data process:
  // - show loading indicator as data is fetching
  // - fetch data
  // - render data
  // ... in other words, we're NOT fetching the data in the render / return section

  // when the component mounts, fetch runs
  useEffect(() => {
    const url = 'https://api.randomuser.me/';

    // VERY IMPORTANT that we have the [] after the fetch request, or else React will contiunally fetch the data when using useEffect. this explains why: https://stackoverflow.com/questions/56926282/react-hooks-fetch-wont-stop-fetching
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPerson(data.results[0]), setLoading(false));
  }, []);

  // if loading === true or the person hasn't retrieved yet...
  return (
    <div>
      {loading || !person ? (
        <div>loading...</div>
      ) : (
        <div>
          <div>{person.name.first}</div>
          <div>{person.name.last}</div>
          <div>
            <img src={person.picture.large} alt='' />
          </div>
        </div>
      )}
    </div>
  );
}

export default FetchRandomUser;
