import { Anime } from '@mattplays/aniapi'
import { Fragment } from 'react'
const JSSoup = require('jssoup').default; 

export enum formatEnum {
    "TV" = 0,
    "TV_SHORT" = 1,
    "MOVIE" = 2,
    "SPECIAL" = 3,
    "OVA" = 4,
    "ONA" = 5,
    "MUSIC" = 6
}

export default function AnimeDisplay(props : any) {
    const animeObj : Anime = props.data;
    const img_url = animeObj?.has_cover_image ? animeObj?.cover_image : "";
    const desc = new JSSoup(animeObj?.descriptions?.en);
    const format = Object.values(formatEnum)[animeObj?.format];
    return (
        <div>
            { animeObj && Object.keys(animeObj).length !== 0 && 
            <Fragment>
                <img src={img_url} alt="anime cover"/> <br/>
                <span> title: {animeObj?.titles?.en} </span> <br/>
                <span> description: {desc.getText()} </span> <br/>
                <span> format: {format} </span> <br/>
                <span> total episodes: {animeObj?.episodes_count} </span> <br/>
                {/* <span> sagas: {[animeObj?.sagas]} </span> <br/> */}
                <span> score: {animeObj?.score} </span> <br/>
            </Fragment>
            }
        </div>
    )
};