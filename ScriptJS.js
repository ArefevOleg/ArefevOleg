// alert('Привет'); alert('Мир');


const users = [
  {
    id: 1,
    name: 'Bob',
    isStudent: true,
  },
  {
    id: 2,
    name: 'Alex',
    isStudent: true,
  },
  {
    id: 3,
    name: 'Ann',
    isStudent: true,
  },
  {
    id: 4,
    name: 'Donald',
    isStudent: true,
  },
];


const updatedSuperUser = {
  ...superUser, // Создаем поверхностную копию объекта superUser
  address: {
    ...superUser.address, // Создаем поверхностную копию объекта address внутри superUser
    geo: {
      ...superUser.address.geo, // Создаем поверхностную копию объекта geo внутри address
      lat: '-40.1234', // Обновляем значение lat
      lng: '60.4321', // Обновляем значение lng
    },
  },
};