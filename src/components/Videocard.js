import React from 'react'

function formatNumberToLakh(number) {
  if (typeof number !== 'number') {
    return NaN; // return NaN if the argument is not a number
  }
  return (number / 100000).toFixed(2) + ' Lakh';
}


const Videocard = ({ info }) => {
    // console.log(info);
    if(!info) return(<div>Loading...</div>);
    const {snippet,statistics} = info;
    const {channelTitle,title,thumbnails} = snippet;
    return (
        <div className="p-2 m-2 w-72 shadow-lg">
          <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
          <ul>
            <li className="font-bold py-2">{title}</li>
            <li>{channelTitle}</li>
            <li>{formatNumberToLakh(parseInt(statistics.viewCount))} views</li>
          </ul>
        </div>
      );
    };
    

export default Videocard