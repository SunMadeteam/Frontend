import MainPage from './../features/Main-page/index';
import Ordering from './../features/Ordering/Ordering';
import Catalogs from './../features/Catalogs/index';
import Catalog from './../features/Catalog/index';
import Shopping from './../features/Shopping/index';
import About from './../features/About/index';
import SelectDateTime from './../features/Select-date-time/SelectDateTime';
import Registration from './../features/Registration/index';
import RegistrationConfirmationCode from './../features/Registration-confirmation-code/index';
import Authorization from './../features/Authorization/index';
import CartDescription from './../features/Cart-description/index';
import PersonalArea from './../features/Personal-area/index';


export const Routelist = [
  {
    path:'/',
    exact:true,
    element:MainPage,
    auth:true,
  },
  {
    path:'/order',
    exact:true,
    element:Ordering,
    auth:true,
  },
  {
    path:'/catalogs',
    exact:true,
    element:Catalogs,
    auth:true,
  },
  {
    path:'/catalog/:id',
    exact:true,
    element:Catalog,
    auth:true,
  },
  {
    path:'/cart',
    exact:true,
    element:Shopping,
    auth:true,
  },
  {
    path:'/cartDescription/:flowersName',
    exact:true,
    element:CartDescription,
    auth:true,
  },
  {
    path:'/cart',
    exact:true,
    element:Shopping,
    auth:true,
  },
  {
    path:'/about',
    exact:true,
    element:About,
    auth:true,
  },
  {
    path:'/setDate',
    exact:true,
    element:SelectDateTime,
    auth:true,
  },
  {
    path:'/registration',
    exact:true,
    element:Registration,
    auth:true,
  },
  {
    path:'/registration/confirmation',
    exact:true,
    element:RegistrationConfirmationCode,
    auth:true,
  },
  {
    path:'/auth',
    exact:true,
    element:Authorization,
    auth:false,
  },
  {
    path:'/personalArea',
    exact:true,
    element:PersonalArea,
    auth:true,
  },

]



