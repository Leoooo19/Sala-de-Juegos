import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Registro } from './pages/registro/registro';
import { QuienSoy } from './pages/quien-soy/quien-soy';
import { MayorMenor } from './pages/mayor-menor/mayor-menor';
import { Ahorcado } from './pages/ahorcado/ahorcado';
import { Preguntados } from './pages/preguntados/preguntados';
import { AdivinaNumero } from './pages/adivina-numero/adivina-numero';
import { Chat } from './pages/chat/chat';


export const routes: Routes = [
    {
    path: '',
    component: Home},
    {
    path: 'login',
    component: Login},
    {
    path: 'registro',
    component: Registro},
    {
    path: 'quien-soy',
    component: QuienSoy},
    {
    path: 'mayor-menor',
    component: MayorMenor
    },
    {
    path: 'ahorcado',
    component: Ahorcado
    },
    {
    path: 'preguntados',
    component: Preguntados
    },
    {
    path: 'adivina-numero',
    component: AdivinaNumero
    },
    {
    path: 'chat',
    component: Chat
    },
];