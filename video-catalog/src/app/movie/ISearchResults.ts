import IMovie from './IMovie';

export default interface ISearchResult{
    Search: IMovie[],
    totalResults: string,
    Response: string
};