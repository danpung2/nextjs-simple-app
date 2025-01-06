export default async function MovieDetail({params}) {
    const { id } = await params;
    return <h1>movie {id}</h1>;
}