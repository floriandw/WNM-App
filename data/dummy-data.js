import User from '../models/user';
import ToDo from '../models/todo';
import Category from '../models/category';

export const USERS = [
    new User('1', 'florian', [
        new ToDo(1, 'todo 1', new Date().toLocaleString(), new Date().toLocaleString(), new Date().toLocaleString(), 1),
        new ToDo(2, 'todo 2', new Date().toLocaleString(), new Date().toLocaleString(), new Date().toLocaleString(), 1),
        new ToDo(3, 'todo 3', new Date().toLocaleString(), new Date().toLocaleString(), new Date().toLocaleString(), 2),
        new ToDo(4, 'todo 4', new Date().toLocaleString(), new Date().toLocaleString(), new Date().toLocaleString(), 2),
        new ToDo(5, 'todo 5', new Date().toLocaleString(), new Date().toLocaleString(), new Date().toLocaleString(), 2),
        new ToDo(6, 'todo 6', new Date().toLocaleString(), new Date().toLocaleString(), new Date().toLocaleString(), 2),
    ]),
    new User('2', 'test', [
        new ToDo(1, 'todo 1', new Date().toLocaleString(), new Date().toLocaleString(), new Date().toLocaleString(), 1),
        new ToDo(2, 'todo 2', new Date().toLocaleString(), new Date().toLocaleString(), new Date().toLocaleString(), 1),
        new ToDo(3, 'todo 3', new Date().toLocaleString(), new Date().toLocaleString(), new Date().toLocaleString(), 2),
        new ToDo(7, 'todo 7', new Date().toLocaleString(), new Date().toLocaleString(), new Date().toLocaleString(), 1),
    ])
];

export const CATEGORIES = [
    new Category(1, 'category 1'),
    new Category(2, 'category 2')
]