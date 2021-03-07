import html5 from '../assets/img-tecnologias/html5.png';
import css3 from '../assets/img-tecnologias/css3.png';
import js from '../assets/img-tecnologias/js.png';
import angular from '../assets/img-tecnologias/angular.png';
import react from '../assets/img-tecnologias/react.png';
import node from '../assets/img-tecnologias/nodejs.png';
import sails from '../assets/img-tecnologias/sails.png';
import mongodb from '../assets/img-tecnologias/mongodb.png';
import mysql from '../assets/img-tecnologias/mysql.png';
import sequelize from '../assets/img-tecnologias/sequelize.png';
import java from '../assets/img-tecnologias/java.png';
import php from '../assets/img-tecnologias/php.png';
import socket from '../assets/img-tecnologias/socket.png';
import git from '../assets/img-tecnologias/git.png';

const tecnologias = [
    { id: 'html-5', titulo: 'HTML 5', porcentaje: '99', img: html5, color: '#fa502e' },
    { id: 'css-3', titulo: 'CSS 3', porcentaje: '90', img: css3, color: '#2277ff' },
    { id: 'js', titulo: 'JavaScript', porcentaje: '90', img: js, color: '#fddb3e' },
    { id: 'angular', titulo: 'Angular', porcentaje: '90', img: angular, color: '#e23237' },
    { id: 'react', titulo: 'React', porcentaje: '70', img: react, color: '#53d2fa' },
    { id: 'node', titulo: 'Node', porcentaje: '60', img: node, color: '#4caf50' },
    { id: 'sails', titulo: 'Sails', porcentaje: '95', img: sails, color: '#28a3b2' },
    { id: 'sequelize', titulo: 'Sequelize', porcentaje: '70', img: sequelize, color: '#03afef' },
    { id: 'java', titulo: 'Java', porcentaje: '50', img: java, color: '#db380e' },
    { id: 'php', titulo: 'PHP', porcentaje: '65', img: php, color: '#777bb3' },
    { id: 'socket', titulo: 'socket.io', porcentaje: '85', img: socket, color: '#fff' },
    { id: 'mongodb', titulo: 'MongoDB', porcentaje: '75', img: mongodb, color: '#69b140' },
    { id: 'mysql', titulo: 'MySQL', porcentaje: '85', img: mysql, color: '#f29111' },
    { id: 'git', titulo: 'GIT', porcentaje: '85', img: git, color: '#000' },
]

export default tecnologias;