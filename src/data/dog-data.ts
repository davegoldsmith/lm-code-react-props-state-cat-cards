import Dog from './dog';
import { v4 as uuidv4 } from 'uuid';

const dogData : Array<Dog> = [
	{
		name: 'Floofus',
		species: 'Puppy',
		favFoods: ['marshmallows'],
		birthYear: 2020,
	},
	{
		name: 'Doofus',
		species: 'Doggo',
		favFoods: ['porridge, dog food'],
		birthYear: 2010,
	},
	{
		name: 'Goofus',
		species: 'Dog',
		favFoods: ['bouncy balls'],
		birthYear: 2015,
	},
];

dogData.forEach(dog => dog.id = uuidv4());
console.log(dogData); // each cat should now have a unique ID
export default dogData;
