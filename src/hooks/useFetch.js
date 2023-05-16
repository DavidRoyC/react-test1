import { useEffect, useState } from "react";

const useFetch = url => {
  const [targets, setTargets] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetch(url)
      .then(response => response.json())
      .then(users => {
        let targets = users.map(user => {return {
          id: user.id,
          name: user.name,
          state: user.address.city.includes('a')?'alive':'downed',
          reward: `${parseInt(user.address.zipcode)}€`
        }})
        setTargets(targets);
        setLoading(false);
      })
      .catch(error => {
        setError(true);
      });
  }, [url]);


  return [targets, setTargets, loading, error];
};

export default useFetch;