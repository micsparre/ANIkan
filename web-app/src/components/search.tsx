import { useState, Fragment } from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { Anime } from '@mattplays/aniapi'

const SEARCH_URI = 'https://api.aniapi.com';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEzOTkiLCJuYmYiOjE2NDcyMjE1NTQsImV4cCI6MTY0OTgxMzU1NCwiaWF0IjoxNjQ3MjIxNTU0fQ.VK7gOuuIU2m2BnQLssbzn7bQ1dw1t_FB0cRmBlGr37o'

interface optionValue {
    title: string,
    desc: string
}

export default function AsyncExample() {

  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);

  const handleSearch = (query : any) => {
    setIsLoading(true);
    console.log(`title: ${SEARCH_URI}/v1/anime?title=${query}`)
    fetch(`${SEARCH_URI}/v1/anime?title=${query}`, {
        method: 'GET',
        headers: {'Authorization': `Bearer ${token}`},
    })
      .then((resp) => resp.json())
      .then((items) => {
        items = items?.data?.documents
        let options = []
        if (items != undefined) {
          options = items.map((i : Anime) => ({
          title: i.titles.en,
          desc: i.descriptions.en
        }));
        }
        setOptions(options);
        setIsLoading(false);
      })

    .catch((error) => {
        console.error('Error:', error); })
  };

  // Bypass client-side filtering by returning `true`. Results are already
  // filtered by the search endpoint, so no need to do it again.
  const filterBy = () => true;

  return (
    <AsyncTypeahead
      className='search-box'
      filterBy={filterBy}
      id="search-title"
      isLoading={isLoading}
      labelKey="title" 
      minLength={3}
      onSearch={handleSearch}
      options={options}
      placeholder="Search for an Anime title..."
      renderMenuItemChildren={(option, props) => (
        <Fragment>
          <span> {(option as optionValue).title} </span>
        </Fragment>
      )}
    />
  );
};