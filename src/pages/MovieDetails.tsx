import { useParams } from "react-router-dom";

export default function MovieDetails() {
    const { id } = useParams<{ id: string }>();
    return <h1>Movie Details Page for Movie ID: {id}</h1>;
}