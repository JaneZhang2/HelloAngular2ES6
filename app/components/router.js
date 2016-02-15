import { ListComponent } from './post/list';
import { NewComponent } from './post/new';
import { EditComponent } from './post/edit';
import { AboutComponent } from './about';
import { LoginComponent } from './login';

export const router = {
  config: [
    { path: '/', component: ListComponent, name: 'List', useAsDefault: true },
    { path: '/new', component: NewComponent, name: 'New' },
    { path: '/edit/:id', component: EditComponent, name: 'Edit' },
    { path: '/about', component: AboutComponent, name: 'About' },
    { path: '/login', component: LoginComponent, name: 'Login' }
  ]
};
