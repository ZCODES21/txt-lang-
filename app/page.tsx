import ClientComponent from './Components/Client/ClientComponents'
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "ZEROCODES MOVIES",
  description: "yawa basta i check imong mga movies",
  icons: "https://cdn-icons-png.flaticon.com/512/1137/1137143.png",
};


export type Movie = {

    backdrop_path: string;
    id: number;
    title: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    adult: boolean;
    original_language: string;
    genre_ids: string[];
    genres: string[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    
  };

  export type TvShow = {
    backdrop_path: string;
    id: number;
    name: string;
    original_name: string;
    overview: string;
    poster_path: string;
    media_type: string;
    adult: boolean;
    original_language: string;
    genre_ids: string[];
    popularity: number;
    release_date: string;
    first_air_date?: string;
    video?: boolean;
    vote_average: number;
    vote_count: number;
    origin_country?: string[];
  };

  export type Allmovies = {
    backdrop_path: string;
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    adult: boolean;
    original_language: string;
    genre_ids: string[];
    popularity: number;
    release_date?: string;
    first_air_date?: string;
    video?: boolean;
    vote_average: number;
    vote_count: number;
    origin_country?: string[];
    genres: string[];
  };

  export type UpcomingMovie = {
    backdrop_path: string;
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    adult: boolean;
    original_language: string;
    genre_ids: string[];
    popularity: number;
    release_date?: string;
    first_air_date?: string;
    video?: boolean;
    vote_average: number;
    vote_count: number;
    origin_country?: string[];
    genres: string[];
  };

  export type People = {

    id: any;
    known_for_department: string;
    name: string;
    popularity: number;
    profile_path: string;
    character?: string | undefined;
    biography?: string;
    birthday?: string;
    place_of_birth?: string;

  };
  
  export type TvPeople = {
    
    id: any;
    known_for_department: string;
    name: string;
    popularity: number;
    profile_path: string;
    character?: string | undefined;
    biography?: string;
    birthday?: string;
    place_of_birth?: string;

  };

  export type Similar = {

    backdrop_path: string;
    id: number;
    title: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    adult: boolean;
    original_language: string;
    genre_ids: string[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    genres: string[];
    
  };


  export type SimilarTvShow = {

    backdrop_path: string;
    id: number;
    title: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    adult: boolean;
    original_language: string;
    genre_ids: string[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    
  };


  export type AllList = {

    backdrop_path: string;
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    adult: boolean;
    original_language: string;
    genre_ids: string[];
    popularity: number;
    release_date?: string;
    first_air_date?: string;
    video?: boolean;
    vote_average: number;
    vote_count: number;
    origin_country?: string[];
    genres: string[];
    
  };


  export type AllTvList = {

    backdrop_path: string;
    id: number;
    name: string;
    original_name: string;
    overview: string;
    poster_path: string;
    media_type: string;
    adult: boolean;
    original_language: string;
    genre_ids: string[];
    popularity: number;
    release_date: string;
    first_air_date?: string;
    video?: boolean;
    vote_average: number;
    vote_count: number;
    origin_country?: string[];
    
  };

  export type Genre = {


    id: number;
    name: string;
    
  };




export default function page() {


  return (
    <>


    
    <div className="w-full min-h-screen Bg pb-5">

    <ClientComponent />

    </div>



    </>
  )
}
