export default function Header ({ image, alt, name }){
    return (
        <header>
            <img src={image} alt={alt} />
            <h1>{name}</h1>
        </header>
    );
}