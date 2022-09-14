import {ReactComponent as shopIcon} from '../assets/images/shop.svg';
import {ReactComponent as marathonIcon} from '../assets/images/marathon.svg';
import {ReactComponent as landingsIcon} from '../assets/images/landings.svg';
import {ReactComponent as activitiesIcon} from '../assets/images/activities.svg';
import {ReactComponent as blogersIcon} from '../assets/images/blogers.svg';
import {ReactComponent as sctuctureIcon} from '../assets/images/sctucture.svg';
import {ReactComponent as dashbordIcon} from '../assets/images/dashbord.svg';
import {ReactComponent as likeIcon} from '../assets/images/like.svg';

export const routes = [
  {title: 'Дашборд', to: '/1', icon: dashbordIcon},
  {title: 'Биржа активности', to: '/2', icon: activitiesIcon},
  {title: 'Биржа блогеров', to: '/3', icon: blogersIcon},
  {title: 'Взаимопиар', to: '/4', icon: likeIcon},
  {title: 'Моя структура', to: '/mysctucture', icon: sctuctureIcon},
  {title: 'Магазин', to: '/6', icon: shopIcon},
  {title: 'Марафон', to: '/7', icon: marathonIcon},
  {title: 'Лендинги', to: '/8', icon: landingsIcon},
]