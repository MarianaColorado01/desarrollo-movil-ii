export const BasicTypes = () =>{
    const name: string = 'Fernando';
    const age: number = 18;
    const isActive: boolean = false;

    const powers: string[]=['React','ReactNative','Astro'];

    return(
        <>
            <h1>Tipos básicos</h1>
            {name} - {age} - {isActive ? 'Activo': 'Inactivo'}
            <p>{powers.join(',')}</p>
        </>
    );
};