import React from 'react';
import { useNavigate } from 'react-router-dom';

const PerformerCard = ({ songData }) => {
  const navigate = useNavigate();

  if (!songData) return null;

  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-gradient-to-br from-rose-900/70 to-blue-900/70 backdrop-blur-md animate-fadein rounded-xl cursor-pointer shadow-lg"
      onClick={() => navigate(`/artists/${songData?.artists?.[0]?.adamid}`)}
    >
      <img alt="artist_img" src={songData?.images?.coverart} className="w-full h-56 rounded-xl" />
      <p className="mt-4 font-semibold text-lg text-blue-100 truncate">
        {songData?.subtitle}
      </p>
    </div>
  );
};

export default PerformerCard;
