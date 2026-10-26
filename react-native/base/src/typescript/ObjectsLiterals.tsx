interface Person{
    age:number;
    firtsName:string;
    lastName:string;
    address:Address;
}

interface Address{
    country:string;
    houseNo:string;
    street?:string;
}

export const ObjectLiterals = () =>{
    const person: Person = {
        age:38,
        firtsName: 'susana',
        lastName:' dias',
        address:{
            country:'Canada',
            houseNo: '615',
        },
    };

    return(
        <>
            <h3>Objetos Literales</h3>
            <pre>{JSON.stringify(person, null, 2)}</pre>
        </>
    )
}