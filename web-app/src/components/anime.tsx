import { Anime } from '@mattplays/aniapi'
import { Fragment } from 'react'

export default function AnimeDisplay(props : any) {

    const img_url = props.data?.has_cover_image ? props.data?.cover_image : ""
    return (
        <div>
            { props.data && Object.keys(props.data).length !== 0 && 
            <Fragment>
                <img src={img_url} /> <br/>
                <span> title: {props.data?.titles?.en} </span> <br/>
                <span> description: {props.data?.descriptions?.en} </span> <br/>
                <span> format: {props.data?.format} </span> <br/>
                <span> total episodes: {props.data?.episodes_count} </span> <br/>
                {/* <span> sagas: {[props.data?.sagas]} </span> <br/> */}
                <span> score: {props.data?.score} </span> <br/>
            </Fragment>
            }
        </div>
    )
};