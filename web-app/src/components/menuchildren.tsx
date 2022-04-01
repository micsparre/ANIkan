import { Anime } from '@mattplays/aniapi'
import { Fragment } from 'react'
import { formatEnum } from './anime';

export default function SearchDisplay(props : any) {
    const animeObj : Anime = props.data;
    const img_url = animeObj?.has_cover_image ? animeObj?.cover_image : "";
    const format = Object.values(formatEnum)[animeObj?.format];
    return (
        <div>
            { animeObj && Object.keys(animeObj).length !== 0 && 
            <Fragment>
                {img_url !== "" && 
                    <img className="search-img" src={img_url} alt="anime cover" /> }
                    <span> {animeObj?.titles?.en} -  </span>
                    <span> {format} </span>
            </Fragment>
            }
        </div>
    )
};