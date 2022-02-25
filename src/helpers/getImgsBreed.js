export const getImgsBreed = async(breed) => {
    const urlImgsBreed =`https://dog.ceo/api/breed/${breed}/images`;
    const respImgsBreed = await fetch(urlImgsBreed);
    const dataImgsBreed = await respImgsBreed.json();
    const imgsBreeds = dataImgsBreed.message.map(imgBreed =>{
        return{url:imgBreed}
    });
    return imgsBreeds;
};
