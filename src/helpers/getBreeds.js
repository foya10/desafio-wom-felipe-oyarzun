export const getBreeds = async() => {
    const urlBreeds =`https://dog.ceo/api/breeds/list/all`;
    const respBreeds = await fetch(urlBreeds);
    const dataBreeds = await respBreeds.json();
    const breeds = Object.keys(dataBreeds.message).map(breed =>{
        return{
            name:breed
        }
    });
    return breeds;
};
